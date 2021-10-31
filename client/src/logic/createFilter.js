export const createFilter = (userInput) => {
  const filter = {};

  // "rose,author:Rosita,title:Rose and Daisy,language:en"
  const userSearchParams = userInput.split(',');

  for (let index = 0; index < userSearchParams.length; index++) {
    const param = userSearchParams[index];

    if (param.includes(':')) {
      const [key, value] = param.split(':');

      switch (key) {
        case 'language':
          filter.book_language = value;
          break;
        default:
          filter[key] = value;
          break;
      }
    } else {
      filter.text = filter.text ? filter.text + ' ' + param : param;
    }
  }

  console.log('filter', filter);
  return filter;
};
