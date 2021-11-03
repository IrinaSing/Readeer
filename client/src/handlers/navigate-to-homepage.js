import { router } from "../init/router.js";

export const navigateToHomepage = (event) => {
  event.preventDefault();
  event.stopPropagation();

  router.navigate("/");
};
