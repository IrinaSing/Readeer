import deerIconWithCircle from '../../../../public/icons/deer-icon_white-circle.png';

/**
 * The shared navbar.
 *
 * @param {object} routes - A routes object, see /src/routes.js.
 * @returns {HTMLDivElement} A rendered nav bar element.
 */
export const navbar = (routes) => {
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
  logoCol.className = 'col-md-6';
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
  navCol.className = 'col-md-6';
  navBarContainerInnerRow.appendChild(navCol);
  {
    const divNav = document.createElement('nav');
    divNav.className = 'navbar';
    divNav.style.justifyContent = 'flex-end';
    divNav.style.marginTop = '20px';
    navCol.appendChild(divNav);

    for (const route of routes) {
      const anchor = document.createElement('a');
      anchor.className = 'nav-item nav-link fs-4';
      anchor.style.color = 'white';
      anchor.innerHTML = route.name;
      anchor.href = route.path;
      anchor.setAttribute('data-navigo', '');
      divNav.appendChild(anchor);
    }
  }

  return navBarContainer;
};
