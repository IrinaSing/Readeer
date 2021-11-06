import githubicon from "../../../public/icons/githubicon.jpg";

/**
 * The shared footer.
 *
 * @returns {HTMLDivElement} A rendered footer element.
 */
export const footer = () => {
  const containerFooter = document.createElement("footer");
  containerFooter.className = "page-footer font-small mdb-color pt-4 ";
  containerFooter.style.paddingLeft = "0px";

  const container = document.createElement("div");
  container.className = "container-fluid  footerr ";

  containerFooter.appendChild(container);

  const footerLinks = document.createElement("div");
  footerLinks.className = "row text-center text-md-left mt-3 pb-3";
  container.appendChild(footerLinks);

  // Project name colon

  const projectName = document.createElement("div");
  projectName.className = "col-md-3 col-lg-3 col-xl-3 mx-auto mt-3";

  footerLinks.appendChild(projectName);

  const brandName = document.createElement("h6");
  brandName.className = "text-uppercase mb-4";
  brandName.style.fontWeight = "bold";
  brandName.innerText = "Readeer";

  projectName.appendChild(brandName);

  const brandDescription = document.createElement("p");

  brandDescription.innerText =
    "Readeer is a platform for exchange of children's books in your neighborhood. Currently available only in Belgium.";
  projectName.appendChild(brandDescription);

  //  Copyright colon

  const copyRight = document.createElement("div");
  copyRight.className = "col-md-3 col-lg-3 col-xl-3 mx-auto mt-3";
  footerLinks.appendChild(copyRight);

  const copyRightText = document.createElement("p");
  copyRightText.className = "text-center text-md-left";

  copyRightText.innerText =
    "© 2020 Copyright: https://readeer-app.herokuapp.com/";

  copyRight.appendChild(copyRightText);

  // contact info
  const contactDiv = document.createElement("div");
  contactDiv.className = "col-md-3 col-lg-3 col-xl-3 mx-auto mt-3";
  footerLinks.appendChild(contactDiv);
  // header
  const contactHeader = document.createElement("h6");
  contactHeader.className = "text-uppercase mb-4 font-weight-bold";
  contactHeader.innerText = "Contact";
  contactHeader.style.fontWeight = "bold";

  contactDiv.appendChild(contactHeader);

  // home icon
  const home = document.createElement("p");
  home.innerText = `Cantersteen 12 1000 Bruxelles`;
  contactDiv.appendChild(home);

  // const homeIcon = document.createElement("i");
  // homeIcon.className = "fas fa-home mr-3";
  // homeIcon.innerText = `Cantersteen 12 1000 Bruxelles`;

  // home.appendChild(homeIcon);

  // mail icon
  const mail = document.createElement("p");
  mail.innerText = "contact@hackyourfuture.be ";
  contactDiv.appendChild(mail);

  // const mailIcon = document.createElement("i");
  // mailIcon.className = "fas fa-envelope mr-3";
  // mailIcon.innerText = "contact@hackyourfuture.be ";

  // mail.appendChild(mailIcon);

  // phone icon
  const phone = document.createElement("p");
  phone.innerText = "0490444555";
  contactDiv.appendChild(phone);

  // const phoneIcon = document.createElement("i");
  // phoneIcon.className = "fas fa-phone mr-3";
  // // phoneIcon.innerText = "0493075254";

  // phone.appendChild(phoneIcon);

 


  // Copyright and social media
  const divInfo = document.createElement("div");
  divInfo.className = "row d-flex align-items-center";

  container.appendChild(divInfo);

   // Social media colon

   const socialMedia = document.createElement("div");
   socialMedia.className = "col-12";
  //  socialMedia.style.justifyContent="center";
   divInfo.appendChild(socialMedia);
 
   const gitHubImg = document.createElement("img");
   gitHubImg.src = githubicon;

   gitHubImg.style.display="block";
   gitHubImg.style.margin="auto auto";


   socialMedia.appendChild(gitHubImg);

  //  const gitHubLink = document.createElement()



  return containerFooter;
};
