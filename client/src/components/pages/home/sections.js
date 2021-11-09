import adults from "../../../../public/icons/adults.png";
import children from "../../../../public/icons/children.png";

import showcaseImg from "../../../../public/little-girl.png";

// section what is readeer
export const showcase = () => {
  const divContainer = document.createElement("div");
  divContainer.className = "container my-5";
  divContainer.style.background = "#FBF9F9";
  divContainer.id = "divContainer";

  const infoDiv = document.createElement("div");
  infoDiv.id = "infoDiv";
  infoDiv.className = "row p-3 rounded";
  divContainer.appendChild(infoDiv);

  const headerDiv = document.createElement("div");
  headerDiv.className = "col-md-5 pt-5";
  infoDiv.appendChild(headerDiv);

  const pictureDiv = document.createElement("div");
  pictureDiv.className = "col-md-7";
  infoDiv.appendChild(pictureDiv);

  const header = document.createElement("h1");
  header.textContent = "What is Readeer?";
  header.className = "h1";
  header.style.color = "#1E78C7";
  header.style.paddingTop = "150px";
  headerDiv.appendChild(header);

  const content = document.createElement("p");
  content.className = "text-muted lead";
  content.style.fontSize = "18px";
  header.style.paddingTop = "20px";
  content.innerHTML = `
    Readeer is a platform for exchange of children's books in your neighbourhood.
    
    Currently available only in Belgium.
    `;
  headerDiv.appendChild(content);

  const showcasePicture = document.createElement("img");
  showcasePicture.src = showcaseImg;
  showcasePicture.className = "d-block";
  showcasePicture.style.width = "100%";
  pictureDiv.appendChild(showcasePicture);

  return divContainer;
};

// Section : Will it be useful for me?
export const useful = () => {
  const divContainer = document.createElement("div");
  divContainer.className = "container my-5";
  divContainer.id = "divContainer";

  // first row for title
  const titleRow = document.createElement("div");
  titleRow.className = "row";
  divContainer.appendChild(titleRow);

  const titleColumn = document.createElement("div");
  titleColumn.className = "col-md-12";
  titleRow.appendChild(titleColumn);

  // title
  const header = document.createElement("h1");
  header.className = "h1";
  header.style.color = "#1E78C7";
  header.style.textAlign = "center";
  header.style.marginBottom = "50px";
  header.innerText = `Will it be useful for me? `;
  titleColumn.appendChild(header);

  // second row for image and content
  const contentFirstRow = document.createElement("div");
  contentFirstRow.className = "row";
  divContainer.appendChild(contentFirstRow);

  // first column for image
  const imageColumn1 = document.createElement("div");
  imageColumn1.className = "col-md-3";
  contentFirstRow.appendChild(imageColumn1);

  // first image
  const adultsImg = document.createElement("img");
  adultsImg.src = adults;
  adultsImg.className = "d-block mx-auto";
  adultsImg.style.maxWidth = "40%";
  imageColumn1.appendChild(adultsImg);

  // second column for content
  const contentColumn1 = document.createElement("div");
  contentColumn1.className = "col-md-9";
  contentFirstRow.appendChild(contentColumn1);

  // content x2 text

  const cDiv1 = document.createElement("div");
  cDiv1.className = "section-useful-content text-wrap";
  cDiv1.textContent = `You are a parent who lives abroad and experiences
  difficulty finding books for family reading in your mother tongue..`;
  contentColumn1.appendChild(cDiv1);

  const cDiv2 = document.createElement("div");
  cDiv2.className = "section-useful-content text-wrap";
  cDiv2.textContent = `You want to involve your children in sharing activities, to socialize them.`;
  contentColumn1.appendChild(cDiv2);

  // third row for image and content
  const contentSecondRow = document.createElement("div");
  contentSecondRow.className = "row";
  divContainer.appendChild(contentSecondRow);

  // first column for image
  const imageColumn2 = document.createElement("div");
  imageColumn2.className = "col-md-3";
  contentSecondRow.appendChild(imageColumn2);

  // second image
  const childrenImg = document.createElement("img");
  childrenImg.src = children;
  childrenImg.className = "d-block mx-auto";
  childrenImg.style.maxWidth = "40%";
  imageColumn2.appendChild(childrenImg);

  // second column for content
  const contentColumn2 = document.createElement("div");
  contentColumn2.className = "col-md-9";
  contentSecondRow.appendChild(contentColumn2);

  // content x3 text
  const cDiv3 = document.createElement("div");
  cDiv3.className = "section-useful-content text-wrap";
  cDiv3.innerHTML = `You want to connect with some other family and find friends
  for your child to speak their mother language with.`;
  contentColumn2.appendChild(cDiv3);

  const cDiv4 = document.createElement("div");
  cDiv4.innerText = `You are a parent who wants to give away books when children outgrow them.`;
  cDiv4.className = "section-useful-content text-wrap";
  contentColumn2.appendChild(cDiv4);

  const cDiv5 = document.createElement("div");
  cDiv5.innerHTML = `You are a child who likes to read and finds it fun to exchange books with peers.`;
  cDiv5.className = "section-useful-content text-wrap";
  contentColumn2.appendChild(cDiv5);

  return divContainer;
};
