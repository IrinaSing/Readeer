import adults from "../../../../public/icons/adults.png";
import children from "../../../../public/icons/children.png";

import showcaseImg from "../../../../public/little-girl.png";

export const showcase = () => {
  const divContainer = document.createElement("div");
  divContainer.classList = "container-lg w-75";
  divContainer.style.marginLeft = "150px";
  divContainer.style.marginTop = "100px";
  divContainer.style.background = "#FBF9F9";

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
  showcasePicture.style.width = "100%";
  showcasePicture.style.height = "fit-content";

  pictureDiv.appendChild(showcasePicture);

  const header = document.createElement("h1");
  header.textContent = "What is Readeer?";
  header.className = "h1";
  header.style.color = "#1E78C7";
  header.style.paddingTop = "150px";
  header.style.marginLeft = "100px";


  const content = document.createElement("h3");
  content.className = "h3 text-muted lead";
  header.style.paddingTop = "20px";
  content.style.marginLeft = "100px";
  content.textContent = `
    Readeer is a platform for exchange of children's books in your neighbourhood.
    
    Currently available only in Belgium.
    `;
  //   content.classList = "text-md-start fs-3";

  // divContainer.appendChild(headerDiv);
  // divContainer.appendChild(pictureDiv);

  divContainer.appendChild(infoDiv);
  infoDiv.appendChild(headerDiv);
  infoDiv.appendChild(pictureDiv);

  headerDiv.appendChild(header);
  headerDiv.appendChild(content);

  return divContainer;
};

// Section : Will it be useful for me?

export const useful = () => {
  const divContainer = document.createElement("div");
  divContainer.classList = "container-lg py-5 w-75 margin-left:4rem";
  divContainer.style.marginLeft = "150px";

  divContainer.style.marginTop = "20px";

  divContainer.id = "divContainer";

  const row = document.createElement("div");
  row.className = "row";
  const col1 = document.createElement("div");
  col1.className = "col-3";

  const col2 = document.createElement("div");
  col2.className = "col-9";
  divContainer.appendChild(row);
  row.appendChild(col1);
  row.appendChild(col2);

  // Icons

  const row2 = document.createElement("div");
  // row2.className = "row";

  const adultsDiv = document.createElement("img");
  adultsDiv.style.marginTop = "150px";
  adultsDiv.style.marginBottom = "20px";
  adultsDiv.style.marginLeft = "80px";

  adultsDiv.src = adults;
  adultsDiv.className = "img-fluid";
  adultsDiv.style.maxWidth = "40%";

  const row3 = document.createElement("div");
  // row3.className = "row";

  const childrenDiv = document.createElement("img");
  childrenDiv.src = children;
  childrenDiv.style.marginLeft = "80px";

  childrenDiv.className = "img-fluid";
  childrenDiv.style.maxWidth = "40%";

  col1.appendChild(row2);
  col1.appendChild(row3);
  row2.appendChild(adultsDiv);
  row3.appendChild(childrenDiv);

  // Header
  const header = document.createElement("h1");
  header.className = "h1";
  header.style.color = "#1E78C7";
  header.style.textAlign = "center";
  header.style.marginBottom = "50px";

  header.innerText = `Will it be useful for me? `;

  // Content

  const contentDiv = document.createElement("div");

  const cDiv1 = document.createElement("div");
  cDiv1.className = "section-useful-content text-wrap";
  

  cDiv1.innerHTML = `You are a parent who lives abroad and experiences
  difficulty finding books for family reading in your mother tongue..`;

  const cDiv2 = document.createElement("div");
  cDiv2.className = "section-useful-content text-wrap";

  cDiv2.innerHTML = `You want to involve your children in sharing activities, to socialize them.`;

  const cDiv3 = document.createElement("div");
  cDiv3.className = "section-useful-content text-wrap";

  cDiv3.innerHTML = `You want to connect with some other family and find friends
  for your child to speak their mother language with.`;

  const cDiv4 = document.createElement("div");

  cDiv4.innerText = `You are a parent who wants to give away books when children outgrow them.`;
  cDiv4.className = "section-useful-content text-wrap";

  const cDiv5 = document.createElement("div");

  cDiv5.innerHTML = `You are a child who likes to read and finds it fun to exchange books with peers.`;
  cDiv5.className = "section-useful-content text-wrap";

  col2.appendChild(header);
  col2.appendChild(contentDiv);
  contentDiv.appendChild(cDiv1);
  contentDiv.appendChild(cDiv2);
  contentDiv.appendChild(cDiv3);
  contentDiv.appendChild(cDiv4);
  contentDiv.appendChild(cDiv5);

  return divContainer;
};
