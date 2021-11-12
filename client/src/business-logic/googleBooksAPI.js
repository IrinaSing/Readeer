import { googleBooksAPI } from '../data-access/api-calls/googleBooksAPI.js';

export const googleManager = {
  getPictureURL: async (isbn) => {
    try {
      const response = await googleBooksAPI.getBookByIsbn(isbn);
      console.log('response', response);

      const items = response.items;
      console.log('getPictureURL', response);
      if (items.length > 0) {
        const item = items[0];
        const volumeInfo = item.volumeInfo;
        const imageLinks = volumeInfo.imageLinks;
        const thumbnail = imageLinks.thumbnail;

        console.log('thumbnail', thumbnail);
        return thumbnail;
      }
    } catch (error) {
      console.log(error);
      return 'https://via.placeholder.com/200x200';
    }
  },
};
