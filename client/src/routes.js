import { page } from './components/layout/page.js';

import { home } from './components/pages/home/index.js';
import { register } from './components/pages/register/index.js';
import { login } from './components/pages/login/index.js';
import { logout } from './components/pages/logout/index.js';
import { searchList } from './components/pages/searchList/index.js';

/**
 * Defines the route URLs, names and callbacks.
 *
 * @exports routes
 */

const parse = (params = {}) => {
  if (params === null || typeof params !== 'object') {
    return {};
  }
  return Object.fromEntries(
    Object.entries(params)
      .filter((param) => param[1] !== 'undefined')
      .map((param) => [
        param[0],
        param[1] !== '' && !Number.isNaN(Number(param[1]))
          ? Number(param[1])
          : param[1] === 'true'
          ? true
          : param[1] === 'false'
          ? false
          : param[1] === 'null'
          ? null
          : param[1],
      ])
  );
};

export const routes = [];

const routeHandler =
  (pageBody) =>
  ({ params, data }) => {
    const namedRoutes = routes.filter((route) => `name` in route);
    const cleanData = { ...data };
    cleanData.id = !data || !('id' in data) ? -1 : data.id;
    const root = document.getElementById('root');
    root.innerHTML = '';
    root.appendChild(page(pageBody(parse(data), parse(params)), namedRoutes));
  };

[
  {
    name: 'home',
    path: `/`,
    callback: routeHandler(home),
  },
  {
    name: 'books',
    path: `/books`,
    callback: routeHandler(searchList),
  },
  {
    name: 'register',
    path: `/register`,
    callback: routeHandler(register),
    unauthenticated: true,
  },
  {
    name: 'login',
    path: `/login`,
    callback: routeHandler(login),
    unauthenticated: true,
  },
  {
    name: 'logout',
    path: `/logout`,
    callback: routeHandler(logout),
    authenticated: true,
  },
].forEach((route) => routes.push(route));
