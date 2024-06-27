import mongoose, {Schema, Document, model, Types} from 'mongoose'

export interface Foundation extends Document {
    name: string,
    email: string,
    address: string,
    ngos: Types.ObjectId[],
    createdBy: Types.ObjectId,
    createdAt: Date,
    updatedAt: Date
}

const foundationSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, match: [/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g, "Invalid email address"]},
    address: { type: String, required: true },
    ngos: [{ type: Schema.Types.ObjectId, ref: 'Ngo' }],
    createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})

const FoundationModel = mongoose.models.Foundation as mongoose.Model<Foundation> || model<Foundation>('Foundation', foundationSchema)

export default FoundationModel

