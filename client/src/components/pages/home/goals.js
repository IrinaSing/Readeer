import socialBenefits from "../../../../public/icons/social-bg.png";
import logoCoins from "../../../../public/icons/economy-bg.png";
import natureCareImg from "../../../../public/icons/nature-care-bg.png";

export const goalsContent = () => {
  const goalSection = document.createElement("div");
  goalSection.classList = "container-fluid home-goals";

  const goalSectionContainer = document.createElement("div");
  goalSectionContainer.classList = "container";
  goalSection.appendChild(goalSectionContainer);

  const titleRow = document.createElement("div");
  titleRow.classList = "row";
  goalSectionContainer.appendChild(titleRow);

  const title = document.createElement("h1");
  title.classList = "h1 mt-4 mb-3";
  const content = document.createElement("p");
  content.classList = "p_text mt-3 mb-4 lh-base";
  title.innerText = "Goals of the project";
  content.innerText =
    "Readeer promotes reading and exchange of children’s books and can be used both by parents and children.";

  titleRow.appendChild(title);
  titleRow.appendChild(content);

  // Each sub section
  const subSections = document.createElement("div");
  subSections.classList = "row";
  goalSectionContainer.appendChild(subSections);

  // sub section 1
  const subSection1 = document.createElement("div");
  subSection1.classList = "col-md-6 px-5";
  subSections.appendChild(subSection1);

  const headerSubsection1Row = document.createElement("div");
  headerSubsection1Row.classList = "d-flex justify-content-start";
  subSection1.appendChild(headerSubsection1Row);

  const socialImg = document.createElement("img");
  socialImg.src = socialBenefits;
  socialImg.style.width = "50%";

  const imgcol1 = document.createElement("div");
  imgcol1.classList = "w-10 my-auto";
  imgcol1.appendChild(socialImg);
  headerSubsection1Row.appendChild(imgcol1);

  const titleSocial = document.createElement("h2");
  titleSocial.classList = "my-3";
  titleSocial.innerText = "Social benefits";

  const socialTitleCol = document.createElement("div");
  socialTitleCol.appendChild(titleSocial);
  headerSubsection1Row.appendChild(socialTitleCol);

  const contentSocial = document.createElement("p");
  contentSocial.classList = "p_text lh-base my-3";
  contentSocial.innerText = `We think that using a book swap app is a nice way to involve children into sharing and exchanging activity as a part of socialization. 
    
  Another goal is to make books more accessible: if you came from a different country, you may not be able to buy a book in your language or to find it in a library. But our app can help you. 
    
  It is quite possible that you will find new acquaintances and friends for you and your child in your neighbourhood.`;

  const socialContentCol = document.createElement("div");
  socialContentCol.classList = "col-md-12";
  socialContentCol.appendChild(contentSocial);
  subSection1.appendChild(socialContentCol);

  // col for section 2 and 3
  const subSections23 = document.createElement("div");
  subSections23.classList = "col-md-6 px-5";
  subSections.appendChild(subSections23);

  // sub section 2
  const subSection2 = document.createElement("div");
  subSections23.appendChild(subSection2);

  const headerSubsection2Row = document.createElement("div");
  headerSubsection2Row.classList = "d-flex justify-content-start";
  subSection2.appendChild(headerSubsection2Row);

  const moneyImg = document.createElement("img");
  moneyImg.src = logoCoins;
  moneyImg.style.width = "50%";

  const imgcol2 = document.createElement("div");
  imgcol2.classList = "w-10 my-auto";
  imgcol2.appendChild(moneyImg);
  headerSubsection2Row.appendChild(imgcol2);

  const titleMoney = document.createElement("h2");
  titleMoney.classList = "my-3";
  titleMoney.innerText = "Saving money";

  const moneyTitleCol = document.createElement("div");
  moneyTitleCol.appendChild(titleMoney);
  headerSubsection2Row.appendChild(moneyTitleCol);

  const contentMoney = document.createElement("p");
  contentMoney.classList = "p_text lh-base my-3";
  contentMoney.innerText =
    "Books are getting more expensive, so exchange is a way to cooperate and help each other to save money. Instead of standing in the bookcase for years after reading, a book can bring joy to other children.";

  const contentMoneyCol = document.createElement("div");
  contentMoneyCol.classList = "col-md-12";
  contentMoneyCol.appendChild(contentMoney);
  subSection2.appendChild(contentMoneyCol);

  //sub section 3
  const subSection3 = document.createElement("div");
  subSections23.appendChild(subSection3);

  const headerSubsection3Row = document.createElement("div");
  headerSubsection3Row.classList = "d-flex justify-content-start";
  subSection3.appendChild(headerSubsection3Row);

  const natureImg = document.createElement("img");
  natureImg.src = natureCareImg;
  natureImg.style.width = "50%";

  const imgcol3 = document.createElement("div");
  imgcol3.classList = "w-10 my-auto";
  imgcol3.appendChild(natureImg);
  headerSubsection3Row.appendChild(imgcol3);

  const titleEnv = document.createElement("h2");
  titleEnv.classList = "my-3";
  titleEnv.innerText = "Care for planet";

  const envTitleCol = document.createElement("div");
  envTitleCol.appendChild(titleEnv);
  headerSubsection3Row.appendChild(envTitleCol);

  const contentEnv = document.createElement("p");
  contentEnv.classList = "p_text lh-base my-3";
  contentEnv.innerText =
    "As you know, printing books requires cutting trees, which is not good for nature and climate. But also, books are completely reusable. Thus, book sharing is an ecological way to live.";

  const envContentCol = document.createElement("div");
  envContentCol.classList = "col-md-12";
  envContentCol.appendChild(contentEnv);
  subSection3.appendChild(envContentCol);

  return goalSection;
};
