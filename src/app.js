import express from "express";

const app = express();

const books = [
    { id: 1, title: "Lord Of the Rings", author: "J.R.R. Tolkien" },
    { id: 2, title: "Harry Potter", author: "J.K. Rowling" },
];

app.get("/", (req, res) => {
    res.status(200).send("Curso de Node.js");
});

app.get("/livros", (req, res) => {
    res.status(200).json(books);
});

export default app;
