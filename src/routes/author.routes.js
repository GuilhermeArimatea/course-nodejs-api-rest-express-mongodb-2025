import express from 'express';
import authorController from '../controllers/author.controller.js';

const router = express.Router();

router
    .get('/author', authorController.findAuthors)
    .get('/author/:id', authorController.findAuthorById)
    .post('/author', authorController.createAuthor)
    .put('/author/:id', authorController.updateAuthor)
    .delete('/author/:id', authorController.deleteAuthor);

export default router;