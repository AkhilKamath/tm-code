import mongoose, {Schema, Document, model, Types } from 'mongoose'

export interface Ngo extends Document {
    name: string,
    email: string,
    address: string,
    createdBy: Types.ObjectId,
    createdAt: Date,
    updatedAt: Date
}

const NgoSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, match: [/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g, "Invalid email address"]},
    address: { type: String, required: true },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})

const NgoModel = (mongoose.models.Ngo as mongoose.Model<Ngo>) || model<Ngo>('Ngo', NgoSchema)

export default NgoModel;