import mongoose, {Schema, Document, model, Types} from 'mongoose'

export interface Email extends Document {
    emails: [string],
    content: string,
    status: string
}

const emailSchema = new Schema({
    emails: {type: [String]},
    content: {type: String},
    status: {type: String, enum: ['not_queued', 'queued', 'delivered']}
},{ timestamps: true })

const EmailModel = mongoose.models.Email as mongoose.Model<Email> || model<Email>('Email', emailSchema)

export default EmailModel