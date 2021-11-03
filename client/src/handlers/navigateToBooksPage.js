import { router } from '../init/router.js';

export const navigateToBooksPage = (event) => {
  event.preventDefault();
  event.stopPropagation();

  router.navigate('/books');
};
export const navigateToBooksPageWithFilter = () => {
  router.navigate('/');
  router.navigate('/books');
};
