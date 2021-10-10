const express = require('express');
const usersController = require('../controllers/users');

const userRoutes = express.Router();

userRoutes.use((req, res, next) => {
  console.log('api! user route');
  next();
});

// userRoutes.get('/', usersController.get);
// userRoutes.get('/:channelId', usersController.getChannelById);
userRoutes.get('/:userId', usersController.get); //own profile details
userRoutes.put('/:userId', usersController.put); //change own profile details

userRoutes.get('/:userId/search/books', usersController.searchBooks); // search all books for a user
userRoutes.get('/:userId/search/books/:bookId', usersController.searchBookById); // search a book for a user

userRoutes.get('/:userId/edit/books', usersController.userBooks); // own books list
userRoutes.post('/:userId/edit/books', usersController.userBooks); // add a new owned book
userRoutes.put('/:userId/edit/books', usersController.userBooks); // change details of an owned book
userRoutes.delete('/:userId/edit/books', usersController.userBooks); // delete an owned book

userRoutes.post('/:userId/request', usersController.userBooks); // request a book

module.exports = userRoutes;
