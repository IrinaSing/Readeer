import { goalsContent } from './goals.js';
import { searchBarComponent } from '../../shared/searchbar.js';
import { showcase } from './sections.js';
import { useful } from './sections.js';
import { videoSection } from "./Video.js";

export const home = () => {
  const container = document.createElement('div');
  container.className = 'body';

  const searchBar = searchBarComponent();
  container.appendChild(searchBar);

  container.appendChild(showcase());
  container.appendChild(useful());

  container.appendChild(goalsContent());
  container.appendChild(videoSection());
  return container;
};
