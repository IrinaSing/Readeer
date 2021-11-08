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
  navbar.innerHTML = `
  <div class="container-fluid">
    <a class="navbar-brand fs-3" href="#" style = "padding:0">
      <img src=${deerIconWithCircle} alt="logo" width='100px' class="d-inline-block align-text-center" >
      Readeer
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        
      </ul>

    </div>
  </div>`;

  // Create a navbar container-fluid
  const navBarContainer = document.createElement('div');
  navBarContainer.id = 'navbar-container';
  navBarContainer.className = 'container-fluid';
  navBarContainer.style.backgroundColor = '#1E78C7';
  navBarContainer.style.marginTop = '50px';
  // navBarContainer.style.height = '100px';

  // Create a container
  const navBarContainerInner = document.createElement('div');
  navBarContainerInner.className = 'container';
  navBarContainerInner.style.backgroundColor = '#1E78C7';
  navBarContainer.appendChild(navBarContainerInner);

  // Create a row
  const navBarContainerInnerRow = document.createElement('div');
  navBarContainerInnerRow.className = 'row';
  navBarContainer.appendChild(navBarContainerInnerRow);

  // create a col for logo & brand
  const logoCol = document.createElement('div');
  logoCol.className = 'col-sm-6';
  navBarContainerInnerRow.appendChild(logoCol);
  {
    //create inner container
    const logoInnerContainer = document.createElement('div');
    logoInnerContainer.className = 'row';
    logoCol.appendChild(logoInnerContainer);

    // create a col for logo
    {
      const logoColInner = document.createElement('div');
      logoColInner.className = 'col-4';
      // logoColInner.className = 'ml-5 pl-3';
      logoInnerContainer.appendChild(logoColInner);
      // Create a logo
      const logoImg = document.createElement('img');
      logoImg.className = 'd-block mx-auto';
      logoImg.src = deerIconWithCircle;
      logoImg.style.maxWidth = '100px';
      logoImg.style.maxHeight = '100px';
      logoImg.style.borderRadius = '50%';
      logoImg.style.transform = 'scale(1.3)';
      logoColInner.appendChild(logoImg);
    }

    // create a col for brand
    {
      const brandColInner = document.createElement('div');
      brandColInner.className = 'col-8';
      // brandColInner.className = 'ml-3 pl-3';
      logoInnerContainer.appendChild(brandColInner);

      // Create a logo text
      const brandName = document.createElement('div');
      brandName.className = 'align-middle pl-2 fs-3';
      brandName.innerHTML = `<span class="ml-2">Readeer</span>`;
      brandName.style.color = 'white';
      brandName.style.alignItems = 'center';

      brandName.style.paddingTop = '35px';
      brandColInner.appendChild(brandName);
    }
  }

  // create a col for navbar
  const navCol = document.createElement('div');
  navCol.className = 'col-sm-6';
  navBarContainerInnerRow.appendChild(navCol);
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

  // return navBarContainer;
  return navbar;
};
