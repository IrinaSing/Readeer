// import { homepage } from "./presentation/components/home-page.component.js";
// import { state } from "./data-access/state/state.js";
// import { loginPage } from "./presentation/components/loginPage.js";

async const startApplication = () => {
  const root = document.getElementById('root');
  root.innerHTML = '';
  // loginPage();
  // state.username = prompt("Please enter your username");
  // const password = prompt("Please enter your password");
  const res = await homePage();
  root.append(res);
}
startApplication();
