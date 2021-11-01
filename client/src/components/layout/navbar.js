import deerIcon from "../../../public/icons/deer-icon-without-white.jpg";

/**
 * The shared navbar.
 *
 * @param {object} routes - A routes object, see /src/routes.js.
 * @returns {HTMLDivElement} A rendered nav bar element.
 */
export const navbar = (routes) => {
  const container = document.createElement("div");
  container.id = "container";
  container.className = "container-fluid";
  container.style.backgroundColor = "#1E78C7";
  container.style.marginTop = "50px";
  container.style.height = "100px";

  const divInfo = document.createElement("div");
  divInfo.id = "divInfo";
  divInfo.className = "row";
  container.appendChild(divInfo);
  // Logo and title

  const divLogo = document.createElement("div");
  divLogo.id = "divLogo";
  divLogo.className = "col";

  divInfo.appendChild(divLogo);

  const divLogoRow = document.createElement("div");
  divLogoRow.className = "row";
  divLogoRow.style.width = "50%";
  divLogo.appendChild(divLogoRow);

  const divImg = document.createElement("div");
  divImg.className = "col-4";
  divImg.style.paddingLeft = "50px";

  divLogoRow.appendChild(divImg);

  const img = document.createElement("img");
  img.src = deerIcon;
  img.style.maxWidth = "100px";
  img.style.maxHeight = "100px";
  img.style.borderRadius = "50%";

  divImg.appendChild(img);

  const divTitle = document.createElement("div");
  divTitle.className = "col-8";
  divTitle.innerText = "Readeer";
  divTitle.style.color = "white";
  divTitle.style.alignItems = "center";
  divTitle.style.fontSize = "x-large";
  divTitle.style.paddingTop = "35px";

  divLogoRow.appendChild(divImg);
  divLogoRow.appendChild(divTitle);

  // divLogo.appendChild(divTitle);

  //  Navigation

  const divMenu = document.createElement("div");
  divMenu.className = "col";
  
  const divNav = document.createElement("nav");
  divNav.className = "navbar";
  divNav.style.justifyContent="flex-end"
  divNav.style.marginTop = "30px";
  // divNav.style.marginLeft = "700px";

  divInfo.appendChild(divMenu);
  divMenu.appendChild(divNav);

  for (const route of routes) {
    const anchor = document.createElement("a");
    anchor.className = "navbar-brand nav-item nav-link";
    anchor.style.color = "white";
    anchor.innerHTML = route.name;
    anchor.href = route.path;
    anchor.setAttribute("data-navigo", "");
    divNav.appendChild(anchor);
  }

  return container;
};
