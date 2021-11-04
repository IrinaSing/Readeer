/* eslint-disable folders/match-regex */
export const bookownersList = (offersArray) => {
  const tableContainer = document.createElement("div");
  tableContainer.className = "m-3";

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
  const bookOffers = offersArray;
  bookOffers.forEach((b) => {
    const trBody = document.createElement("tr");

    const tdTitle = document.createElement("td");
    tdTitle.innerHTML = b.title;
    trBody.appendChild(tdTitle);

    const tdId = document.createElement("td");
    tdId.innerHTML = b.id;
    trBody.appendChild(tdId);

    const tdIsbn13 = document.createElement("td");
    tdIsbn13.innerHTML = b.isbn_13;
    trBody.appendChild(tdIsbn13);

    const tdBtn = document.createElement("td");
    const contactBtn = document.createElement("button");
    contactBtn.className = "btn btn-blue";
    contactBtn.innerHTML = "Contact";
    tdBtn.appendChild(contactBtn);
    trBody.appendChild(tdBtn);

    tbody.appendChild(trBody);
  });

  table.appendChild(thead);
  table.appendChild(tbody);
  tableContainer.appendChild(table);
  return tableContainer;
};
