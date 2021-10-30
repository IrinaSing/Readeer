const dataAccess = require('../data-access/mongodbAccess');
const googleManager = require('./googleBooksAPI');

const usersStore = dataAccess('Users');
const booksStore = dataAccess('Books');

const usersManager = {
  get: async (userId) => {
    const user = await usersStore.getById(userId);

    const userDetails = {
      id: user._id,
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      birthday: user.birthday,
      email: user.email,
      city: user.city,
    };
    return userDetails;
  },
  updateUser: async (userId, user) => {
    const response = await usersStore.update(userId, user);

    if (response.acknowledged) {
      return await usersManager.get(userId);
    } else {
      throw new Error('User not updated');
    }
  },
  searchBooks: async (searchFilter) => {
    let books = [];

    //check if the filter for fuzzy search
    if (searchFilter.text) {
      books = await booksStore.textSearch(searchFilter.text);
    } else {
      books = await booksStore.getAll(searchFilter);
    }

    const searchedBooks = [];

    books.forEach((book) => {
      const bookWithFullAccess = {
        id: book._id.toString(),
        title: book.title,
        authors: book.authors,
        isbn_10: book.isbn_10,
        isbn_13: book.isbn_13,
        description: book.book_description,
        rating: book.rating,
        pageCount: book.pageCount,
        book_language: book.book_language,
        book_userId: book.userId.toString(),
        condition: book.condition,
      };

      searchedBooks.push(bookWithFullAccess);
    });

    // console.log(searchedBooks);

    for (let index = 0; index < searchedBooks.length; index++) {
      const book = searchedBooks[index];
      let user = '';

      // console.log(book.book_userId);

      // add city
      try {
        // TODO improve to only return city field
        user = await usersStore.getById(book.book_userId);
        book.city = user.city;
      } catch (error) {
        console.log('cannot get city for book ' + book.title, error);
      }

      // add picture url

      try {
        /* TODO to improve performance frontend should not make a call to google
         * while loading books first it should load from our api and show the book data
         * then make a call to google to get the picture url and then rerender all
         */
        const thumbnail = await googleManager.getPictureURL(book.isbn_10);
        book.thumbnail = thumbnail;
        console.log('manager', thumbnail);
      } catch (error) {
        console.log('cannot get thumbnail for book ' + book.title, error);
      }
    }

    // TODO complete to 30 from google api

    console.log(searchedBooks);
    return searchedBooks;
  },
  searchBookById: async (bookId) => {
    const book = await booksStore.getById(bookId);

    const bookWithFullAccess = {
      id: book._id.toString(),
      title: book.title,
      authors: book.authors,
      isbn_10: book.isbn_10,
      isbn_13: book.isbn_13,
      description: book.book_description,
      rating: book.rating,
      pageCount: book.pageCount,
      book_language: book.book_language,
      book_userId: book.userId.toString(),
    };

    // add city
    try {
      // TODO improve to only return city field
      const user = await usersStore.getById(book.userId);

      bookWithFullAccess.city = user.city;
    } catch (error) {
      console.log('cannot get city for book ' + book.title, error);
    }

    // add picture url

    try {
      /* TODO to improve performance frontend should not make a call to google
       * while loading books first it should load from our api and show the book data
       * then make a call to google to get the picture url and then rerender all
       */
      const thumbnail = await googleManager.getPictureURL(book.isbn_10);
      bookWithFullAccess.thumbnail = thumbnail;
    } catch (error) {
      console.log('cannot get thumbnail for book ' + book.title, error);
    }

    return bookWithFullAccess;
  },
  addUserBook: async (bookDetails) => {
    bookDetails.userId = { $oid: `${bookDetails.userId}` };
    console.log('object');
    const response = await booksStore.insert(bookDetails);

    console.log(response);
    if (response.acknowledged) {
      return { message: 'Book added' };
    }
  },
};

module.exports = usersManager;
