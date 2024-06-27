const Email = require('./models/emails')
const mongoose = require('mongoose')

exports.getEmailData = async (emailId) => {
    const email = await Email.findOne({_id: emailId})
    if(!email) {
        throw new Error('email not found')
    }
    return email
}

exports.setEmailStatus = async (emailId, status) => {
    const email = await Email.findOneAndUpdate({_id: emailId}, {status: status})
    if(!email) {
        console.log('cc', await Email.countDocuments())
        throw new Error('email not found')
    }
    return email
}