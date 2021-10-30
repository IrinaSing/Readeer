const express = require('express');
const usersController = require('../controllers/users');
const authorizeTheUser = require('../middleware/authorize');

const userRoutes = express.Router();

userRoutes.use((req, res, next) => {
  console.log('api! users route');
  next();
});

userRoutes.get('/:userId', usersController.get); //own profile details
userRoutes.put('/:userId', usersController.put); //change own profile details

userRoutes.post('/:userId/books', usersController.searchBooks); // search all books for a user
userRoutes.get('/:userId/books/:bookId', usersController.searchBookById); // search a book for a user

userRoutes.post('/:userId/books/add', usersController.addUserBook); // add a new owned book

userRoutes.use('/:userId/books/:bookId', authorizeTheUser);

// userRoutes.put('/:userId/books/:bookId', usersController.userBooks); // change details of an owned book
// userRoutes.delete('/:userId/books/:bookId', usersController.userBooks); // delete an owned book

// userRoutes.post('/:userId/request', usersController.userBooks); // request a book

module.exports = userRoutes;
