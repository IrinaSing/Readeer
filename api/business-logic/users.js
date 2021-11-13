const dataAccess = require('../data-access/mongodbAccess');
const ObjectID = require('mongodb').ObjectID;

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
      if (searchFilter.userId) {
        searchFilter.userId = new ObjectID(searchFilter.userId);
      }

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

    for (let index = 0; index < searchedBooks.length; index++) {
      const book = searchedBooks[index];
      let user = '';

      // add city
      try {
        // TODO improve to only return city field
        user = await usersStore.getById(book.book_userId);
        book.city = user.city;
        book.username = user.username;
        book.userEmail = user.email;
      } catch (error) {
        console.log('cannot get city for book ' + book.title, error);
      }
    }

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
      bookWithFullAccess.username = user.username;
    } catch (error) {
      console.log('cannot get city for book ' + book.title, error);
    }

    return bookWithFullAccess;
  },
  addUserBook: async (bookDetails) => {
    bookDetails.userId = new ObjectID(bookDetails.userId);

    const response = await booksStore.insert(bookDetails);

    if (response.acknowledged) {
      return { message: 'Book added' };
    }
  },

  updateUserBook: async (bookId, updateDetails) => {
    const response = await booksStore.update(bookId, updateDetails);

    if (response.acknowledged) {
      return { message: 'Book updated' };
    } else {
      throw new Error('Book not updated');
    }
  },
  deleteUserBook: async (bookId, userId) => {
    const book = await booksStore.getById(bookId);

    let response;

    if (book.userId.toString() === userId) {
      response = await booksStore.delete(bookId);
    }

    console.log(response);

    if (response.acknowledged) {
      return { message: 'Book is deleted' };
    } else {
      throw new Error('Book is not deleted');
    }
  },
};

module.exports = usersManager;
