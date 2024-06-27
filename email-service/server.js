// server.js
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const express = require('express');
const { Queue, Worker } = require('bull');
const nodemailer = require('nodemailer');
const Redis = require('ioredis');
const { Resend } =  require("resend");
const connectDB = require("./lib/dbConnect");
const { getEmailData, setDeliveredStatus } = require('./lib/dbApis');


const app = express();
const redis = new Redis({
  host: '127.0.0.1',
  port: 6379
});

// Connect to MongoDB
connectDB();

const resend = new Resend("re_123456789");

const emailQueue = new Queue('emailQueue', { redis });

// Middleware
app.use(express.json());

// API endpoint to enqueue emails
app.post('/send-email', async (req, res) => {
  const { emailId } = req.body;

  try {
    await emailQueue.add({ emailId });
    res.status(200).json({ message: 'Email queued' });
  } catch (error) {
    console.error('Error queuing email:', error);
    res.status(500).json({ message: 'Error queuing email', error: error.message });
  }
});

// Function to create workers
function createWorker() {
  const worker = new Worker('emailQueue', async (job) => {
  const { emailId } = job.data;

  const emailData = await getEmailData(emailId)
  
  // send email code
  const { data, error } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: emailData.emails,
    subject: "Money Grant Email",
    html: emailData.content,
  });

  if (error) {
    console.error('error in sending email')
  }


  console.log('successfully sent email', { data });
  await setDeliveredStatus(emailId)

  }, { connection: redis });

  // Handle errors
  worker.on('failed', (job, err) => {
    console.error(`Job ${job.id} failed with error: ${err.message}`);
  });

  return worker;
}

// Initialize workers based on number of CPU cores
if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  // Fork workers
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
    cluster.fork();
  });
} else {
  console.log(`Worker ${process.pid} started`);
  // Start server
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

  createWorker();
}
