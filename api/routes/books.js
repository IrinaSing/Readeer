const express = require('express');
const booksController = require('../controllers/books');

const booksRoutes = express.Router();

booksRoutes.use((req, res, next) => {
  console.log('api! books search route');
  next();
});

booksRoutes.get('/', booksController.get);
booksRoutes.get('/:bookId', booksController.getBookById);
booksRoutes.post('/', booksController.search);

module.exports = booksRoutes;
