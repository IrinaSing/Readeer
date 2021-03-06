import { searchButtonHandler } from '../../handlers/searchButtonHandler.js';
import classes from './searchbar.module.css';

export const searchBarComponent = () => {
  const container = document.createElement('div');
  container.id = 'search-container';
  container.className = 'container my-5';
  container.classList.add(classes.searchContainer);

  const searchForm = document.createElement('form');
  searchForm.id = 'search-box-form';
  searchForm.className = 'd-flex form ';
  container.appendChild(searchForm);

  const inputElement = document.createElement('input');
  inputElement.name = 'search-box';
  inputElement.type = 'text';
  inputElement.id = 'search';
  inputElement.className = 'form-control searchBox';

  // to override default bootstrap behaviors and add custom styles wrt the design
  inputElement.style.backgroundColor = '#ededed';
  inputElement.style.background = '#ededed';
  inputElement.style.border = 'none';
  inputElement.style.padding = '0 0 0 20px';
  inputElement.style.borderRadius = '2rem';
  inputElement.placeholder = 'Search for books here...';

  searchForm.appendChild(inputElement);

  // to override default bootstrap behaviors on focus and blur
  inputElement.addEventListener('focus', function () {
    this.parentElement.style.border = '3px solid #86b7fe';
    this.parentElement.style.borderRadius = '2rem';
  });

  const buttonElement = document.createElement('button');
  buttonElement.id = 'button';
  buttonElement.className = 'btn rounded-pill';

  buttonElement.type = 'submit';
  buttonElement.innerText = 'Search';
  searchForm.appendChild(buttonElement);

  const ulElement = document.createElement('ul');
  ulElement.id = 'book-list';
  container.appendChild(ulElement);

  searchForm.addEventListener('submit', searchButtonHandler);

  return container;
};
