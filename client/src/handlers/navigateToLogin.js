import { router } from '../init/router.js';

export const navigateToLoginPage = (event) => {
  event.preventDefault();
  event.stopPropagation();

  router.navigate('/login');
};
