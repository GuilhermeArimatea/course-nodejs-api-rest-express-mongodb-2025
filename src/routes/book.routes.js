import express from 'express';
import bookController from '../controllers/book.controller.js';

const router = express.Router();

router
    .get('/book', bookController.findBooks)
    .get('/book/:id', bookController.findBookById)
    .post('/book', bookController.createBook)
    .put('/book/:id', bookController.updateBook)
    .delete('/book/:id', bookController.deleteBook);

export default router;