export const showcase = (title, imgURL, content) => {
  const showCaseSection = document.createElement("div");
  showCaseSection.className = "showcase-section";
  showCaseSection.innerText = "What is Readeer?";
  const container = document.createElement("div");
  container.id = "container";
  container.className = "containar-showcase";

  // const sectionTitle = document.createElement("h1");
  // sectionTitle.innerHTML = "What is Readeer?";

  const divImg = document.createElement("div");
  divImg.className = "img-container";

  const showcaseImg = document.createElement("img");
  showcaseImg.className = "homeImg";
  showcaseImg.src = imgURL;
  showcaseImg.alt = "test";

  const divContent = document.createElement("div");
  divContent.className = "content-container";

  const titleEl = document.createElement("h1");
  titleEl.className = "title";
  titleEl.innerHTML = title;
  const showcaseContent = document.createElement("p");
  showcaseContent.id = "content";
  showcaseContent.innerHTML = content;

  // showCaseSection.appendChild(sectionTitle);
  showCaseSection.appendChild(container);
  container.appendChild(divImg);
  divImg.appendChild(showcaseImg);

  container.appendChild(divContent);
  divContent.appendChild(titleEl);
  divContent.appendChild(showcaseContent);

  return showCaseSection;
};
