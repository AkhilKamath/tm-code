const {Schema, model} = require('mongoose')

const ngoSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, match: [/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g, "Invalid email address"]},
    address: { type: String, required: true },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true })

const NgoModel = model('Ngo', ngoSchema)

module.exports = NgoModel