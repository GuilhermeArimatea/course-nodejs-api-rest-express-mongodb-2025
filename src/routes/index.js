import express from 'express';
import booksRoutes from './books.routes.js';

const routes = express.Router();
routes.use(booksRoutes);

export default routes;