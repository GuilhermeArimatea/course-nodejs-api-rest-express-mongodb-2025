import express from 'express';
import booksController from '../controllers/books.controller.js';

const router = express.Router();

router
    .get('/books', booksController.findBooks)
    .get('/books/:id', booksController.findBookById)
    .post('/books', booksController.createBook)
    .put('/books/:id', booksController.updateBook)
    .delete('/books/:id', booksController.deleteBook);

export default router;