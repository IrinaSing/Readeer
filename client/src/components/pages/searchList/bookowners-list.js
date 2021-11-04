/* eslint-disable folders/match-regex */
export const bookownersList = () => {
  const tableContainer = document.createElement("div");
  tableContainer.className = "w-75";

  const table = document.createElement("table");
  table.className = "table table-striped";

  const thead = document.createElement("thead");
  const trHead = document.createElement("tr");

  const headerText = ["Name", "City", "Book condition", "Contact"];
  headerText.forEach((e) => {
    const thHead = document.createElement("th");
    thHead.innerHTML = e;
    trHead.appendChild(thHead);
  });

  thead.appendChild(trHead);

  const tbody = document.createElement("tbody");

  table.appendChild(thead);
  table.appendChild(tbody);
  tableContainer.appendChild(table);
  return tableContainer;
};
