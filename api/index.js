'use strict';

const express = require('express');

const routes = require('./routes');
const booksRoute = require('./routes/books');
const registerRoute = require('./routes/register');
const loginRoute = require('./routes/login');
const authenticateUser = require('./middleware/authenticate');
const userRoutes = require('./routes/users');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('API! go to `/api`');
});

//general search
router.use('/books', booksRoute);

//register
router.use('/register', registerRoute);

// login
router.use('/login', loginRoute);

// authentication with token
// router.use(authenticateUser);

// use routes
router.use('/users', userRoutes);

module.exports = router;
