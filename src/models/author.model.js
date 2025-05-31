import moongose from "mongoose";

const authorSchema = new moongose.Schema({
    id: {
        type: String,
    },
    name: {
        type: String,
        required: true,
    },
    nationality: {
        type: String,
    }
}, {
    versionKey: false,
    timestamps: true,
});


const Author = moongose.model('author', authorSchema)

export default Author;