const booksStore = require('../data-access/books.js');

const booksManager = {
    getAllBooksWithLimit: async function (){
        const books = await booksStore.getAllBooksWithLimit();

        //TODO ids to string
        // channels.forEach((channel) => {
        //     channel.id = channel._id.toString();
        //   });

        return books;
    },

    getBookByIdWithLimit: async function (bookId) {
        const book = booksStore.getBookByIdWithLimit(bookId);

                //TODO ids to string
        // channels.forEach((channel) => {
        //     channel.id = channel._id.toString();
        //   });

        return book;
    },
    searchBooksWithLimit : async function(searchObject) {
        const books = await booksStore.getAllBooksWithLimit(searchObject);

        //TODO ids to string
        // channels.forEach((channel) => {
        //     channel.id = channel._id.toString();
        //   });

        return books;
    }

};

module.exports = booksManager;
