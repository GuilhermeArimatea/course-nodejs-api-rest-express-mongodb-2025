import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    id: {
        type: String,
    },
    title: {
        type: String,
        required: true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'author',
        required: true,
    },
    publisher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'publisher',
        required: true,
    },
    numberOfPages: {
        type: Number,
        required: true,
    },
}, {
    timestamps: true,
});


const Book = mongoose.model('book', bookSchema)

export default Book;