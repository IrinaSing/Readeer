const booksManager = require('../business-logic/books.js');

const booksController = {
  get: async (req, res) => {
    try {
      const allBooks = await booksManager.getAllBooksWithLimit();
      res.status(200).send(JSON.stringify(allBooks));
    } catch (error) {
      res.status(500).send(error);
    }
  },
  getBookById: async (req, res) => {
    try {
      const bookId = req.params.bookId;

      const book = await booksManager.getBookByIdWithLimit(bookId);

      res.send(JSON.stringify(book));
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  search: async (req, res) => {
    try {
      const body = req.body;

      if (body.filter) {
        const books = await booksManager.searchBooksWithLimit(body.filter);
        res.status(200).send(JSON.stringify(books));
      } else {
        res.status(400).send('Bad request');
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
};

module.exports = booksController;
