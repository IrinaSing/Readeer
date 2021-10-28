import { search } from './searchbar';
import { showcase } from "./showcase";

/**
 * The home page.
 *
 * @returns {HTMLDivElement} A rendered home page.
 */
export const home = () => {
  const container = document.createElement('div');
  container.className = 'body';

  container.appendChild(document.createTextNode('Welcome to HomePage!'));

  container.appendChild(document.createElement('br'));

  container.appendChild(search());
  container.appendChild(showcase());

  return container;
};
