import { state } from "../state/state.js";

const performFetch = async (path) => {
  const URL = `${window.location.origin}/api/${path}`;
  const encodedURL = encodeURI(URL);
  const response = await fetch(encodedURL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: state.token === undefined ? "" : `Bearer ${state.token}`,
      Username: state.username === undefined ? "" : state.username, 
    },
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}\n-->${URL}`);
  }
  const data = await response.json();

  return data;
};

const performPost = async (path, body) => {
  const URL = `${window.location.origin}/api/${path}`;
  const encodedURL = encodeURI(URL);
  const response = await fetch(encodedURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: state.token === undefined ? "" : `Bearer ${state.token}`,
      Username: state.username === undefined ? "" : state.username, 
    },
    body: JSON.stringify(body),
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}\n-->${URL}`);
  }
  const data = await response.json();

  return data;
};

export const postLogin = async (username, password) => {
  return await performPost("login", {
    username,
    password,
  });
};

export const postRegister = async (username, password) => {
  return await postRegister("register", {
    username,
    password,
  });
};

export const fetchBooks = async () => {
  return await performFetch("books");
};

export const fetchSpecificBook = async (bookId) => {
  if (!bookId) {
    return [];
  }
  return await performFetch(`books/${bookId}`);
};

export const fetchUser = async (userId) => {
  if (!userId) {
    return [];
  }
  return await performFetch(`users/${userId}`);
};

export const fetchBookDetails = async (userId) => {
  if (!userId) {
    return [];
  }
  return await performFetch(`users/${userId}/books`);
};

export const fetchSpecificBookDetails = async (userId, bookId) => {
  if (!userId || !bookId) {
    return [];
  }
  return await performFetch(`users/${userId}/books/${bookId}`);
};

export const postBookRequest = async (userId) => {
  if (!userId) {
    return [];
  }
  return await performPost(`users/${userId}/request`);
};
