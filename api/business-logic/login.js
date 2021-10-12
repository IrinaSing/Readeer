const dataAccess = require('../data-access/mangodbAccess');

const usersStore = dataAccess('Users');

const createToken = require('../utils/createToken');
const hashPassword = require('../utils/hashPassword');

const loginManager = {
  checkPassword: async function (username, password) {
    if (!username || !password) {
      res.status(400).send('Missing username or password');
      return;
    }
    const hashedPassword = hashPassword(`${username}.${password}`);
    const user = { username: username, password: hashedPassword };

    const registeredUsers = await usersStore.getAll({
      username: username,
      password: hashedPassword,
    });

    const existingUser = registeredUsers.find(
      (user) => user.username === username && user.password === hashedPassword
    );

    if (!existingUser) {
      throw new Error('Invalid username or password !');
    }

    const token = createToken(existingUser);

    return {
      token: token,
      username,
      message: `Session created for user ${username}`,
    };
  },
};

module.exports = loginManager;
