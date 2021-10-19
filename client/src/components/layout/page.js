import { navbar } from "./navbar.js";
import { footer } from "./footer.js";

/**
 * The page layout component.
 *
 * @param {Function | HTMLElement} bodyComponent - The body for the newly rendered page.
 * @param {object} routes - The application's routes, for the navbar.
 * @returns {HTMLDivElement} A rendered page element.
 * @throws {TypeError} When the bodyComponent is not a function or DOM element.
 */
export const page = (bodyComponent, routes) => {
  const container = document.createElement("div");

  container.appendChild(navbar(routes));
  if (typeof bodyComponent === "function") {
    container.appendChild(bodyComponent());
  } else if (bodyComponent instanceof Element) {
    container.appendChild(bodyComponent);
  } else {
    throw new TypeError("body is not a function or a DOM element");
  }
  container.appendChild(footer());

  return container;
};
