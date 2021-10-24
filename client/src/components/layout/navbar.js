/**
 * The shared navbar.
 *
 * @param {object} routes - A routes object, see /src/routes.js.
 * @returns {HTMLDivElement} A rendered nav bar element.
 */
 export const navbar = (routes) => {
  const container = document.createElement("div");
  container.className = "navbar-container";
  const divLogo = document.createElement("div");
  divLogo.className = "divLogo";
  container.appendChild(divLogo);
  const logoImg = document.createElement("img");
  logoImg.className = "logo-image";
  logoImg.src =
    "https://image.shutterstock.com/image-vector/cute-deer-reading-book-adorable-260nw-1345878212.jpg";
  divLogo.append(logoImg);
  const logoText = document.createElement("p");
  logoText.className = "logo-text";
  logoText.innerHTML = "Readeer";
  divLogo.append(logoText);

  const divNav = document.createElement("div");
  divNav.className = "divNav";
  container.appendChild(divNav);

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
