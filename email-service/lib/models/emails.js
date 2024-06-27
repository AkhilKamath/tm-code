const {Schema, model} = require('mongoose')

const emailSchema = new Schema({
    name: {type: String},
    foundation_email: {type: String},
    emails: {type: [String]},
    content: {type: String},
    status: {type: String, enum: ['not_queued', 'queued', 'delivered']}
},{ timestamps: true })

const EmailModel = model('Email', emailSchema)

module.exports = EmailModel