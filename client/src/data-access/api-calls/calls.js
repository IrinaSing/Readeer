import { state } from '../../../src/init/state';

// Check if the api is not hosted on a different origin if so use that.
const getOrigin = () => {
  if (import.meta && import.meta.env && import.meta.env.VITE_API_ORIGIN) {
    return import.meta.env.VITE_API_ORIGIN;
  }

  return window.location.origin;
};

const origin = getOrigin();

// Use "GET" method to fetch a path
const performFetch = async (path) => {
  const URL = `${origin}/api/${path}`;
  const encodedURL = encodeURI(URL);
  const response = await fetch(encodedURL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: state.token === undefined ? '' : `Bearer ${state.token}`,
      Email: state.email === undefined ? '' : state.email,
    },
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}\n-->${URL}`);
  }
  const data = await response.json();

  return data;
};

// Use "POST" method to post a path
const performPost = async (path, body) => {
  const URL = `${origin}/api/${path}`;
  const encodedURL = encodeURI(URL);
  const response = await fetch(encodedURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: state.token === undefined ? '' : `Bearer ${state.token}`,
      Email: state.email === undefined ? '' : state.email,
    },
    body: JSON.stringify(body),
  });
  if (!response.ok) {
    console.error(response);
    throw new Error(`HTTP error! status: ${response.status}\n-->${URL}`);
  }
  const data = await response.json();

  return data;
};

// Use "PUT" method to put a path
const performPut = async (path, body) => {
  const URL = `${origin}/api/${path}`;
  const encodedURL = encodeURI(URL);
  const response = await fetch(encodedURL, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: state.token === undefined ? '' : `Bearer ${state.token}`,
      Email: state.email === undefined ? '' : state.email,
    },
    body: JSON.stringify(body),
  });
  if (!response.ok) {
    console.error(response);
    throw new Error(`HTTP error! status: ${response.status}\n-->${URL}`);
  }
  const data = await response.json();

  return data;
};

// Use "DELETE" method to delete a path
const performDelete = async (path) => {
  const URL = `${origin}/api/${path}`;
  const encodedURL = encodeURI(URL);

  const response = await fetch(encodedURL, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: state.token === undefined ? '' : `Bearer ${state.token}`,
      Email: state.email === undefined ? '' : state.email,
    },
  });

  if (!response.ok) {
    console.error(response);
    throw new Error(`HTTP error! status: ${response.status}\n-->${URL}`);
  }
  const data = await response.json();

  return data;
};

// login the app
export const postLogin = async (email, password) => {
  return await performPost('login', {
    email,
    password,
  });
};

// register the app
export const postRegister = async (
  email,
  username,
  password,
  firstName,
  lastName,
  birthday,
  city
) => {
  return await performPost('/register', {
    email,
    username,
    password,
    firstName,
    lastName,
    birthday,
    city,
  });
};

// fetch all the books
export const fetchBooks = async () => {
  return await performFetch('books');
};

// fetch a specific book
export const fetchSpecificBook = async (bookId) => {
  if (!bookId) {
    return [];
  }

  if (state.isSignedIn && state.token !== undefined && state.token !== '') {
    return await performFetch(`users/${state.userId}/books/${bookId}`);
  } else {
    return await performFetch(`books/${bookId}`);
  }
};

// fetch the user details after login or register
export const fetchUser = async (userId) => {
  if (!userId) {
    return [];
  }
  return await performFetch(`users/${userId}`);
};

// fetch details of all the books that the user has
export const fetchBookDetails = async (userId) => {
  if (!userId) {
    return [];
  }
  return await performFetch(`users/${userId}/books`);
};

// fetch details of a specific book that user has or change the details of the book
export const fetchSpecificBookDetails = async (userId, bookId) => {
  if (!userId || !bookId) {
    return [];
  }
  return await performFetch(`users/${userId}/books/${bookId}`);
};

// post a request for book
export const postBookRequest = async (userId) => {
  if (!userId) {
    return [];
  }
  return await performPost(`users/${userId}/request`);
};

// post book search
export const performBookSearchPost = async (filter = {}) => {
  if (state.isSignedIn && state.token !== undefined && state.token !== '') {
    return await performPost(`users/${state.userId}/books`, {
      filter: filter,
    });
  } else {
    return await performPost('books', { filter: filter });
  }
};

export const postBookOffer = async () => {
  const currentBook = state.currentBook;
  const book = {
    title: currentBook.title,
    authors: currentBook.authors,
    isbn_10: currentBook.isbn_10,
    isbn_13: currentBook.isbn_13,
    book_description: currentBook.description,
    rating: currentBook.rating,
    userId: state.userId,
    pageCount: currentBook.pageCount,
    condition: currentBook.condition,
    status: 'Available',
    availableAt: new Date(),
    createdAt: new Date(),
    book_language: currentBook.book_language,
    condition: 'Good',
  };

  return await performPost(`users/${state.userId}/books/add`, book);
};

export const deleteBookOffer = async (bookId) => {
  return await performDelete(`users/${state.userId}/books/${bookId}`);
};
