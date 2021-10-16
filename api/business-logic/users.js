const dataAccess = require('../data-access/mongodbAccess');
const ObjectId = require('mongodb').ObjectID;

const usersStore = dataAccess('Users');

const usersManager = {
  get: async (userId) => {
    console.log('manager', userId);
    // const user = await usersStore.getById(userId);
    // return user;
    return await usersStore.getById(userId);
  },
};

module.exports = usersManager;
