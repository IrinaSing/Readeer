/* eslint-disable folders/match-regex */
/**
 * Table with data about book owners, book condition and city from books api.
 *
 * @returns {object} - A div element.
 */

import { state } from '../../../init/state';

export const bookOwnersList = (offersArray) => {
  const listContainer = document.createElement('div');

  const headerDiv = document.createElement('div');
  headerDiv.className = 'pt-3 pb-3';

  const header = document.createElement('h3');
  header.className = 'h3';
  header.style.fontFamily = 'Solway, serif';
  header.style.fontWeight = '400';
  header.textContent = 'Find this book nearby and contact the owner';
  header.style.color = '#1E78C7';
  headerDiv.appendChild(header);
  listContainer.appendChild(headerDiv);

  const tableContainer = document.createElement('div');
  tableContainer.className = 'table-responsive';

  const table = document.createElement('table');
  table.className = 'table table-hover table-borderless table-striped';

  const thead = document.createElement('thead');
  const trHead = document.createElement('tr');
  trHead.className = 'table-header';

  const headerText = ['Name', 'City', 'Book condition', 'Contact'];
  headerText.forEach((e) => {
    const thHead = document.createElement('th');
    thHead.innerHTML = e;
    thHead.style.fontWeight = 'bold';
    trHead.appendChild(thHead);
  });

  thead.appendChild(trHead);

  const tbody = document.createElement('tbody');
  const bookOffers = offersArray;

  // filter array to remove duplicated offers from the same user

  const uniqueOffers = new Set();
  const filteredArr = bookOffers.filter((book) => {
    const isPresentInSet = uniqueOffers.has(book.book_userId);
    uniqueOffers.add(book.book_userId);
    return !isPresentInSet;
  });

  //empty state for book ownership
  state.currentBookOwnerIds = {};

  filteredArr.forEach((b) => {
    // add owner to state
    state.currentBookOwnerIds[b.book_userId] = {
      email: b.userEmail,
      username: b.username,
      bookId: b.id,
    };

    const trBody = document.createElement('tr');

    const tdUsername = document.createElement('td');
    tdUsername.innerHTML = b.username;
    trBody.appendChild(tdUsername);

    const tdCity = document.createElement('td');
    tdCity.innerHTML = b.city;
    trBody.appendChild(tdCity);

    const tdCondition = document.createElement('td');
    tdCondition.innerHTML = b.condition;
    trBody.appendChild(tdCondition);

    const tdBtn = document.createElement('td');
    const contactBtn = document.createElement('button');
    contactBtn.className = 'btn btn-outline-primary';
    contactBtn.innerHTML = 'Contact';

    // trigger the modal
    contactBtn.type = 'button';
    contactBtn.setAttribute('data-bs-toggle', 'modal');
    contactBtn.setAttribute('data-bs-target', `#contactModal${b.book_userId}`);

    tdBtn.appendChild(contactBtn);
    trBody.appendChild(tdBtn);

    tbody.appendChild(trBody);

    // add modal part
    const modal = document.createElement('div');
    modal.className = 'modal fade';
    modal.id = `contactModal${b.book_userId}`;
    modal.tabIndex = '-1';
    modal.setAttribute('aria-labelledby', 'contactModalLabel');
    modal.setAttribute('aria-hidden', 'true');
    modal.innerHTML = `
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header bg-primary text-white">
          <h5 class="modal-title " id="exampleModalLabel">Contact Details</h5>
          <button type="button" class="btn-close bg-danger " data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          You can ask the book from the owner: <a href="mailto:${b.userEmail}">${b.userEmail}</a>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-success" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>`;

    tdBtn.appendChild(modal);
  });

  table.appendChild(thead);
  table.appendChild(tbody);
  tableContainer.appendChild(table);
  listContainer.appendChild(tableContainer);

  return listContainer;
};
