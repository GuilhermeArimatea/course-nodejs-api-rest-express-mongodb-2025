import moongose from "mongoose";

const bookSchema = new moongose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    publisher: {
        type: String,
        required: true,
    },
    numberOfPages: {
        type: Number,
        required: true,
    },
}, {
    timestamps: true,
});


const Book = moongose.model('book', bookSchema)

export default Book;