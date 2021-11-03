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
  navBarContainer.style.height = '100px';

  navBarContainer.innerHTML = `
<nav class="navbar navbar-expand-lg navbar-light bg-transparent text-white" style="backgroundColor:#1E78C7;height:100px;margin-top:50px">
  <div class="container-fluid">


    <a class="navbar-brand  text-white" href="#">
      <img src="${deerIconWithCircle}" alt=""  height="140" class="d-inline-block align-middle">
      Readeer
    </a>
  </div>
</nav>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>`;

  // Create a container
  // const navBarContainerInner = document.createElement('div');
  // navBarContainerInner.className = 'container';
  // navBarContainerInner.style.backgroundColor = '#1E78C7';
  // navBarContainer.appendChild(navBarContainerInner);

  // Create a row
  // const navBarContainerInnerRow = document.createElement('div');
  // navBarContainerInnerRow.className = 'row';
  // navBarContainer.appendChild(navBarContainerInnerRow);

  //TODO create a col for logo & brand
  // const logoCol = document.createElement('div');
  // logoCol.className = 'col-md-5';
  // navBarContainerInnerRow.appendChild(logoCol);
  {
    //create inner container
    // const logoInnerContainer = document.createElement('div');
    // logoInnerContainer.className = 'container';
    // logoCol.appendChild(logoInnerContainer);

    // create a col for logo
    {
      // const logoColInner = document.createElement('div');
      // logoColInner.className = 'col-md-4';
      // logoInnerContainer.appendChild(logoColInner);
      // Create a logo
      // const logoImg = document.createElement('img');
      // logoImg.src = deerIconWithCircle;
      // logoImg.style.maxWidth = '100px';
      // logoImg.style.maxHeight = '100px';
      // logoImg.style.borderRadius = '50%';
      // logoImg.style.transform = 'scale(1.5)';
      // logoCol.appendChild(logoImg);
    }

    // create a col for brand
    {
      // const brandColInner = document.createElement('div');
      // brandColInner.className = 'col-md-8';
      // logoInnerContainer.appendChild(brandColInner);
      // Create a logo text
      // const brandName = document.createElement('div');
      // brandName.className = 'align-middle';
      // brandName.innerText = 'Readeer';
      // brandName.style.color = 'red';
      // brandName.style.alignItems = 'center';
      // brandName.style.fontSize = 'x-large';
      // brandName.style.paddingTop = '35px';
      // logoCol.appendChild(brandName);
    }
  }

  //TODO create a col for navbar
  // const navCol = document.createElement('div');
  // navCol.className = 'col-md-7';
  // navBarContainerInnerRow.appendChild(navCol);
  // {
  //   const divNav = document.createElement('nav');
  //   divNav.className = 'navbar';
  //   divNav.style.justifyContent = 'flex-end';
  //   divNav.style.marginTop = '30px';
  //   navCol.appendChild(divNav);

  //   for (const route of routes) {
  //     const anchor = document.createElement('a');
  //     anchor.className = 'navbar-brand nav-item nav-link';
  //     anchor.style.color = 'white';
  //     anchor.innerHTML = route.name;
  //     anchor.href = route.path;
  //     anchor.setAttribute('data-navigo', '');
  //     divNav.appendChild(anchor);
  //   }
  // }

  // const divInfo = document.createElement('div');
  // divInfo.id = 'divInfo';
  // divInfo.className = 'row';
  // navBarContainerInner.appendChild(divInfo);
  // Logo and title

  // const divLogo = document.createElement('div');
  // divLogo.id = 'divLogo';
  // divLogo.className = 'col';

  // divInfo.appendChild(divLogo);

  // const divLogoRow = document.createElement('div');
  // divLogoRow.className = 'row';
  // divLogoRow.style.width = '50%';
  // divLogo.appendChild(divLogoRow);

  // const divImg = document.createElement('div');
  // divImg.className = 'col-4';
  // divImg.style.paddingLeft = '50px';

  // divLogoRow.appendChild(divImg);

  // const img = document.createElement('img');
  // img.src = deerIconWithCircle;
  // img.style.maxWidth = '100px';
  // img.style.maxHeight = '100px';
  // img.style.borderRadius = '50%';
  // img.style.transform = 'scale(1.5)';

  // divImg.appendChild(logoImg);

  // const divTitle = document.createElement('div');
  // divTitle.className = 'col-8';
  // divTitle.innerText = 'Readeer';
  // divTitle.style.color = 'white';
  // divTitle.style.alignItems = 'center';
  // divTitle.style.fontSize = 'x-large';
  // divTitle.style.paddingTop = '35px';

  // divLogoRow.appendChild(divImg);
  // divLogoRow.appendChild(divTitle);

  // divLogo.appendChild(divTitle);

  //  Navigation

  // const divMenu = document.createElement('div');
  // divMenu.className = 'col';

  // const divNav = document.createElement('nav');
  // divNav.className = 'navbar';
  // divNav.style.justifyContent = 'flex-end';
  // divNav.style.marginTop = '30px';
  // divNav.style.marginLeft = "700px";

  // divInfo.appendChild(divMenu);
  // divMenu.appendChild(divNav);

  // for (const route of routes) {
  //   const anchor = document.createElement('a');
  //   anchor.className = 'navbar-brand nav-item nav-link';
  //   anchor.style.color = 'white';
  //   anchor.innerHTML = route.name;
  //   anchor.href = route.path;
  //   anchor.setAttribute('data-navigo', '');
  //   divNav.appendChild(anchor);
  // }

  return navBarContainer;
};
