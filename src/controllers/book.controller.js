import Book from "../models/book.model.js";

class BookController {
    static findBooks = async (req, res) => {
        try {
            const books = await Book.find()
                .populate('author', 'name')
                .populate('publisher', 'name')
                .exec();
            res.status(200).json(books);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    static findBookById = async (req, res) => {
        try {
            const id = req.params.id;

            const book = await Book.findById(id)
                .populate('author', 'name')
                .populate('publisher', 'name')
                .exec();
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

            const newBook = new Book(body);

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

            const updatedBook = await Book.findByIdAndUpdate(
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

            const deletedBook = await Book.findByIdAndDelete(id);
            if (!deletedBook) {
                return res.status(400).json({ message: "Book not found." });
            }
            res.status(200).json({ message: `Book ${deletedBook.title} deleted.` });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    static findBooksByPublisher = async (req, res) => {
        try {
            const publisherId = req.query.publisherId;

            const books = await Book.find({ publisher: publisherId })
                .populate('author', 'name')
                .populate('publisher', 'name')
                .exec();
            if (books.length === 0) {
                return res.status(204).json({ message: "No books found for this publisher." });
            }
            res.status(200).json(books);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
}

export default BookController;