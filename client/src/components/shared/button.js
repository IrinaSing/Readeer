export const button = (
  type = "button",
  innerHtml = "",
  classList = "",
  id = ""
) => {
  const returnButton = document.createElement("button");

  returnButton.type = type;
  returnButton.innerHTML = innerHtml;
  returnButton.classList = classList;
  returnButton.id = id;

  return returnButton;
};
