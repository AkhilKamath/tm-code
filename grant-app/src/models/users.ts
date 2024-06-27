import mongoose, {Schema, Document, model} from 'mongoose'

export interface User extends Document {
    name: string,
    email: string,
    password: string,
    role: string,
}

const userSchema = new Schema<User>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, match: [/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g, "Invalid email address"]},
    password: { type: String, requred: true },
    role: { type: String, enum: ['admin', 'foundation', 'ngo'], required: true},
}, { timestamps: true })

const UserModel = mongoose.models.User as mongoose.Model<User> || model<User>('User', userSchema)

export default UserModel

