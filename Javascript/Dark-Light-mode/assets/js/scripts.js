function changeMode () {
  changeClasses();
  changeText();
}

function changeClasses() {
  button.classList.toggle(darkModeClass);//se existir, colocar.
  h1.classList.toggle(darkModeClass);//se existir, colocar.
  body.classList.toggle(darkModeClass);//se existir, colocar.
  footer.classList.toggle(darkModeClass);//se existir, colocar.
}

function changeText() {
  const lightMode = "Light Mode";
  const  darkMode = "Dark Mode";
  if(button.classList.contains(darkModeClass)){
    button.innerHTML = lightMode;
    h1.innerHTML = darkMode + " ON";
    return;
  }

  button.innerHTML = darkMode;
  h1.innerHTML = lightMode + ' ON';
}
const darkModeClass = 'dark-mode';
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

button.addEventListener('click', changeMode);