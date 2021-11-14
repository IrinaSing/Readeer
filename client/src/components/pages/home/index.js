import { goalsContent } from './goals.js';
import { searchBarComponent } from '../../shared/searchbar.js';
import { showcase } from './sections';
import { useful } from './sections';
import { howUseApp } from './howUseApp.js';
import { videoSection } from './videoPlayer.js';

export const home = () => {
  const container = document.createElement('div');
  container.className = 'body';

  const searchBar = searchBarComponent();
  container.appendChild(searchBar);

  container.appendChild(showcase());
  container.appendChild(useful());

  container.appendChild(goalsContent());

  container.appendChild(videoSection());

  container.appendChild(howUseApp());

  return container;
};
