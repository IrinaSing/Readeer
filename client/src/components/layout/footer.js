/**
 * The shared footer.
 *
 * @returns {HTMLDivElement} A rendered footer element.
 */
export const footer = () => {
  const container = document.createElement("div");
  container.className = "bottom";
  container.innerHTML = "footer";

  return container;
};
