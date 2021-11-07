export const howUseApp = () => {
  const useAppSection = document.createElement("div");
  useAppSection.classList = "container fluid home-useapp";

  const useAppContainer = document.createElement("div");
  useAppContainer.classList = "container";
  useAppSection.appendChild(useAppContainer);

  const titleRow = document.createElement("div");
  titleRow.classList = "row";
  useAppContainer.appendChild(titleRow);

  const title = document.createElement("h1");
  title.classList = "h1 mt-4 mb-3";

  titleRow.appendChild(title);

  // sub sections

  const subSections = document.createElement("div");
  subSections.classList = "row";
  useAppContainer.appendChild(subSections);

  // sub section 1

  const subSection1 = document.createElement("div");
  subSection1.classList = "col-md-6";
  subSections.appendChild(subSection1);

  const contentColumn1 = document.createElement("p");
  contentColumn1.classList = "p_text lh-base my-5";
  contentColumn1.innerText =
    " To use the app you have to create an account. Add books that you want to exchange to your profile. Search for interesting books in your neighborhood. ";

  // sub section 2

  return useAppSection;
};
