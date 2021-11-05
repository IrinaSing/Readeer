/* eslint-disable folders/match-regex */
export const bookownersList = (offersArray) => {
  const listContainer = document.createElement("div");
  // listContainer.className = "pt-3";

  const headerDiv = document.createElement("div");
  headerDiv.className = "pt-3 pb-3";

  const header = document.createElement("h3");
  header.className = "h3";
  header.style.fontFamily = "Solway, serif";
  header.style.fontWeight = "400";
  header.textContent = "Find this book nearby and contact the owner";
  header.style.color = "#1E78C7";
  headerDiv.appendChild(header);
  listContainer.appendChild(headerDiv);

  const tableContainer = document.createElement("div");
  tableContainer.className = "table-responsive";

  const table = document.createElement("table");
  table.className = "table table-hover table-borderless";

  const thead = document.createElement("thead");
  const trHead = document.createElement("tr");
  trHead.className = "table-header";

  const headerText = ["Name", "City", "Book condition", "Contact"];
  headerText.forEach((e) => {
    const thHead = document.createElement("th");
    thHead.innerHTML = e;
    thHead.style.fontWeight = "bold";
    trHead.appendChild(thHead);
  });

  thead.appendChild(trHead);

  const tbody = document.createElement("tbody");
  const bookOffers = offersArray;
  bookOffers.forEach((b) => {
    const trBody = document.createElement("tr");

    const tdUsername = document.createElement("td");
    tdUsername.innerHTML = b.username;
    trBody.appendChild(tdUsername);

    const tdCity = document.createElement("td");
    tdCity.innerHTML = b.city;
    trBody.appendChild(tdCity);

    const tdCondition = document.createElement("td");
    tdCondition.innerHTML = b.condition;
    trBody.appendChild(tdCondition);

    const tdBtn = document.createElement("td");
    const contactBtn = document.createElement("button");
    contactBtn.className = "btn btn-blue btn-sm";
    contactBtn.innerHTML = "Contact";
    tdBtn.appendChild(contactBtn);
    trBody.appendChild(tdBtn);

    tbody.appendChild(trBody);
  });

  table.appendChild(thead);
  table.appendChild(tbody);
  tableContainer.appendChild(table);
  listContainer.appendChild(tableContainer);
  return listContainer;
};
