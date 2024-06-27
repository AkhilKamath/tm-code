import mongoose, {Schema, Document, model, Types } from 'mongoose'

export interface Ngo extends Document {
    name: string,
    email: string,
    address: string,
    createdBy: Types.ObjectId,
}

const NgoSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, match: [/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g, "Invalid email address"]},
    address: { type: String, required: true },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true })

const NgoModel = (mongoose.models.Ngo as mongoose.Model<Ngo>) || model<Ngo>('Ngo', NgoSchema)

export default NgoModel;