// const booksStore = require('../data-access/books.js');

const dataAccess = require('../data-access/mongodbAccess');

const booksStore = dataAccess('Books');

const booksManager = {
  getAllBooksWithLimit: async () => {
    const books = await booksStore.getAll();

    const searchBooksWithLimitedAccess = [];

    books.forEach((book) => {
      const bookWithLimitedAccess = {
        id: book._id.toString(),
        title: book.title,
        // author: book.author,
        isbn_10: book.isbn_10,
        isbn_13: book.isbn_13,
        description: book.book_description,
        // rating: book.rating,
        // pageCount: book.pageCount,
        // language: book.language,
      };

      searchBooksWithLimitedAccess.push(bookWithLimitedAccess);
    });

    return searchBooksWithLimitedAccess;
  },

  getBookByIdWithLimit: async (bookId) => {
    const book = await booksStore.getById(bookId);

    const bookWithLimitedAccess = {
      id: book._id.toString(),
      title: book.title,
      author: book.author,
      isbn_10: book.isbn_10,
      isbn_13: book.isbn_13,
      description: book.book_description,
      rating: book.rating,
      pageCount: book.pageCount,
      language: book.language,
    };

    return bookWithLimitedAccess;
  },
  searchBooksWithLimit: async (searchFilter) => {
    const books = await booksStore.getAll(searchFilter);

    const searchBooksWithLimitedAccess = [];

    books.forEach((book) => {
      const bookWithLimitedAccess = {
        id: book._id.toString(),
        title: book.title,
        // author: book.author,
        isbn_10: book.isbn_10,
        isbn_13: book.isbn_13,
        description: book.book_description,
        // rating: book.rating,
        // pageCount: book.pageCount,
        language: book.language,
      };

      searchBooksWithLimitedAccess.push(bookWithLimitedAccess);
    });

    return searchBooksWithLimitedAccess;
  },
};

module.exports = booksManager;
