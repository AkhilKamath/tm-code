const {Schema, model} = require('mongoose')

const emailSchema = new Schema({
    emails: {type: [String]},
    content: {type: String},
    status: {type: String, enum: ['pending', 'delivered']}
},{ timestamps: true })

const EmailModel = model('Email', emailSchema)

module.exports = EmailModel