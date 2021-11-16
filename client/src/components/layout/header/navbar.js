import deerIconWithCircle from '../../../../public/icons/deer-icon_white-circle_cut.png';
import { navigateToBooksPageWithFilter } from '../../../handlers/navigateToBooksPage';
import { navigateToMyOffers } from '../../../handlers/navigateToOffersPage.js';
import { state } from '../../../init/state.js';

/**
 * The shared navbar.
 *
 * @param {object} routes - A routes object, see /src/routes.js.
 * @returns {HTMLDivElement} A rendered nav bar element.
 */
export const navbar = (routes) => {
  const navbar = document.createElement('nav');
  navbar.id = 'navbar';
  navbar.className = 'navbar navbar-expand-md navbar-dark bg-primary py-0 mb-5';
  // navbar.style.marginTop = '50px';

  // Create a navbar container-fluid
  const navBarContainer = document.createElement('div');
  navBarContainer.className = 'container-fluid';
  navbar.appendChild(navBarContainer);

  // Brand Logo
  const navLogo = document.createElement('a');
  navLogo.className = 'navbar-brand fs-3';
  navLogo.href = '/';
  navLogo.setAttribute('data-navigo', '');
  navLogo.style.padding = '0';
  navLogo.innerHTML = `<img src=${deerIconWithCircle} alt="logo" width='100px' class="d-inline-block align-middle" >
  Readeer`;
  navBarContainer.appendChild(navLogo);

  // Button for mobile devices
  const button = document.createElement('button');
  button.className = 'navbar-toggler';
  button.type = 'button';
  button.setAttribute('data-bs-toggle', 'collapse');
  button.setAttribute('data-bs-target', '#navbarSupportedContent');
  button.setAttribute('aria-controls', 'navbarSupportedContent');
  button.setAttribute('aria-expanded', 'false');
  button.setAttribute('aria-label', 'Toggle navigation');
  button.innerHTML = `<span class="navbar-toggler-icon"></span>`;
  navBarContainer.appendChild(button);

  // Navbar content
  const navContent = document.createElement('div');
  navContent.className = 'collapse navbar-collapse';
  navContent.id = 'navbarSupportedContent';
  navBarContainer.appendChild(navContent);

  // Navbar links
  const navLinks = document.createElement('ul');
  navLinks.className = 'navbar-nav ms-auto mb-2 mb-lg-0';
  navContent.appendChild(navLinks);

  const navLinkDropdown = document.createElement('li');
  navLinkDropdown.className = 'nav-item dropdown';

  const dropdownAnchor = document.createElement('a');
  dropdownAnchor.className = 'nav-link dropdown-toggle fs-5';
  dropdownAnchor.href = '#';
  dropdownAnchor.id = 'navbarDropdown';
  dropdownAnchor.setAttribute('role', 'button');
  dropdownAnchor.setAttribute('data-bs-toggle', 'dropdown');
  dropdownAnchor.setAttribute('aria-expanded', 'false');
  dropdownAnchor.style.color = 'white';
  dropdownAnchor.innerText = `${state.username}`;
  navLinkDropdown.appendChild(dropdownAnchor);

  const dropdownList = document.createElement('ul');
  dropdownList.className = 'dropdown-menu';
  dropdownList.setAttribute('aria-labelledby', 'navbarDropdown');
  dropdownList.innerHTML = `           <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>`;
  navLinkDropdown.appendChild(dropdownList);

  // add links
  for (const route of routes) {
    if (!state.token && route.authenticated === true) {
      continue;
    }

    if (state.token && route.unauthenticated === true) {
      continue;
    }

    // if (route.name === 'logout') {
    //   continue;
    // }
    const navLink = document.createElement('li');
    navLink.className = 'nav-item';
    navLinks.appendChild(navLink);

    const anchor = document.createElement('a');
    anchor.id = route.id;

    anchor.innerHTML = route.name;
    anchor.href = route.path;
    anchor.setAttribute('data-navigo', '');

    switch (route.name) {
      case 'my offers':
        const dropdownItem = document.createElement('li');
        dropdownList.appendChild(dropdownItem);

        anchor.className = 'dropdown-item';
        dropdownItem.appendChild(anchor);
        break;

      default:
        anchor.className = 'nav-link fs-5';
        anchor.style.color = 'white';
        navLink.appendChild(anchor);
        break;
    }

    anchor.addEventListener('click', () => {
      state.currentBookId = '';
      state.searchFilter = '';
      state.currentBookOwnerIds = {};

      if (route.name === 'books') {
        navigateToBooksPageWithFilter();
      }

      if (route.name === 'my offers') {
        navigateToMyOffers();
      }
    });
  }

  if (state.isSignedIn) {
    navLinks.appendChild(navLinkDropdown);
  }

  return navbar;
};
