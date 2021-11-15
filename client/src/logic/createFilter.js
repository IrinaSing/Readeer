export const createFilter = (userInput) => {
  const filter = {};
  // example searches
  // "rose,author:Rosita,title:Rose and Daisy,language:en"
  // "author:Julia Gerigk"
  // author:Rosita Steenbeek,title:Rose and Daisy
  // isbn_10:1951949196
  // isbn_13:9781951949192
  const userSearchParams = userInput.split(',');

  for (let index = 0; index < userSearchParams.length; index++) {
    const param = userSearchParams[index];

    if (param.includes(':')) {
      const [key, value] = param.split(':');

      switch (key) {
        case 'language':
          filter.book_language = value;
          break;

        case 'authors':
        case 'author':
          filter.authors = value;
          break;

        case 'isbn_10':
        case 'isbn10':
        case 'isbn':
          filter.isbn_10 = value;
          break;

        case 'isbn_13':
        case 'isbn13':
          filter.isbn_13 = value;
          break;

        default:
          filter[key] = value;
          break;
      }
    } else {
      filter.text = filter.text ? filter.text + ' ' + param : param;
    }
  }

  return filter;
};
