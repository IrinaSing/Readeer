export const goalsContent = () => {
  const goalSection = document.createElement("section");
  goalSection.className = "goals-section";

  const goalContainer = document.createElement("div");
  goalContainer.className = "goals-container";

  const goals = document.createElement("div");
  goals.className = "goals";
  const title = document.createElement("h1");
  const content = document.createElement("p");
  content.className = "p_text";
  title.innerText = "Goals of the project";
  content.innerText =
    "Readeer promotes reading and exchange of children’s books and can be used both by parents and children.";

  goalSection.appendChild(goalContainer);
  goalContainer.appendChild(goals);
  goals.appendChild(title);
  goals.appendChild(content);

  const goalSocial = document.createElement("div");
  goalSocial.className = "column";

  const titleSocial = document.createElement("h2");
  titleSocial.className = "title_h2";
  titleSocial.innerText = "Social benefits";

  const contentSocial = document.createElement("p");
  contentSocial.className = "p_text";
  contentSocial.innerText =
    "We think that using a book swap app is a nice way to involve children into sharing and exchanging activity as a part of socialization. Another goal is to make books more accessible: if you came from a different country, you may not be able to buy a book in your language or to find it in a library. But our app can help you. It is quite possible that you will find new acquaintances and friends for you and your child in your neighbourhood.";

  goalContainer.appendChild(goalSocial);
  goalSocial.appendChild(titleSocial);
  goalSocial.appendChild(contentSocial);

  const goalMoney = document.createElement("div");
  goalMoney.className = "column";

  const titleMoney = document.createElement("h2");
  titleMoney.className = "title_h2";
  titleMoney.innerText = "Saving money";
  const contentMoney = document.createElement("p");
  contentMoney.className = "p_text";
  contentMoney.innerText =
    "Books are getting more expensive, so exchange is a way to cooperate and help each other to save money. Instead of standing in the bookcase for years after reading, a book can bring joy to other children.";

  goalContainer.appendChild(goalMoney);
  goalMoney.appendChild(titleMoney);
  goalMoney.appendChild(contentMoney);

  const goalEnviroment = document.createElement("div");
  goalEnviroment.className = "column";

  const titleEnv = document.createElement("h2");
  titleEnv.className = "title_h2";
  titleEnv.innerText = "Care for the environment";

  const contentEnv = document.createElement("p");
  contentEnv.className = "p_text";
  contentEnv.innerText =
    "As you know, printing books requires cutting trees, which is not good for nature and climate. But also, books are completely reusable. Thus, book sharing is an ecological way to live.";

  goalContainer.appendChild(goalEnviroment);
  goalEnviroment.appendChild(titleEnv);
  goalEnviroment.appendChild(contentEnv);

  return goalSection;
};
