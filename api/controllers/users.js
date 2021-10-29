const usersManager = require('../business-logic/users');

const usersController = {
  get: async (req, res) => {
    try {
      const userId = req.params.userId;

      const userDetails = await usersManager.get(userId);

      res.status(200).send(JSON.stringify(userDetails));
    } catch (error) {
      res.status(500).send(error);
    }
  },

  put: async (req, res) => {
    try {
      const userId = req.params.userId;

      const body = req.body;

      const user = {
        username: body.username,
        firstName: body.firstName,
        lastName: body.lastName,
        birthday: body.birthday,
        email: body.email,
        city: body.city,
        updatedAt: new Date(),
      };

      if (body.id && body.id !== userId) {
        throw Error('Cannot change user ID after creation!');
      }

      const result = await usersManager.updateUser(userId, user);

      res.status(200).send(JSON.stringify(result));
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
  searchBooks: async (req, res) => {
    try {
      const body = req.body;

      if (body.filter) {
        const books = await usersManager.searchBooks(body.filter);
        res.status(200).send(JSON.stringify(books));
      } else {
        res.status(400).send('Bad request');
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
};

module.exports = usersController;
