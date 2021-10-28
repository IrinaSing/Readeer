const dataAccess = require("../data-access/mongodbAccess");

const usersStore = dataAccess("Users");

const hashPassword = require("../utils/hashPassword");

const registerManager = {
  register: async function (
    firstName,
    lastName,
    birthday,
    email,
    username,
    password,
    city
  ) {
    const hashedPassword = hashPassword(`${email}.${password}`);

    const user = {
      firstName,
      lastName,
      birthday,
      email,
      username: username,
      password: hashedPassword,
      city,
      createdAt: new Date(),
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
      throw new Error("User already exists");
    }

    const response = await usersStore.insert(user);

    if (response.insertedCount === 0) {
      throw new Error("User could not be created");
    }

    return { username, email };
  },
};

module.exports = registerManager;
