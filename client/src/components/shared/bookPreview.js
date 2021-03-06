/* eslint-disable filenames/match-regex */
import { googleManager } from '../../business-logic/googleBooksAPI.js';
import classes from './bookPreview.module.css';
import classes1 from '../shared/bookPreview.module.css';
import { button } from './button.js';

export const bookPreview = (
  id,
  title = 'Unknown',
  description = '',
  isbn_10 = '',
  isbn_13 = '',
  onClick = (id) => {},
  onDelete = null
) => {
  const elementContainer = document.createElement('div');
  elementContainer.classList.add(classes1.container);

  const container = document.createElement('article');
  container.id = id;
  container.classList.add(classes.preview);

  const image = document.createElement('img');
  image.alt = 'book cover';
  image.style.visibility = 'hidden';

  // fetch the image from the google books api
  googleManager.getPictureURL(isbn_10).then((url) => {
    image.src = url;
    image.style.visibility = 'visible';
  });

  const header = document.createElement('h1');
  header.innerText = title;

  const isbn = document.createElement('p');
  isbn.innerText = `${isbn_10} - ${isbn_13}`;

  const descriptor = document.createElement('p');
  descriptor.innerText = description;
  descriptor.classList.add(classes.descriptor);

  const viewListings = document.createElement('a');
  viewListings.innerText = 'View';
  viewListings.href = '#';
  viewListings.addEventListener('click', (event) => {
    event.preventDefault();
    onClick(id);
  });

  let btnDiv = null;
  if (onDelete !== null) {
    btnDiv = document.createElement('div');
    btnDiv.id = 'removeBtnDiv';
    btnDiv.classList = 'text-center m-3';
    const removeOfferBtn = button(
      'submit',
      'Remove',
      'btn btn-outline-danger',
      'removeOfferBtn'
    );
    btnDiv.appendChild(removeOfferBtn);
    removeOfferBtn.addEventListener('click', (event) => {
      event.stopPropagation();
      event.preventDefault();
      onDelete(id);
    });
  }

  container.appendChild(image);
  container.appendChild(header);
  container.appendChild(descriptor);
  container.appendChild(viewListings);
  elementContainer.appendChild(container);
  if (btnDiv) {
    elementContainer.appendChild(btnDiv);
  }

  return elementContainer;
};
