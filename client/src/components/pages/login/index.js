/**
 * The login page.
 *
 * @returns {HTMLDivElement} A rendered login page.
 */
export const login = () => {
  const container = document.createElement('div');
  container.className = 'body';

  container.innerHTML = `Welcome to the login page.`;
  return container;
};
