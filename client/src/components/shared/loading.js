import loadingGif from '../../../public/gifs/spinner-icon-gif-24.gif';

export const loadingComponent = () => {
  const loadingElement = document.createElement('img');
  loadingElement.src = loadingGif;
  loadingElement.alt = 'loading';
  loadingElement.className = ' mx-auto d-block';
  return loadingElement;
};
