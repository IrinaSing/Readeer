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
  searchBookById: async (req, res) => {
    try {
      const userId = req.params.userId;
      const bookId = req.params.bookId;

      const book = await usersManager.searchBookById(bookId);

      res.status(200).send(JSON.stringify(book));
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
  addUserBook: async (req, res) => {
    try {
      const userId = req.params.userId;
      const bookId = req.params.bookId;

      const body = req.body;

      if (userId !== body.userId) {
        throw Error('Unauthorized request: User ID does not match!');
      }

      const result = await usersManager.addUserBook(body);

      res.status(200).send(JSON.stringify(result));
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
  updateUserBook: async (req, res) => {
    try {
      const userId = req.params.userId;
      const bookId = req.params.bookId;

      const body = req.body;

      if (bookId !== body.id || body.userId !== userId) {
        throw Error('Cannot change user ID after creation!');
      }

      const book = {};

      const keys = Object.keys(body);

      for (let index = 0; index < keys.length; index++) {
        const key = keys[index];
        if (
          key !== undefined &&
          key !== 'id' &&
          key !== 'userId' &&
          key !== 'createdAt'
        ) {
          book[key] = body[key];
        }
      }

      const result = await usersManager.updateUserBook(bookId, book);

      res.status(200).send(JSON.stringify(result));
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
  deleteUserBook: async (req, res) => {
    try {
      const userId = req.params.userId;
      const bookId = req.params.bookId;

      const result = await usersManager.deleteUserBook(bookId);

      res.status(200).send(JSON.stringify(result));
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
};

module.exports = usersController;
