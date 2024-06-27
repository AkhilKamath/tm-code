// Function to create workers
const { Worker } = require('bullmq');
const { getEmailData, setEmailStatus } = require('./lib/dbApis');
const { redis } = require('./lib/redisQueue')
const { Resend } =  require("resend");
const resend = new Resend(process.env.RESEND_API);

module.exports = function createWorker() {
    const worker = new Worker('emailQueue', async (job) => {
    const { emailId } = job.data;
  
    const emailData = await getEmailData(emailId)
    
    // send email code
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: emailData.emails,
      subject: "Money Grant Email",
      html: emailData.content,
    });
  
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