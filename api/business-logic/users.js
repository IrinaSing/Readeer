const dataAccess = require('../data-access/mongodbAccess');
const ObjectId = require('mongodb').ObjectID;

const usersStore = dataAccess('Users');

const usersManager = {
  get: async (userId) => {
    console.log('manager', userId);
    const user = await usersStore.getById(userId);
    // return user;

    const userDetails = {
      id: user._id,
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      birthday: user.birthday,
      email: user.email,
      city: user.city,
    };
    return userDetails;
  },
  updateUser: async (userId, user) => {
    const response = await usersStore.update(userId, user);

    if (response.acknowledged) {
      return await usersManager.get(userId);
    } else {
      throw new Error('User not updated');
    }
  },
};

module.exports = usersManager;
