const booksManager = require('../business-logic/books');

const authorizeTheUser = async (req, res, next) => {
  const userId = req.params.userId;
  const bookId = req.params.bookId;

  const book = await booksManager.getBookByIdWithOutLimit(bookId);

  if (book.userId === userId) {
    next();
  } else {
    res.status(401).send(' Unauthorized client request');
  }
};

module.exports = authorizeTheUser;
