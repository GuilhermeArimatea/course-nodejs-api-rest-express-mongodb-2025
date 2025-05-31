import mongoose from "mongoose";

const publisherSchema = new mongoose.Schema({
    id: {
        type: String,
    },
    name: {
        type: String,
        required: true,
    },
    nationality: {
        type: String,
    },
    cnpj: {
        type: String,
        required: true,
        unique: true,
    },
}, {
    versionKey: false,
    timestamps: true,
});


const Publisher = mongoose.model('publisher', publisherSchema)

export default Publisher;