import emailIcon from '../../../public/email-icon.svg';
import githubIcon from '../../../public/git-white.svg';
import hyfLogo from '../../../public/hyf-logo.svg';
/**
 * The shared footer.
 *
 * @returns {HTMLDivElement} A rendered footer element.
 */
export const footer = () => {
  const containerFooter = document.createElement('footer');
  containerFooter.classList =
    'page-footer font-small mdb-color p-4 bg-primary text-white';
  containerFooter.style.paddingLeft = '0px';

  // container

  const container = document.createElement('div');
  container.classList = 'container-fluid';

  containerFooter.appendChild(container);

  const row = document.createElement('div');
  row.classList = 'row';
  container.appendChild(row);

  // col-md-4
  const colEmail = document.createElement('div');
  colEmail.classList = 'col-md-4';
  row.appendChild(colEmail);

  const centerDiv1 = document.createElement('div');
  centerDiv1.classList = 'mx-auto ';
  colEmail.appendChild(centerDiv1);

  const imgDiv1 = document.createElement('div');
  imgDiv1.classList = 'rounded-circle mx-auto d-flex justify-content-center';
  centerDiv1.appendChild(imgDiv1);

  const emailImg = document.createElement('img');
  emailImg.src = emailIcon;
  imgDiv1.appendChild(emailImg);

  const contentDiv1 = document.createElement('div');
  contentDiv1.classList = 'text-center';
  centerDiv1.appendChild(contentDiv1);

  const contactUs = document.createElement('p');
  contactUs.classList = 'pt-2 mb-0';
  contactUs.innerHTML = `Contact us
  <a href="mailto:readeer-app@gmail.com" style="text-decoration: none; color: white;"></a>`;
  contentDiv1.appendChild(contactUs);

  const contactLink = document.createElement('a');
  contactLink.href = 'mailto:readeer-app@gmail.com';
  // contactLink.classList = 'text-center';
  contactLink.innerText = 'readeer@ml.com';
  contactLink.style.color = 'white';
  contactLink.style.textDecoration = 'none';
  contentDiv1.appendChild(contactLink);

  //col-md-4
  const colSource = document.createElement('div');
  colSource.classList = 'col-md-4';
  row.appendChild(colSource);

  const centerDiv2 = document.createElement('div');
  centerDiv2.classList = 'mx-auto d-flex justify-content-center';
  colSource.appendChild(centerDiv2);

  const gitHubImg = document.createElement('img');
  gitHubImg.src = githubIcon;
  centerDiv2.appendChild(gitHubImg);

  const content = document.createElement('p');
  content.classList = 'p-3 mb-0 d-block';
  content.innerHTML = `Source code
    <a href="https://github.com/IrinaSing/Readeer" style="text-decoration: none; color: white;">© 2021 Readeer</a>`;
  centerDiv2.appendChild(content);

  //col-md-4
  const colLogo = document.createElement('div');
  colLogo.classList = 'col-md-4';
  row.appendChild(colLogo);

  const centerDiv3 = document.createElement('div');
  centerDiv3.classList = 'mx-auto d-flex justify-content-center';
  colLogo.appendChild(centerDiv3);

  const hyfImg = document.createElement('img');
  hyfImg.src = hyfLogo;
  centerDiv3.appendChild(hyfImg);

  const hyfContent = document.createElement('p');
  hyfContent.classList = 'p-3 mb-0';
  hyfContent.innerHTML = `Final project
    for <a href="https://hackyourfuture.be/" style="text-decoration: none; color: white;">HYF Belgium</a>`;
  centerDiv3.appendChild(hyfContent);

  return containerFooter;
};
