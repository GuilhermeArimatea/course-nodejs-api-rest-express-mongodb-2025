import express from 'express';
import publisherController from '../controllers/publisher.controller.js';

const router = express.Router();

router
    .get('/publisher', publisherController.findPublishers)
    .get('/publisher/:id', publisherController.findPublisherById)
    .post('/publisher', publisherController.createPublisher)
    .put('/publisher/:id', publisherController.updatePublisher)
    .delete('/publisher/:id', publisherController.deletePublisher);

export default router;