import emailIcon from "../../../public/email-icon.svg";
import githubIcon from "../../../public/github-white.svg";
import hyfLogo from "../../../public/hyf-logo.svg";
/**
 * The shared footer.
 *
 * @returns {HTMLDivElement} A rendered footer element.
 */
export const footer = () => {
  const containerFooter = document.createElement("footer");
  containerFooter.classList = "page-footer font-small mdb-color pt-4 ";
  containerFooter.style.paddingLeft = "0px";

  // container

  const container = document.createElement("div");
  container.classList = "container-fluid  footerr ";

  containerFooter.appendChild(container);

  // sub containers

  const subContainers = document.createElement("div");
  subContainers.classList = "row";
  container.appendChild(subContainers);

  // Email contact

  const emailContact = document.createElement("div");
  emailContact.className = "col-md-3 col-lg-3 col-xl-3 mx-auto mt-3";

  const emailRow = document.createElement("div");
  emailRow.classList = "d-flex justify-content-start";
  emailContact.appendChild(emailRow);

  const emailImg = document.createElement("img");
  emailImg.src = emailIcon;
  // emailImg.style.width = "20%";

  subContainers.appendChild(emailContact);
  emailContact.appendChild(emailImg);

  const imgcol1 = document.createElement("div");
  imgcol1.classList = "my-auto";
  imgcol1.appendChild(emailImg);
  emailContact.appendChild(imgcol1);
  emailRow.appendChild(imgcol1);

  const contentCol1 = document.createElement("div");
  const contactUs = document.createElement("p");
  contactUs.innerText = `Contact us
  reader-app@gmail.com`;
  contentCol1.appendChild(contactUs);
  emailContact.appendChild(contentCol1);
  emailRow.appendChild(contentCol1);

  //  GitHub and Copyright

  const gitCopyRight = document.createElement("div");
  gitCopyRight.className = "col-md-3 col-lg-3 col-xl-3 mx-auto mt-3";

  const gitCopyRightRow = document.createElement("div");
  gitCopyRightRow.classList = "row";
  gitCopyRight.appendChild(gitCopyRightRow);

  const gitHubImg = document.createElement("img");
  gitHubImg.src = githubIcon;
  // gitHubImg.style.width = "50%";
  // gitHubImg.style = "p-3 mb-2 bg-light text-dark";

  subContainers.appendChild(gitCopyRight);

  const imgcol2 = document.createElement("div");
  imgcol2.classList = "col-auto my-auto";
  imgcol2.appendChild(gitHubImg);
  gitCopyRightRow.appendChild(imgcol2);

  const contentCol2 = document.createElement("div");
  const content = document.createElement("p");
  content.classList = "mb-0";
  content.innerText = `Source code on GitHub
    © 2021 Readeer`;
  contentCol2.appendChild(content);
  gitCopyRightRow.appendChild(contentCol2);

  const gitLink = document.createElement("a");
  gitLink.href = "https://github.com/IrinaSing/Readeer";
  gitLink.style.textDecoration = "none";
  gitLink.style.color = "white";
  gitLink.appendChild(gitCopyRightRow);
  gitCopyRight.appendChild(gitLink);

  // Hack your future

  const hackYourFuture = document.createElement("div");
  hackYourFuture.className = "col-md-3 col-lg-3 col-xl-3 mx-auto mt-3";
  subContainers.appendChild(hackYourFuture);

  const hackYourFutureRow = document.createElement("div");
  hackYourFutureRow.classList = "row";

  const hyfImg = document.createElement("img");
  hyfImg.src = hyfLogo;

  const imgcol3 = document.createElement("div");
  imgcol3.classList = "col-auto my-auto";
  imgcol3.appendChild(hyfImg);
  hackYourFutureRow.appendChild(imgcol3);

  const contentCol3 = document.createElement("div");
  contentCol3.classList = "col-auto my-auto";
  const hyfContent = document.createElement("p");
  hyfContent.classList = "mb-0";
  hyfContent.innerText = `Final project
  for HYF Belgium`;
  contentCol3.appendChild(hyfContent);

  const hyfLink = document.createElement("a");
  hyfLink.href = "https://hackyourfuture.be/";
  hyfLink.style.textDecoration = "none";
  hyfLink.style.color = "white";

  hackYourFutureRow.appendChild(contentCol3);
  hyfLink.appendChild(hackYourFutureRow);
  hackYourFuture.appendChild(hyfLink);

  return containerFooter;
};
