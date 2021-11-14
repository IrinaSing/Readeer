export const googleBooksAPI = {
  getBookByIsbn: async (isbn) => {
    const URL = `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`;
    const encodedURL = encodeURI(URL);
    const response = await fetch(encodedURL, {
      method: 'GET',
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}\n-->${URL}`);
    }
    const data = await response.json();

    return data;
  },

  getBookByURL: async (encodedURL) => {
    const response = await fetch(encodedURL, {
      method: 'GET',
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}\n-->${URL}`);
    }
    const data = await response.json();

    return data;
  },
};
