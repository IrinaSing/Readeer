export const seacrhInstructions = () => {
  const searchInstrContainer = document.createElement("div");
  searchInstrContainer.classList = "container my-5";

  const titleRow = document.createElement("div");
  titleRow.classList = "row";
  searchInstrContainer.appendChild(titleRow);

  const title = document.createElement("h1");
  title.classList = "h1 mt-4 mb-3";
  title.style.color = "#1E78C7";
  title.innerText = "Effective search";

  titleRow.appendChild(title);

  const content = document.createElement("p");
  content.style.fontSize = "18px";
  content.classList = "p_text mt-3 mb-4 lh-base";
  content.innerText = `By default Readeer uses fuzzy search - it returns results compatible to your query from title, authors and description.
    But you can customize your request to get a precise result by using key word.`;
  titleRow.appendChild(content);

  const tableCont = document.createElement("div");
  // tableCont.classList = "d-flex justify-content-center";

  const tableContainer = document.createElement("div");
  tableContainer.className = "table-responsive";

  const table = document.createElement("table");
  table.className = "table table-striped table-borderless";
  tableContainer.appendChild(table);
  tableCont.appendChild(tableContainer);

  const thead = document.createElement("thead");
  const trHead = document.createElement("tr");
  trHead.className = "table-header";

  const headerText = ["Type of search", "Query formula", "Example"];
  headerText.forEach((e) => {
    const thHead = document.createElement("th");
    thHead.innerHTML = e;
    thHead.style.fontWeight = "bold";
    trHead.appendChild(thHead);
  });

  thead.appendChild(trHead);
  table.appendChild(thead);

  const tbody = document.createElement("tbody");

  const examples = [
    {
      title: "Default search (no key words)",
      formula: "text query",
      example: "rose",
    },
    /*
    {
      title: "By book title",
      formula: "title:Title",
      example: "title:Rose",
    },
    */
    {
      title: "By author",
      formula: "author:Author Name",
      example: "author:Julia Gerigk",
    },
    {
      title: "By isbn",
      formula: "isbn:number",
      example: "isbn:1951949196",
    },
    {
      title: "By language",
      formula: "language:languageCode",
      example: "language:en",
    },
    {
      title: "Combined",
      formula: "key:value,key:value",
      example: "author:Rosita Steenbeek,title:Rose and Daisy",
    },
  ];

  examples.forEach((tr) => {
    const trTable = document.createElement("tr");
    for (const key in tr) {
      const tdEl = document.createElement("td");
      tdEl.innerHTML = `${tr[key]}`;
      trTable.appendChild(tdEl);
    }

    tbody.appendChild(trTable);
  });

  table.appendChild(tbody);
  searchInstrContainer.appendChild(tableCont);

  return searchInstrContainer;
};
