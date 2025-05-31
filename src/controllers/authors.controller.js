import authors from "../models/author.model.js";

class AuthorsController {
    static findAuthors = async (req, res) => {
        try {
            const authorList = await authors.find();
            res.status(200).json(authorList);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    static findAuthorById = async (req, res) => {
        try {
            const id = req.params.id;

            const author = await authors.findById(id);
            if (!author) {
                return res.status(404).json({ message: "author not found." });
            }
            res.status(200).json(author);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    static createAuthor = async (req, res) => {
        try {
            const body = req.body;

            const newAuthor = new authors(body);

            const insertedAuthor = await newAuthor.save();
            res.status(201).json(insertedAuthor);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    static updateAuthor = async (req, res) => {
        try {
            const id = req.params.id;
            const body = req.body;

            const updatedAuthor = await authors.findByIdAndUpdate(
                id,
                { $set: body },
                { new: true, runValidators: true }
            );

            if (!updatedAuthor) {
                return res.status(400).json({ message: "author not found." });
            }
            res.status(200).json(updatedAuthor);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    static deleteAuthor = async (req, res) => {
        try {
            const id = req.params.id;

            const deletedAuthor = await authors.findByIdAndDelete(id);
            if (!deletedAuthor) {
                return res.status(400).json({ message: "author not found." });
            }
            res.status(200).json({ message: `author ${id} deleted.` });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
}

export default AuthorsController;