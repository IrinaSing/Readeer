export const videoSection = () => {
  const VideoContainer = document.createElement("div");

  VideoContainer.className = "container d-flex justify-content-center";
  VideoContainer.style.width = "70%";

  VideoContainer.style.marginTop = "50px";
  VideoContainer.style.marginBottom = "50px";

  const divVideo = document.createElement("div");
  divVideo.className = "ratio ratio-16x9"; //
  divVideo.style.aspectRatio = "-bs-aspect-ratio: 50%";

  VideoContainer.appendChild(divVideo);

  const iFrame = document.createElement("iframe");
  iFrame.id = "movie_player";
  iFrame.style.display = "block";
  iFrame.className =
    "html5-video-player ytp-exp-bottom-control-flexbox ytp-title-enable-channel-logo ytp-embed ytp-embed-playlist ytp-embed-overlays-autohide ytp-mobile ytp-embed-mobile-exp unstarted-mode ytp-hide-controls ytp-small-mode";
  iFrame.src = "https://www.youtube.com/embed/a60088e-o6Q";
  iFrame.title = "Readeer";

  iFrame.frameborder = "0";
  iFrame.allow =
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
  iFrame.allowFullscreen = "true";
  iFrame.style.justifyContent = "center";

  iFrame.tabIndex = "-1";
  iFrame.ariaLabel = "YouTube Video Oynatıcısı";

  divVideo.appendChild(iFrame);

  return VideoContainer;
};
