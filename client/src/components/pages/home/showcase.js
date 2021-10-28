import showcaseImg from "../../../../public/little-girl.png";

export const showcase = () => {
  const divContainer = document.createElement("div");
  divContainer.classList = "container-lg py-5 w-75 margin-left:4rem";
  divContainer.style.marginLeft = "150px";

  divContainer.id = "divContainer";

  const infoDiv = document.createElement("div");
  infoDiv.id = "infoDiv";
  infoDiv.className = "row p-3 rounded";

  const pictureDiv = document.createElement("div");
  pictureDiv.className = "col-6";

  const headerDiv = document.createElement("div");
  headerDiv.className = "col-6";

  const showcasePicture = document.createElement("img");
  showcasePicture.src = showcaseImg;
  showcasePicture.className = "img-fluid";
  showcasePicture.style.maxWidth = "70%";

  pictureDiv.appendChild(showcasePicture);

  const header = document.createElement("h1");
  header.textContent = "What is Readeer?";
  header.className = "h1";
  //   header.classList = "text-xl-start fs-1";
  header.style.paddingTop = "100px";
  const content = document.createElement("p");
  content.className = "p fs-3";
  content.textContent =
    "Readeer is a platform for exchange of children's books in your neighbourhood. Currently available only in Belgium.";
  //   content.classList = "text-md-start fs-3";

  headerDiv.appendChild(header);
  headerDiv.appendChild(content);

  divContainer.appendChild(pictureDiv);
  divContainer.appendChild(headerDiv);
  divContainer.appendChild(infoDiv);
  infoDiv.appendChild(pictureDiv);
  infoDiv.appendChild(headerDiv);
  divContainer.appendChild(br);
  return divContainer;
};
