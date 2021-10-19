/**
 * Renders a string of HTML.
 */
export const render = (html) => {
  if (typeof html !== 'string') {
    throw new TypeError('html is not a string');
  }
  if (html === '') {
    throw new Error('html cannot be an empty string');
  }

  const container = document.createElement('div');
  container.innerHTML = html;

  if (container.childElementCount === 0) {
    throw new Error('html is not valid');
  }

  const renderedHtml =
    container.childElementCount === 1 ? container.children[0] : container;

  return renderedHtml;
};
