import express from 'express';
import bookRoutes from './book.routes.js';
import authorRoutes from './author.routes.js';
import publisherRoutes from './publisher.routes.js';

const routes = express.Router();
routes.use(bookRoutes, authorRoutes, publisherRoutes);

export default routes;