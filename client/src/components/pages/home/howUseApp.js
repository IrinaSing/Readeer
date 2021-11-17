/* eslint-disable filenames/match-regex */
export const howUseApp = () => {
  const useAppContainer = document.createElement("div");
  useAppContainer.classList = "container my-5";
  useAppContainer.style.backgroundColor = "#FBF9F9";

  const titleRow = document.createElement("div");
  titleRow.classList = "row";
  useAppContainer.appendChild(titleRow);

  const title = document.createElement("h1");
  title.classList = "h1 mt-4 mb-3";
  title.style.color = "#1E78C7";
  title.innerText = "How to use the app?";

  titleRow.appendChild(title);

  // sub sections

  const subSections = document.createElement("div");
  subSections.classList = "row";
  useAppContainer.appendChild(subSections);

  // sub section 1

  const subSection1 = document.createElement("div");
  subSection1.classList = "col-md-6 px-5";
  subSections.appendChild(subSection1);

  const contentColumn1 = document.createElement("p");
  contentColumn1.classList = "p_text lh-base my-5";
  contentColumn1.innerText = ` To use the app you have to create an account.
    
  Add books that you want to exchange to your profile. 
  
  Search for interesting books in your neighborhood.`;

  subSection1.appendChild(contentColumn1);

  // sub section 2

  const subSection2 = document.createElement("div");
  subSection2.classList = "col-md-6 px-5";
  subSections.appendChild(subSection2);

  const contentColumn2 = document.createElement("p");
  contentColumn2.classList = "p_text lh-base my-5";
  contentColumn2.innerText = `Did you find something interesting? Offer a swap to the owner of the book or request to take it away!. 
    
  Contact the book owner to set up the swap meeting somewhere in the neighborhood.`;

  subSection2.appendChild(contentColumn2);

  return useAppContainer;
};
