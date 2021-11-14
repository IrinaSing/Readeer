export const videoSection = () => {
  const videoContainer = document.createElement('div');

  videoContainer.className = 'container mx-auto mt-5';

  const divVideo = document.createElement('div');
  divVideo.className = 'ratio ratio-16x9'; //

  videoContainer.appendChild(divVideo);

  const iFrame = document.createElement('iframe');
  iFrame.id = 'movie_player';

  iFrame.src = 'https://www.youtube.com/embed/a60088e-o6Q';
  iFrame.title = 'Readeer';

  iFrame.allowFullscreen = 'true';

  iFrame.ariaLabel = 'YouTube Video';

  divVideo.appendChild(iFrame);

  return videoContainer;
};
