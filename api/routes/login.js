const express = require('express');
const loginController = require('../controllers/login');

const loginRoute = express.Router();

loginRoute.use((req, res, next) => {
  console.log('api! Login route');
  next();
});

loginRoute.post('/', loginController.post);

module.exports = loginRoute;
