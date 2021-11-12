import emailIcon from "../../../public/email-icon.svg";
import githubIcon from "../../../public/github-icon.png";
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
  imgcol1.classList = "w-10 my-auto";
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
  gitCopyRightRow.classList = "d-flex justify-content-start";
  gitCopyRight.appendChild(gitCopyRightRow);

  const gitHubImg = document.createElement("img");
  gitHubImg.src = githubIcon;
  gitHubImg.style.width = "50%";
  // gitHubImg.style = "p-3 mb-2 bg-light text-dark";

  subContainers.appendChild(gitCopyRight);
  gitCopyRight.appendChild(gitCopyRightRow);
  gitCopyRightRow.appendChild(gitHubImg);

  const imgcol2 = document.createElement("div");
  imgcol2.classList = "w-10 my-auto";
  imgcol2.appendChild(gitHubImg);
  gitCopyRightRow.appendChild(imgcol2);

  const contentCol2 = document.createElement("div");
  const content = document.createElement("p");
  content.innerText = `Source code on GitHub
    © 2021 Readeer`;
  contentCol2.appendChild(content);
  gitCopyRightRow.appendChild(contentCol2);

  // Hack your future

  const hackYourFuture = document.createElement("div");
  hackYourFuture.className = "col-md-3 col-lg-3 col-xl-3 mx-auto mt-3";
  subContainers.appendChild(hackYourFuture);

  const hackYourFutureRow = document.createElement("div");
  hackYourFutureRow.classList = "d-flex justify-content-start";
  hackYourFuture.appendChild(hackYourFutureRow);

  const hyfImg = document.createElement("img");
  hyfImg.src = hyfLogo;
  hyfImg.style.width = "50%";
  hyfImg.style.fill = "FFFFFF";
  hackYourFutureRow.appendChild(hyfImg);

  const imgcol3 = document.createElement("div");
  imgcol3.classList = "w-10 my-auto";
  imgcol3.appendChild(hyfImg);
  hackYourFutureRow.appendChild(imgcol3);

  const contentCol3 = document.createElement("div");
  const hyfContent = document.createElement("p");
  hyfContent.innerText = `Final project
  for HYF Belgium`;
  contentCol3.appendChild(hyfContent);
  hackYourFutureRow.appendChild(contentCol3);
  // /**
  //  * The shared footer.
  //  *
  //  * @returns {HTMLDivElement} A rendered footer element.
  //  */
  // export const footer = () => {
  //   const containerFooter = document.createElement("footer");
  //   containerFooter.className = "page-footer font-small mdb-color pt-4 ";
  //   containerFooter.style.paddingLeft = "0px";

  //   const container = document.createElement("div");
  //   container.className = "container-fluid  footerr ";

  //   containerFooter.appendChild(container);

  //   const footerLinks = document.createElement("div");
  //   footerLinks.className = "row text-center text-md-left mt-3 pb-3";
  //   container.appendChild(footerLinks);

  //   // Project name colon

  //   const projectName = document.createElement("div");
  //   projectName.className = "col-md-3 col-lg-3 col-xl-3 mx-auto mt-3";

  //   footerLinks.appendChild(projectName);

  //   const brandName = document.createElement("h6");
  //   brandName.className = "text-uppercase mb-4";
  //   brandName.style.fontWeight = "bold";
  //   brandName.innerText = "Readeer";

  //   projectName.appendChild(brandName);

  //   const brandDescription = document.createElement("p");

  //   brandDescription.innerText =
  //     "Readeer is a platform for exchange of children's books in your neighborhood. Currently available only in Belgium.";
  //   projectName.appendChild(brandDescription);

  //   //  Copyright colon

  //   const copyRight = document.createElement("div");
  //   copyRight.className = "col-md-3 col-lg-3 col-xl-3 mx-auto mt-3";
  //   footerLinks.appendChild(copyRight);

  //   const copyRightText = document.createElement("p");
  //   copyRightText.className = "text-center text-md-left";

  //   copyRightText.innerText =
  //     "© 2020 Copyright: HYFB Class 13-14";

  //     copyRightText.style.marginTop = "40px";

  //   copyRight.appendChild(copyRightText);

  //   // contact info
  //   const contactDiv = document.createElement("div");
  //   contactDiv.className = "col-md-3 col-lg-3 col-xl-3 mx-auto mt-3";
  //   footerLinks.appendChild(contactDiv);
  //   // header
  //   const contactHeader = document.createElement("h6");
  //   contactHeader.className = "text-uppercase mb-4 font-weight-bold";
  //   contactHeader.innerText = "Contact";
  //   contactHeader.style.fontWeight = "bold";

  //   contactDiv.appendChild(contactHeader);

  //   // home icon
  //   const home = document.createElement("p");
  //   home.innerText = `Cantersteen 12 1000 Bruxelles`;
  //   contactDiv.appendChild(home);

  //   // const homeIcon = document.createElement("i");
  //   // homeIcon.className = "fas fa-home mr-3";
  //   // homeIcon.innerText = `Cantersteen 12 1000 Bruxelles`;

  //   // home.appendChild(homeIcon);

  //   // mail icon
  //   const mail = document.createElement("p");
  //   mail.innerText = "contact@hackyourfuture.be ";
  //   contactDiv.appendChild(mail);

  //   // const mailIcon = document.createElement("i");
  //   // mailIcon.className = "fas fa-envelope mr-3";
  //   // mailIcon.innerText = "contact@hackyourfuture.be ";

  //   // mail.appendChild(mailIcon);

  //   // phone icon
  //   const phone = document.createElement("p");
  //   phone.innerText = "0490444555";
  //   contactDiv.appendChild(phone);

  //   // const phoneIcon = document.createElement("i");
  //   // phoneIcon.className = "fas fa-phone mr-3";
  //   // // phoneIcon.innerText = "0493075254";

  //   // phone.appendChild(phoneIcon);

  //   // Copyright and social media
  //   const divInfo = document.createElement("div");
  //   divInfo.className = "row d-flex align-items-center";

  //   container.appendChild(divInfo);

  //    // Social media colon

  //    const socialMedia = document.createElement("div");
  //    socialMedia.className = "col-12";

  //    socialMedia.style.justifyContent="center";
  //    divInfo.appendChild(socialMedia);

  //   const linkImg = document.createElement ("a");

  //   linkImg.href = "https://github.com/IrinaSing/Readeer";
  //   linkImg.target = "_blank";

  //   // linkImg.innerHTML = `<img alt="gitHub icon" src="Readeer/client/public/icons/githubicon.jpg">`

  //   //socialMedia.appendChild(linkImg);

  //   const gitHubImg = document.createElement("img");
  //   gitHubImg.src = githubicon;
  //   gitHubImg.style.display="block";
  //   gitHubImg.style.margin="auto auto";

  //   socialMedia.appendChild(linkImg);
  //   linkImg.appendChild(gitHubImg);

  //   // <a href="default.asp"><img src="smiley.gif" alt="HTML tutorial" style="width:42px;height:42px;"></a>

  //   //  const gitHubImg = document.createElement("img");
  //   //  gitHubImg.src = githubicon;

  //   //  gitHubImg.style.display="block";
  //   //  gitHubImg.style.margin="auto auto";

  //   //  socialMedia.appendChild(gitHubImg);

  //   //  const gitHubLink = document.createElement()

  return containerFooter;
};
