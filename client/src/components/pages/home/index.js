import { goalsContent } from './goals.js';
import { searchBarComponent } from '../../shared/searchbar.js';
import { search } from './searchbar';
import { showcase } from './showcase';
import { showcase } from './sections';
import { useful } from './sections';

export const home = () => {
  const container = document.createElement('div');
  container.className = 'body';

  const searchBar = searchBarComponent();
  container.appendChild(searchBar);

  container.appendChild(goalsContent());
  container.appendChild(document.createElement('br'));

  container.appendChild(search());
  container.appendChild(showcase());
  container.appendChild(useful());

  return container;
};
