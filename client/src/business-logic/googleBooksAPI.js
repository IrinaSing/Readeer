import { googleBooksAPI } from '../data-access/api-calls/googleBooksAPI.js';

export const googleManager = {
  getPictureURL: async (isbn) => {
    try {
      const response = await googleBooksAPI.getBookByIsbn(isbn);

      const items = response.items;

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
