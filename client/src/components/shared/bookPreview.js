import classes from './bookPreview.module.css';

export const bookPreview = (
    id,
    title = 'Unknown',
    description = '',
    isbn_10 = '',
    isbn_13 = '',
  ) => {
    const container = document.createElement("article");
    container.classList.add(classes.preview);

    const image = document.createElement('img');
    image.alt = 'book cover';
    image.src = "https://via.placeholder.com/150x200";

    const header = document.createElement('h1');
    header.innerText = title;

    const isbn = document.createElement('p');
    isbn.innerText = `${isbn_10} - ${isbn_13}`;

    const descriptor = document.createElement('p');
    descriptor.innerText = description;
    descriptor.classList.add(classes.descriptor);

    const viewListings = document.createElement('a');
    viewListings.innerText = 'View listings';
    viewListings.href = `/books/${id}`;

    container.appendChild(image);
    container.appendChild(header);
    //container.appendChild(isbn);
    container.appendChild(descriptor);
    container.appendChild(viewListings);

    return container;
};