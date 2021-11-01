const googleBooksAPI = require('../data-access/googleBooksAPI');

const googleManager = {
  getPictureURL: async (isbn) => {
    try {
      const response = await googleBooksAPI.getByISBN(isbn);

      const data = await JSON.parse(response);
      const items = data.items;

      if (items.length > 0) {
        const item = items[0];
        const volumeInfo = item.volumeInfo;
        const imageLinks = volumeInfo.imageLinks;
        const thumbnail = imageLinks.thumbnail;

        return thumbnail;
      }
    } catch (error) {
      return 'https://via.placeholder.com/200x200';
    }
  },
};

module.exports = googleManager;
