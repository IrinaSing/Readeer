const googleBooksAPI = require('../data-access/googleBooksAPI');

const googleManager = {
  getPictureURL: async (isbn) => {
    const response = await googleBooksAPI.getByISBN(isbn);

    const data = await JSON.parse(response);
    const items = data.items;

    // console.log('response', items);
    if (items.length > 0) {
      const item = items[0];
      const volumeInfo = item.volumeInfo;
      const imageLinks = volumeInfo.imageLinks;
      const thumbnail = imageLinks.thumbnail;

      return thumbnail;
    }
    return 'https://via.placeholder.com/200x200';

    // if (response.items.length === 0) {
    //   return 'https://via.placeholder.com/200x200';
    // } else {
    //   return response.items[0].volumeInfo.imageLinks.thumbnail;
    // }
  },
};

module.exports = googleManager;
