import deerIconWithCircle from '../../../../public/icons/deer-icon_white-circle_cut.png';
import { state } from '../../../init/state';

/**
 * The shared navbar.
 *
 * @param {object} routes - A routes object, see /src/routes.js.
 * @returns {HTMLDivElement} A rendered nav bar element.
 */
export const navbar = (routes) => {
  const navbar = document.createElement('nav');
  navbar.className = 'navbar navbar-expand-lg navbar-dark bg-primary py-0 my-5';
  navbar.style.marginTop = '50px';

  // Create a navbar container-fluid
  const navBarContainer = document.createElement('div');
  navBarContainer.className = 'container-fluid';
  navbar.appendChild(navBarContainer);

  // Brand Logo
  const navLogo = document.createElement('a');
  navLogo.className = 'navbar-brand fs-3';
  navLogo.href = '#';
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

  // add links
  for (const route of routes) {
    if (!state.token && route.authenticated === true) {
      continue;
    }

    if (state.token && route.unauthenticated === true) {
      continue;
    }

    const navLink = document.createElement('li');
    navLink.className = 'nav-item';
    navLinks.appendChild(navLink);

    const anchor = document.createElement('a');
    anchor.className = 'nav-item nav-link fs-5';
    anchor.style.color = 'white';
    anchor.innerHTML = route.name;
    anchor.href = route.path;
    anchor.setAttribute('data-navigo', '');
    navLink.appendChild(anchor);
  }

  //   navBarContainer.innerHTML = `
  //   <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  //     <span class="navbar-toggler-icon"></span>
  //   </button>

  //   <div class="collapse navbar-collapse" id="navbarSupportedContent">
  //     <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
  //       <li class="nav-item">
  //         <a class="nav-link active" aria-current="page" href="#">Home</a>
  //       </li>
  //       <li class="nav-item">
  //         <a class="nav-link" href="#">Link</a>
  //       </li>

  //     </ul>
  //   </div>
  // `;

  // create a col for navbar
  const navCol = document.createElement('div');
  navCol.className = 'col-sm-6';
  // navBarContainerInnerRow.appendChild(navCol);
  {
    const divNav = document.createElement('nav');
    divNav.className = 'navbar';
    divNav.style.justifyContent = 'flex-end';
    divNav.style.marginTop = '20px';
    navCol.appendChild(divNav);

    for (const route of routes) {
      if (!state.token && route.authenticated === true) {
        continue;
      }

      if (state.token && route.unauthenticated === true) {
        continue;
      }

      const anchor = document.createElement('a');
      anchor.className = 'nav-item nav-link fs-5';
      anchor.style.color = 'white';
      anchor.innerHTML = route.name;
      anchor.href = route.path;
      anchor.setAttribute('data-navigo', '');
      divNav.appendChild(anchor);
    }
  }

  return navbar;
};
