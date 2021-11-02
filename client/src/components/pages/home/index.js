import { search } from './searchbar.js';
import { goalsContent } from './goals.js';
import { searchBarComponent } from '../../shared/searchbar.js';

export const home = () => {
  const container = document.createElement('div');
  container.className = 'body';

  container.appendChild(document.createTextNode('Welcome to HomePage!'));

  container.appendChild(document.createElement('br'));

  container.appendChild(search());
  container.appendChild(document.createTextNode('Welcome to HomePage!'));
  container.appendChild(document.createElement('br'));

  const searchBar = searchBarComponent();
  container.appendChild(searchBar);

  container.appendChild(goalsContent());

  return container;
};
