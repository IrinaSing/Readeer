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
  searchBooksFromGoogle: async (encodedURL) => {
    try {
      const response = await googleBooksAPI.getBookByURL(encodedURL);

      const items = response.items;

      return items;
    } catch (error) {
      console.log(error);
    }
  },
  getBookByIsbn: async (isbn) => {
    // TODO
    try {
      const response = await googleBooksAPI.getBookByIsbn(isbn);

      const items = response.items;

      if (items.length > 0) {
        const item = items[0];
        const volumeInfo = item.volumeInfo;

        const imageLinks = volumeInfo.imageLinks;

        const title = volumeInfo.title;
        const thumbnail = imageLinks.thumbnail;
        const id = volumeInfo.industryIdentifiers[0].identifier;
        const description = volumeInfo.description;
        const isbn_10 = volumeInfo.industryIdentifiers[0].identifier;
        const isbn_13 = volumeInfo.industryIdentifiers[1].identifier;
        const authors = volumeInfo.authors;

        // TODO delete
        console.log({
          id,
          title,
          description,
          isbn_10,
          isbn_13,
          authors,
          thumbnail,
        });

        return { id, title, description, isbn_10, isbn_13, authors, thumbnail };
      }
    } catch (error) {
      console.log(error);
    }
  },
};
