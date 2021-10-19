/**
 * This component creates a div element and returns it.
 *
 * @param {string} classNames - The class names of the div element.
 * @param {string} id - The unique id of the div element.
 * @returns {object} - A div element.
 */
export const divElement = (classNames = "", id = "") => {
  const div = document.createElement("div");
  div.className = classNames;
  div.id = id;

  return div;
};
