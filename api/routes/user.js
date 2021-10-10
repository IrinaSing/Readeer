const express = require('express');
const usersController = require('../controllers/users');

const userRoutes = express.Router();

userRoutes.use((req, res, next) => {
  console.log('api! books search route');
  next();
});

// channelRoutes.get('/', channelController.get);
// channelRoutes.get('/:channelId', channelController.getChannelById);
// channelRoutes.delete('/:channelId', channelController.delete);
// channelRoutes.put('/:channelId', channelController.put);
// channelRoutes.post('/', channelController.post);

module.exports = userRoutes;
