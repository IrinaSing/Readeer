export const search = () => {
  const searchEl = document.createElement('div');

  const searchForm = document.createElement('form');

  searchForm.className = 'd-flex';
  searchEl.appendChild(searchForm);

  const inputEl = document.createElement('input');
  inputEl.className = 'form-control mr-3';
  inputEl.type = 'search';
  inputEl.placeholder = "Let's search a book";
  inputEl.ariaLabel = 'Search';

  searchForm.appendChild(inputEl);

  const buttonEl = document.createElement('button');
  buttonEl.className = 'btn btn-outline-success';
  buttonEl.type = 'submit';
  buttonEl.innerHTML = 'Search';

  searchForm.appendChild(buttonEl);

  return searchEl;
};
