export const googleBooksAPI = {
  getBookByIsbn: async (isbn) => {
    console.log('getBookByIsbn');
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

  getBookByFilter: async (filter) => {
    // TODO use this one to add new results to books list
    const URL = `https://www.googleapis.com/books/v1/volumes?q=${filter}}`;
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
};
