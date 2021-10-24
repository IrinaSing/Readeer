import { state } from "../state/state.js";

// Use "GET" method to fetch a path
const performFetch = async (path) => {
  const URL = `${window.location.origin}/api/${path}`;
  const encodedURL = encodeURI(URL);
  const response = await fetch(encodedURL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: state.token === undefined ? "" : `Bearer ${state.token}`,
      Email: state.email === undefined ? "" : state.email,
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
  const URL = `${window.location.origin}/api/${path}`;
  const encodedURL = encodeURI(URL);
  const response = await fetch(encodedURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: state.token === undefined ? "" : `Bearer ${state.token}`,
      Email: state.email === undefined ? "" : state.email,
    },
    body: JSON.stringify(body),
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}\n-->${URL}`);
  }
  const data = await response.json();

  return data;
};

// login the app
export const postLogin = async (email, password) => {
  return await performPost("login", {
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
  return await performPost("/register", {
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
  return await performFetch("books");
};

// fetch a specific book
export const fetchSpecificBook = async (bookId) => {
  if (!bookId) {
    return [];
  }
  return await performFetch(`books/${bookId}`);
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
