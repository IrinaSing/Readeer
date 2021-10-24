export const goalsContent = () => {
  const goalSection = document.createElement("div");
  goalSection.className = "goals-section";

  const goalContainer = document.createElement("div");
  goalContainer.className = "goals-container";

  const goalSocial = document.createElement("div");
  goalSocial.className = "goals-social";

  const titleSocial = document.createElement("h1");
  titleSocial.innerText = "SOCIAL";

  const contentSocial = document.createElement("p");
  contentSocial.innerText = "blabla";

  goalSection.appendChild(goalContainer);
  goalContainer.appendChild(goalSocial);
  goalSocial.appendChild(titleSocial);
  goalSocial.appendChild(contentSocial);

  const goalMoney = document.createElement("div");
  goalMoney.className = "goals-money";

  const titleMoney = document.createElement("h1");
  titleMoney.innerText = "MONEY";
  const contentMoney = document.createElement("p");
  contentMoney.innerText = "blabla";

  //
  goalContainer.appendChild(goalMoney);
  goalMoney.appendChild(titleMoney);
  goalMoney.appendChild(contentMoney);

  const goalEnviroment = document.createElement("div");
  goalEnviroment.className = "goals-enviroment";

  const titleEnv = document.createElement("h1");
  titleEnv.innerText = "ENVIROMENT";

  const contentEnv = document.createElement("p");
  contentEnv.innerText = "blabla";

  // goalSection.appendChild(goalContainer);
  goalContainer.appendChild(goalEnviroment);
  goalEnviroment.appendChild(titleEnv);
  goalEnviroment.appendChild(contentEnv);

  return goalSection;
};
