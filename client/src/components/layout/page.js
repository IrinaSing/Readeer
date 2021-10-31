import { navbar } from './navbar.js';
import { footer } from './footer.js';

/**
 * The page layout component.
 *
 * @param {Function | HTMLElement} bodyComponent - The body for the newly rendered page.
 * @param {object} routes - The application's routes, for the navbar.
 * @returns {HTMLDivElement} A rendered page element.
 * @throws {TypeError} When the bodyComponent is not a function or DOM element.
 */
export const page = (bodyComponent, routes) => {
  const container = document.createElement('div');

  const page = document.createElement('div');
  page.id = 'page';

  container.appendChild(navbar(routes));
  page.appendChild(createBody(bodyComponent));
  container.appendChild(page);
  container.appendChild(footer());

  return container;
};

const createBody = (bodyComponent) => {
  if (typeof bodyComponent === 'function') {
    return bodyComponent();
  } else if (bodyComponent instanceof Element) {
    return bodyComponent;
  } else {
    throw new TypeError('body is not a function or a DOM element');
  }
};

export const reloadPage = (bodyComponent) => {
  const element = document.getElementById('page');
  element.innerHTML = '';
  element.appendChild(createBody(bodyComponent));
};
