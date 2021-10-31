const startApplication = async () => {
  const root = document.getElementById('root');
  root.innerHTML = '';

  const res = await homePage();
  root.append(res);
};
startApplication();
