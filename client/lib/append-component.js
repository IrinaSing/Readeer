export const appendComponent = (component, testName) => {
  if (!component instanceof Element) {
    throw new TypeError('component is not a DOM element');
  }
  if (typeof testName !== 'string') {
    throw new TypeError('testName is not a string');
  }

  const container = document.createElement('div');
  container.appendChild(component);
  container.id = testName;

  document.body.appendChild(container);
  document.body.appendChild(document.createElement('hr'));
};
