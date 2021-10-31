import deerIcon from "../../../public/icons/deer-icon-without-white.jpg";

/**
 * The shared navbar.
 *
 * @param {object} routes - A routes object, see /src/routes.js.
 * @returns {HTMLDivElement} A rendered nav bar element.
 */
export const navbar = (routes) => {
  const container = document.createElement("div");
  container.className = "container-fluid  max-width:md";
  container.style.backgroundColor = "#1E78C7";

  const divInfo = document.createElement("div");
  divInfo.className = "row";

  const divLogo = document.createElement("div");
  divLogo.className = "col-4";

  const divImg = document.createElement("div");
  divImg.className = "col";
  divImg.src = deerIcon;

  const divTitle = document.createElement("div");
  divTitle.className = "col";
  divTitle.innerText = "Readeer";

  container.appendChild(divInfo);
  divInfo.appendChild(divLogo);
  divLogo.appendChild(divImg);
  divLogo.appendChild(divTitle);

  // const container = document.createElement("div");
  // container.className = "navbar-container";
  // const divLogo = document.createElement("div");
  // divLogo.className = "divLogo";
  // container.appendChild(divLogo);
  // const logoImg = document.createElement("img");
  // logoImg.className = "logo-image";
  // logoImg.src = deerIcon;
  // divLogo.append(logoImg);
  // const logoText = document.createElement("p");
  // logoText.className = "logo-text";
  // logoText.innerHTML = "Readeer";
  // divLogo.append(logoText);

  const divNav = document.createElement("div");
  divNav.className = "col-8";
  divInfo.appendChild(divNav);

  for (const route of routes) {
    const anchor = document.createElement("a");
    anchor.className = "navbar-anchor";
    anchor.innerHTML = route.name;
    anchor.href = route.path;
    anchor.setAttribute("data-navigo", "");
    divNav.appendChild(anchor);
  }

  return container;
};
