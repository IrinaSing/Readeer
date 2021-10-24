export const goalsContent = () => {
  const goalSection = document.createElement("div");
  goalSection.className = "goals-section";

  const goalContainer = document.createElement("div");
  goalContainer.className = "goals-container";

  const goals = document.createElement("div");
  const title = document.createElement("h1");
  const content = document.createElement("p");
  title.innerText = "Goals of the project";
  content.innerText =
    "Readeer promotes reading and exchange of children’s books and can be used both by parents and children.";

  goalSection.appendChild(goalContainer);
  goalContainer.appendChild(goals);
  goals.appendChild(title);
  goals.appendChild(content);

  const goalSocial = document.createElement("div");
  goalSocial.className = "goals-social";

  const titleSocial = document.createElement("h1");
  titleSocial.innerText = "Goals of the project";

  const contentSocial = document.createElement("p");
  contentSocial.innerText = "blabla";

  goalContainer.appendChild(goalSocial);
  goalSocial.appendChild(titleSocial);
  goalSocial.appendChild(contentSocial);

  const goalMoney = document.createElement("div");
  goalMoney.className = "goals-money";

  const titleMoney = document.createElement("h1");
  titleMoney.innerText = "MONEY";
  const contentMoney = document.createElement("p");
  contentMoney.innerText = "blabla";

  goalContainer.appendChild(goalMoney);
  goalMoney.appendChild(titleMoney);
  goalMoney.appendChild(contentMoney);

  const goalEnviroment = document.createElement("div");
  goalEnviroment.className = "goals-enviroment";

  const titleEnv = document.createElement("h1");
  titleEnv.innerText = "ENVIROMENT";

  const contentEnv = document.createElement("p");
  contentEnv.innerText = "blabla";

  goalContainer.appendChild(goalEnviroment);
  goalEnviroment.appendChild(titleEnv);
  goalEnviroment.appendChild(contentEnv);

  return goalSection;
};
