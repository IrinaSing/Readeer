const express = require('express');
const registerController = require('../controllers/register');

const registerRoute = express.Router();

registerRoute.use((req, res, next) => {
  console.log('api! Register route');
  next();
});

registerRoute.post('/', registerController.post);

module.exports = registerRoute;
