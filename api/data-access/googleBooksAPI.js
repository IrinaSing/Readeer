const request = require('request');

const googleBooksAPI = {
  getByISBN: async (isbn) => {
    return new Promise((resolve, reject) => {
      const url = `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`;

      request(url, (error, response, body) => {
        if (error) {
          reject(error);
        } else {
          resolve(body);
        }
      });
    });
  },
};

// module.exports = googleBooksAPI;
