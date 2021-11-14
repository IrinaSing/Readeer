// example google query
//https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes+isbn:0547539630+intitle:for&maxResults=30&printType=books

const origin = 'https://www.googleapis.com/books/v1/volumes?q=';

const printType = '&printType=books';

export const googleSearchQuery = (filter, limitResults = 30) => {
  const maxResults = '&maxResults=' + limitResults;

  const text = filter.text;
  const authors = filter.authors;
  const isbn = filter.isbn_10;

  let query = origin;

  let isFirstQueryPart = true;

  if (text) {
    const texts = text.split(' ');
    query += texts[0];

    for (let index = 1; index < texts.length; index++) {
      const textPart = texts[index];
      query += `%20${textPart}`;
    }

    isFirstQueryPart = false;
  }

  if (authors) {
    if (!isFirstQueryPart) {
      query += '+';
    }
    query += 'inauthor:' + authors;
    isFirstQueryPart = false;
  }

  if (isbn) {
    if (!isFirstQueryPart) {
      query += '+';
    }
    query += 'isbn:' + isbn;
    isFirstQueryPart = false;
  }

  query += maxResults + printType;

  return query;
};
