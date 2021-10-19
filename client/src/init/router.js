/**
 * Initializes a new router instance and sets your defined routes.
 *
 * @exports router
 */

import { config } from "../../config.js";

import Navigo from "../../lib/navigo/index.js";

import { routes } from "../routes.js";

const router = window.location.href.includes(config.repoName)
  ? new Navigo(`/${config.repoName}`)
  : new Navigo("/");

for (const route of routes) {
  router.on(route.path, route.callback);
}

// 404 route is missing

export { router };
