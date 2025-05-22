import express from "express";
import db from "./config/dbConnect.js";
import book from "./models/Book.js";

db.on("error", console.log.bind(console, "Connection error:"));
db.once("open", () => {
    console.log("Connected to the database.");
});

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
    const books = await book.find();
    res.status(200).json(books);
});

app.get("/livros", (req, res) => {
    res.status(200).json(books);
});

app.get("/livros/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = searchBook(id);
    if (!index) {
        return res.status(204).json({ message: "Book not found." });
    }

    res.status(200).json(books[index]);
});

app.post("/livros", (req, res) => {
    const livro = req.body;
    books.push(livro);
    res.status(201).json(livro);
});

app.put("/livros/:id", (req, res) => {
    const { id } = parseInt(req.params);
    const body = req.body;
    const index = searchBook(id);
    if (!index) {
        return res.status(204).json({ message: "Book not found." });
    }
    books[index].title = body.title;
    res.status(200).json(books[index]);
});

app.delete("/livros/:id", (req, res) => {
    const { id } = req.params;
    const index = searchBook(id);
    if (!index) {
        return res.status(204).json({ message: "Book not found." });
    }
    books.splice(index, 1);
    res.status(200).json({ message: `Book ${index} deleted.` });
});

function searchBook(id) {
    return books.findIndex((livro) => livro.id === id);
}

export default app;
