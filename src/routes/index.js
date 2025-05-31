import express from 'express';
import booksRoutes from './books.routes.js';
import authorsRoutes from './authors.routes.js';

const routes = express.Router();
routes.use(booksRoutes, authorsRoutes);

export default routes;