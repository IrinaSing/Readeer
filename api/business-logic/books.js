const dataAccess = require('../data-access/mongodbAccess');
const googleManager = require('./googleBooksAPI');

const booksStore = dataAccess('Books');

const booksManager = {
  getAllBooksWithLimit: async () => {
    const books = await booksStore.getAll();

    const searchBooksWithLimitedAccess = [];

    for (let index = 0; index < books.length; index++) {
      const book = books[index];

      let googleThumbnail;
      try {
        /* TODO to improve performance frontend should not make a call to google
         * while loading books first it should load from our api and show the book data
         * then make a call to google to get the picture url and then rerender all
         */
        // googleThumbnail = await googleManager.getPictureURL(book.isbn_10);
      } catch (error) {
        console.log('cannot get thumbnail for book ' + book.title, error);
      }

      const bookWithLimitedAccess = {
        id: book._id.toString(),
        title: book.title,
        authors: book.authors,
        isbn_10: book.isbn_10,
        isbn_13: book.isbn_13,
        description: book.book_description,
        // rating: book.rating,
        // pageCount: book.pageCount,
        book_language: book.book_language,
        // thumbnail: googleThumbnail,
      };

      searchBooksWithLimitedAccess.push(bookWithLimitedAccess);
    }

    return searchBooksWithLimitedAccess;
  },
  getBookByIdWithOutLimit: async (bookId) => {
    const book = await booksStore.getById(bookId);

    return book;
  },

  getBookByIdWithLimit: async (bookId) => {
    const book = await booksStore.getById(bookId);

    let googleThumbnail;
    try {
      /* TODO to improve performance frontend should not make a call to google
       * while loading books first it should load from our api and show the book data
       * then make a call to google to get the picture url and then rerender all
       */
      // googleThumbnail = await googleManager.getPictureURL(book.isbn_10);
    } catch (error) {
      console.log('cannot get thumbnail for book ' + book.title, error);
    }

    const bookWithLimitedAccess = {
      id: book._id.toString(),
      title: book.title,
      authors: book.authors,
      isbn_10: book.isbn_10,
      isbn_13: book.isbn_13,
      description: book.book_description,
      rating: book.rating,
      pageCount: book.pageCount,
      book_language: book.book_language,
      // thumbnail: googleThumbnail,
    };

    return bookWithLimitedAccess;
  },
  searchBooksWithLimit: async (searchFilter) => {
    let books = [];

    //check if the filter for fuzzy search
    if (searchFilter.text) {
      books = await booksStore.textSearch(searchFilter.text);
    } else {
      books = await booksStore.getAll(searchFilter);
    }

    const searchBooksWithLimitedAccess = [];

    for (let index = 0; index < books.length; index++) {
      const book = books[index];
      // books.forEach((book) => {

      let googleThumbnail;
      try {
        /* TODO to improve performance frontend should not make a call to google
         * while loading books first it should load from our api and show the book data
         * then make a call to google to get the picture url and then rerender all
         */
        // googleThumbnail = await googleManager.getPictureURL(book.isbn_10);
      } catch (error) {
        console.log('cannot get thumbnail for book ' + book.title, error);
      }

      const bookWithLimitedAccess = {
        id: book._id.toString(),
        title: book.title,
        authors: book.authors,
        isbn_10: book.isbn_10,
        isbn_13: book.isbn_13,
        description: book.book_description,
        // rating: book.rating,
        // pageCount: book.pageCount,
        book_language: book.book_language,
        // thumbnail: googleThumbnail,
      };

      searchBooksWithLimitedAccess.push(bookWithLimitedAccess);
      // });
    }

    return searchBooksWithLimitedAccess;
  },
};

module.exports = booksManager;
