const Email = require('./models/emails')

export const getEmailData = async (emailId) => {
    const email = await Email.findOne({_id: emailId})
    if(!email) {
        throw new Error('email not found')
    }
    return email
}

export const setDeliveredStatus = async (emailId) => {
    const email = await Email.findOneAndUpdate({_id: emailId}, {status: 'delivered'})
    if(!email) {
        throw new Error('email not found')
    }
    return email
}