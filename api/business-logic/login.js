const dataAccess = require('../data-access/mangodbAccess');

const usersStore = dataAccess('Users');

const createToken = require('../utils/createToken');
const hashPassword = require('../utils/hashPassword');

const loginManager = {
  checkPassword: async function (email, password) {
    if (!email || !password) {
      res.status(400).send('Missing username or password');
      return;
    }
    const hashedPassword = hashPassword(`${email}.${password}`);
    // const user = { email: email, password: hashedPassword };

    const registeredUsers = await usersStore.getAll({
      email: email,
      password: hashedPassword,
    });

    const existingUser = registeredUsers.find(
      (user) => user.email === email && user.password === hashedPassword
    );

    if (!existingUser) {
      throw new Error('Invalid username or password !');
    }

    const token = createToken(existingUser);

    return {
      token: token,
      email: email,
      username: existingUser.username,
      message: `Session created for user ${existingUser.username}`,
    };
  },
};

module.exports = loginManager;
