const dataAccess = require('../data-access/mongodbAccess');

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
    // TODO Think twice
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
      };

      searchedBooks.push(bookWithLimitedAccess);
    });

    return searchedBooks;
  },
};

module.exports = usersManager;
