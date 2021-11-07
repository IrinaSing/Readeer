import { doLogout } from "../../../handlers/do-logout";


/**
 * The logout page.
 *
 * @returns {HTMLDivElement} A rendered logout page.
 */
export const logout = () => {
  doLogout();

  return document.createElement('div'); // dummy container since the framework expects it.
};
