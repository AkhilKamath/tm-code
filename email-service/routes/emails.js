const router = require('express').Router()
const { setEmailStatus } = require('../lib/dbApis');
const { emailQueue } = require('../lib/redisQueue')

const timeDelay = (req, res, next) => {
    setTimeout(() => {
        // for demo purposes
        console.log('added 5 sec delay')
        next()
    }, 500);
}

router.use(timeDelay)

router.post('/send', async (req, res) => {
  const { emailId } = req.body;
  try {
    await emailQueue.add('emailQueue', { emailId });
    await setEmailStatus(emailId, 'queued')
    res.status(200).json({ message: 'Email queued' });
  } catch (error) {
    console.error('Error queuing email:', error);
    res.status(500).json({ message: 'Error queuing email', error: error.message });
  }
})

module.exports = router