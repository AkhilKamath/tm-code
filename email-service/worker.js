// Function to create workers
const { Worker } = require('bullmq');
const { getEmailData, setEmailStatus, getFoundation, getNgo } = require('./lib/dbApis');
const { redis } = require('./lib/redisQueue')
const { Resend } =  require("resend");
const resend = new Resend(process.env.RESEND_API);
const connectDB = require("./lib/dbConnect");
const async = require('async')

async function getEmailBatch(emailData) {
    const foundation = await getFoundation(emailData.foundation_email)
    const emailBatchData = []

    async function getNgoData(ngoEmail, callback) {
        console.log(ngoEmail, callback);
        try {
            const ngo = await getNgo(ngoEmail);
            const content = emailData.content
                .replace('{name}', ngo.name)
                .replace('{address}', ngo.address)
                .replace('{foundation_name}', foundation.name);
            emailBatchData.push({
                from: 'Acme <onboarding@resend.dev>',
                to: ngoEmail,
                subject: emailData.name,
                html: content
            });
            callback(null); // Pass null as the first argument to indicate no error
        } catch (error) {
            callback(error); // Pass the error to the callback
        }
    }

    try {
        await new Promise((resolve, reject) => {
            async.each(emailData.emails, (email, callback) => {
                getNgoData(email, callback);
            }, (err) => {
                if (err) {
                    return reject(err);
                }
                resolve();
            });
        });
    } catch (error) {
        console.log('error in getting ngo data for all ngo emails', error);
        throw new Error('error in getting ngo data for all ngo emails');
    }

    return emailBatchData

}

module.exports = async function createWorker() {
    // Connect to MongoDB
    await connectDB();
    const worker = new Worker('emailQueue', async (job) => {
    const { emailId } = job.data;
  
    const emailData = await getEmailData(emailId)
    const emailBatchData = await getEmailBatch(emailData)
    // send email code
    const { data, error } = await resend.batch.send(emailBatchData);
  
    if (error) {
      console.error('error in sending email', error)
    }
  
  
    console.log('successfully sent email', { data });
    await setEmailStatus(emailId, 'delivered')
  
    }, { connection: redis });
  
    // Handle errors
    worker.on('failed', (job, err) => {
      console.error(`Job ${job.id} failed with error: ${err.message}`);
    });
}