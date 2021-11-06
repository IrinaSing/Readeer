export const errorAlert = (message) => {
  const resultMessageDiv = document.createElement("DIV");
  resultMessageDiv.id = "resultMessageDiv";
  resultMessageDiv.innerHTML = message;
  resultMessageDiv.style.display = "block";
  resultMessageDiv.classList = "alert alert-danger";

  return resultMessageDiv;
};
