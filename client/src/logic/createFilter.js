export const createFilter = (userInput) => {
  const filter = {};
  //TODO add to demonstration
  // "rose,author:Rosita,title:Rose and Daisy,language:en"
  //"author:Julia Gerigk"
  //author:Rosita Steenbeek,title:Rose and Daisy
  const userSearchParams = userInput.split(",");

  for (let index = 0; index < userSearchParams.length; index++) {
    const param = userSearchParams[index];

    if (param.includes(":")) {
      const [key, value] = param.split(":");

      switch (key) {
        case "language":
          filter.book_language = value;
          break;

        case "authors":
        case "author":
          filter.authors = value;
          break;

        default:
          filter[key] = value;
          break;
      }
    } else {
      filter.text = filter.text ? filter.text + " " + param : param;
    }
  }

  return filter;
};
