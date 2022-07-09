import './style.css';
import addDropDown from './modules/dropdown';
import addMobileMenu from './modules/mobilemenu';
import addImageSlider from './modules/imageslider';

// Entry point
const app = document.querySelector('#app');

// Add nav-bar-like list
const navItems = ['Products', 'Contacts', 'Funzies'];

const navBar = document.createElement('ul');
navBar.classList.toggle('nav-bar');

navItems.forEach((navItemName) => {
  const navItem = document.createElement('li');
  navItem.classList.toggle('nav-item');
  navItem.textContent = navItemName;

  // Add dropdown functionality
  addDropDown(navItem, ['Hello', 'World']);

  navBar.appendChild(navItem);
});

app.appendChild(navBar);

// Add mobile menu
addMobileMenu(app, navItems);

addImageSlider(app);
