import books from "../models/book.model.js";

class BooksController {
    static findBooks = async (req, res) => {
        try {
            const booksList = await books.find();
            res.status(200).json(booksList);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    static findBookById = async (req, res) => {
        try {
            const id = req.params.id;

            const book = await books.findById(id);
            if (!book) {
                return res.status(404).json({ message: "Book not found." });
            }
            res.status(200).json(book);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    static createBook = async (req, res) => {
        try {
            const body = req.body;

            const newBook = new books(body);

            const insertedBook = await newBook.save();
            res.status(201).json(insertedBook);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    static updateBook = async (req, res) => {
        try {
            const id = req.params.id;
            const body = req.body;

            const updatedBook = await books.findByIdAndUpdate(
                id,
                { $set: body },
                { new: true, runValidators: true }
            );

            if (!updatedBook) {
                return res.status(400).json({ message: "Book not found." });
            }
            res.status(200).json(updatedBook);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    static deleteBook = async (req, res) => {
        try {
            const id = req.params.id;

            const deletedBook = await books.findByIdAndDelete(id);
            if (!deletedBook) {
                return res.status(400).json({ message: "Book not found." });
            }
            res.status(200).json({ message: `Book ${id} deleted.` });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
}

export default BooksController;