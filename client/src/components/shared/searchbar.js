import { searchButtonHandler } from '../../handlers/searchButtonHandler.js';

export const searchBarComponent = () => {
  const container = document.createElement('div');
  container.id = 'search-container';
  container.className = 'container';

  const searchForm = document.createElement('form');
  searchForm.id = 'search-box-form';
  searchForm.className = 'd-flex form';
  container.appendChild(searchForm);

  const inputElement = document.createElement('input');
  inputElement.name = 'search-box';
  inputElement.type = 'text';
  inputElement.id = 'search';
  inputElement.className = 'form-control mr-3';
  inputElement.placeholder = 'Search for books here...';
  searchForm.appendChild(inputElement);

  const buttonElement = document.createElement('button');
  buttonElement.id = 'button';
  buttonElement.className = 'btn btn-outline-primary';
  buttonElement.type = 'submit';
  buttonElement.innerText = 'Search';
  searchForm.appendChild(buttonElement);

  const ulElement = document.createElement('ul');
  ulElement.id = 'book-list';
  container.appendChild(ulElement);

  searchForm.addEventListener('submit', searchButtonHandler);

  return container;
};
