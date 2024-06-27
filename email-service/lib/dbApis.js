const Email = require('./models/emails')
const mongoose = require('mongoose')
const FoundationModel = require('./models/foundations')
const NgoModel = require('./models/ngos')

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
        throw new Error('email not found')
    }
    return email
}

exports.getFoundation = async (foundationEmail) => {
    const foundation = await FoundationModel.findOne({email: foundationEmail})
    if(!foundation) {
        throw new Error(`foundation with email id ${foundationEmail} not found`)
    }
    return foundation
}

exports.getNgo = async (ngoEmail) => {
    const ngo = await NgoModel.findOne({email: ngoEmail})
    if(!ngo) {
        throw new Error(`ngo with email id ${ngoEmail} not found`)
    }
    return ngo
}