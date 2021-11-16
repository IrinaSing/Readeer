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
  colEmail.classList = 'col-md-4 my-3';
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
  contactUs.innerHTML = 'Contact us';
  contentDiv1.appendChild(contactUs);

  const contactLink = document.createElement('a');
  contactLink.href = 'mailto:readeer-app@gmail.com';
  contactLink.innerText = 'readeer@ml.com';
  contactLink.style.color = 'white';
  contactLink.style.textDecoration = 'none';
  contentDiv1.appendChild(contactLink);

  //col-md-4
  const colSource = document.createElement('div');
  colSource.classList = 'col-md-4 my-3';
  row.appendChild(colSource);

  const centerDiv2 = document.createElement('div');
  centerDiv2.classList = 'mx-auto';
  colSource.appendChild(centerDiv2);

  const imgDiv2 = document.createElement('div');
  imgDiv2.classList = 'rounded-circle mx-auto d-flex justify-content-center';
  centerDiv2.appendChild(imgDiv2);

  const gitHubImg = document.createElement('img');
  gitHubImg.src = githubIcon;
  imgDiv2.appendChild(gitHubImg);

  const contentDiv2 = document.createElement('div');
  contentDiv2.classList = 'text-center';
  centerDiv2.appendChild(contentDiv2);

  const content = document.createElement('p');
  content.classList = 'pt-2 mb-0';
  content.innerHTML = 'Source code';
  contentDiv2.appendChild(content);

  const sourceLink = document.createElement('a');
  sourceLink.href = 'https://github.com/IrinaSing/Readeer';
  sourceLink.innerText = '© 2021 Readeer';
  sourceLink.style.color = 'white';
  sourceLink.style.textDecoration = 'none';
  contentDiv2.appendChild(sourceLink);

  //col-md-4
  const colLogo = document.createElement('div');
  colLogo.classList = 'col-md-4 my-3';
  row.appendChild(colLogo);

  const centerDiv3 = document.createElement('div');
  centerDiv3.classList = 'mx-auto';
  colLogo.appendChild(centerDiv3);

  const imgDiv3 = document.createElement('div');
  imgDiv3.classList = 'rounded-circle mx-auto d-flex justify-content-center';
  centerDiv3.appendChild(imgDiv3);

  const hyfImg = document.createElement('img');
  hyfImg.src = hyfLogo;
  imgDiv3.appendChild(hyfImg);

  const contentDiv3 = document.createElement('div');
  contentDiv3.classList = 'text-center';
  centerDiv3.appendChild(contentDiv3);

  const hyfContent = document.createElement('p');
  hyfContent.classList = 'pt-2 mb-0';
  hyfContent.innerHTML = 'Final project';
  contentDiv3.appendChild(hyfContent);

  const hyfLink = document.createElement('a');
  hyfLink.href = 'https://hackyourfuture.be/';
  hyfLink.innerText = 'for HYF Belgium';
  hyfLink.style.color = 'white';
  hyfLink.style.textDecoration = 'none';
  contentDiv3.appendChild(hyfLink);

  return containerFooter;
};
