import emailIcon from "../../../public/email-icon.svg";
import githubIcon from "../../../public/git-white.svg";
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
  container.classList = "container-fluid  footerr";

  containerFooter.appendChild(container);

  // sub containers

  const subContainers = document.createElement("div");
  subContainers.classList = "row py-4";
  container.appendChild(subContainers);

  // Email contact

  const emailContact = document.createElement("div");
  emailContact.className = "col-md-3 col-lg-3 col-xl-3 mx-auto";

  const emailRow = document.createElement("div");
  emailRow.classList = "row";
  emailContact.appendChild(emailRow);

  const emailImg = document.createElement("img");
  emailImg.src = emailIcon;

  subContainers.appendChild(emailContact);
  emailContact.appendChild(emailImg);

  const imgcol1 = document.createElement("div");
  imgcol1.classList = "col-auto my-auto";
  imgcol1.appendChild(emailImg);
  emailRow.appendChild(imgcol1);

  const contentCol1 = document.createElement("div");
  contentCol1.classList = "col-auto my-auto";
  const contactUs = document.createElement("p");
  contactUs.classList = "mb-0";
  contactUs.innerText = `Contact us
  readeer@ml.com`;
  contentCol1.appendChild(contactUs);
  emailContact.appendChild(contentCol1);
  emailRow.appendChild(contentCol1);

  const mailTo = document.createElement("a");
  mailTo.href = "mailto:readeer-app@gmail.com";
  mailTo.style.textDecoration = "none";
  mailTo.style.color = "white";
  mailTo.appendChild(emailRow);
  emailContact.appendChild(mailTo);

  //  GitHub and Copyright

  const gitCopyRight = document.createElement("div");
  gitCopyRight.className = "col-md-3 col-lg-3 col-xl-3 mx-auto";

  const gitCopyRightRow = document.createElement("div");
  gitCopyRightRow.classList = "row";
  gitCopyRight.appendChild(gitCopyRightRow);

  const gitHubImg = document.createElement("img");
  gitHubImg.src = githubIcon;

  subContainers.appendChild(gitCopyRight);

  const imgcol2 = document.createElement("div");
  imgcol2.classList = "col-auto my-auto";
  imgcol2.appendChild(gitHubImg);
  gitCopyRightRow.appendChild(imgcol2);

  const contentCol2 = document.createElement("div");
  contentCol2.classList = "col-auto my-auto";
  const content = document.createElement("p");
  content.classList = "mb-0";
  content.innerText = `Source code
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
  hackYourFuture.className = "col-md-3 col-lg-3 col-xl-3 mx-auto";
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
