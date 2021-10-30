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
      const bookWithLimitedAccess = {
        id: book._id.toString(),
        title: book.title,
        author: book.author,
        isbn_10: book.isbn_10,
        isbn_13: book.isbn_13,
        description: book.book_description,
        rating: book.rating,
        pageCount: book.pageCount,
        book_language: book.book_language,
        book_userId: book.userId.toString(),
      };

      searchedBooks.push(bookWithLimitedAccess);
    });

    for (let index = 0; index < searchedBooks.length; index++) {
      const book = searchedBooks[index];
      let user = '';

      console.log(book.book_userId);

      // add city
      try {
        // TODO improve to only return city field
        user = await usersStore.getById(book.book_userId);
        book.city = user.city;
      } catch (error) {
        console.log('cannot get city for book ' + book.title, error);
      }

      // TODO add picture url

      try {
        // console.log(book.isbn_10);
        const thumbnail = await googleManager.getPictureURL(book.isbn_10);
        book.thumbnail = thumbnail;
        console.log(thumbnail);
      } catch (error) {
        console.log('cannot get thumbnail for book ' + book.title, error);
      }
    }

    // TODO complete to 30 from google api

    return searchedBooks;
  },
};

module.exports = usersManager;
