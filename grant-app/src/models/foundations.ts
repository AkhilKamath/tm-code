import mongoose, {Schema, Document, model, Types} from 'mongoose'

export interface Foundation extends Document {
    name: string,
    email: string,
    address: string,
    ngos: Types.ObjectId[],
    createdBy: Types.ObjectId,
}

const foundationSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, match: [/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g, "Invalid email address"]},
    address: { type: String, required: true },
    ngos: [{ type: Schema.Types.ObjectId, ref: 'Ngo' }],
    createdBy: { type: Schema.Types.ObjectId, ref: 'User'},
}, { timestamps: true})

const FoundationModel = mongoose.models.Foundation as mongoose.Model<Foundation> || model<Foundation>('Foundation', foundationSchema)

export default FoundationModel

