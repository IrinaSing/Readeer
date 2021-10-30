export const goalsContent = () => {
  const goalSection = document.createElement("div");
  goalSection.classList = "container";

  const goalContainer = document.createElement("div");
  goalContainer.classList =
    " d-flex flex-column justify-content-center align-items-center ";

  // const goalContainer = document.createElement("div");
  // goalContainer.classList = "row d-flex align-items-center";
  // const goals = document.createElement("div");
  // goals.classList = "col";

  const title = document.createElement("h1");
  title.classList = "h1";
  const content = document.createElement("p");
  content.classList = "p_text";
  title.innerText = "Goals of the project";
  content.innerText =
    "Readeer promotes reading and exchange of children’s books and can be used both by parents and children.";

  goalSection.appendChild(goalContainer);
  // goalContainer.appendChild(goals);
  goalContainer.appendChild(title);
  goalContainer.appendChild(content);

  const goalRow = document.createElement("div");
  goalRow.classList =
    "d-flex flex-row bd-highlight mb-2 justify-content-between align-items-center";
  const goalSocial = document.createElement("div");
  goalSocial.classList = "p-2 bd-highlight";

  const titleSocial = document.createElement("h2");
  titleSocial.classList = "h2";
  titleSocial.innerText = "Social benefits";

  const contentSocial = document.createElement("p");
  contentSocial.classList = "p_text";
  contentSocial.innerText =
    "We think that using a book swap app is a nice way to involve children into sharing and exchanging activity as a part of socialization. Another goal is to make books more accessible: if you came from a different country, you may not be able to buy a book in your language or to find it in a library. But our app can help you. It is quite possible that you will find new acquaintances and friends for you and your child in your neighbourhood.";

  goalContainer.appendChild(goalRow);
  goalRow.appendChild(goalSocial);
  goalSocial.appendChild(titleSocial);
  goalSocial.appendChild(contentSocial);

  const goalMoney = document.createElement("div");
  goalMoney.classList = "p-2 bd-highlight";

  const titleMoney = document.createElement("h2");
  titleMoney.classList = "h2";
  titleMoney.innerText = "Saving money";
  const contentMoney = document.createElement("p");
  contentMoney.classList = "p_text";
  contentMoney.innerText =
    "Books are getting more expensive, so exchange is a way to cooperate and help each other to save money. Instead of standing in the bookcase for years after reading, a book can bring joy to other children.";

  // // goalContainer.appendChild(goalRow);

  goalRow.appendChild(goalMoney);
  goalMoney.appendChild(titleMoney);
  goalMoney.appendChild(contentMoney);

  // const goalRowEnv = document.createElement("div");
  // goalRowEnv.classList = "row";
  const goalEnviroment = document.createElement("div");
  goalEnviroment.classList =
    "d-flex flex-column justify-content-end align-items-end";

  const titleEnv = document.createElement("h2");
  titleEnv.classList = "h2";
  titleEnv.innerText = "Care for the environment";

  const contentEnv = document.createElement("p");
  contentEnv.classList = "p_text";
  contentEnv.innerText =
    "As you know, printing books requires cutting trees, which is not good for nature and climate. But also, books are completely reusable. Thus, book sharing is an ecological way to live.";

  goalContainer.appendChild(goalEnviroment);
  goalEnviroment.appendChild(titleEnv);
  goalEnviroment.appendChild(contentEnv);

  return goalSection;
};
