import { goalsContent } from './goals.js';
import { searchBarComponent } from '../../shared/searchbar.js';

export const home = () => {
  const container = document.createElement('div');
  container.className = 'body';

  const searchBar = searchBarComponent();
  container.appendChild(searchBar);

  container.appendChild(goalsContent());

  return container;
};
