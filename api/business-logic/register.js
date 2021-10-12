const dataAccess = require('../data-access/mangodbAccess');

const usersStore = dataAccess('Users');

const hashPassword = require('../utils/hashPassword');

const registerManager = {
  register: async function (username, password) {
    const hashedPassword = hashPassword(`${username}.${password}`);

    const user = {
      username: username,
      password: hashedPassword,
    };

    // check if user already exists
    const registeredUsers = await usersStore.getAll({
      username: username,
      password: hashedPassword,
    });

    const existingUser = registeredUsers.find(
      (user) => user.username === username
    );

    if (existingUser) {
      throw new Error('User already exists');
    }

    const response = await usersStore.insert(user);

    if (response.insertedCount === 0) {
      throw new Error('User could not be created');
    }

    return { username };
  },
};

module.exports = registerManager;
