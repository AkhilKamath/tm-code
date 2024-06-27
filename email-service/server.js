// server.js
const cluster = require('cluster');
const numCPUs = 2; // require('os').cpus().length;
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const emailRouter = require('./routes/emails')
const createWorker = require('./worker')
const cors = require('cors')



const app = express();


// Middleware
app.use(cors())
app.use(express.json());

// API endpoint to enqueue emails
app.use('/emails', emailRouter);

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
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

  createWorker();
}
