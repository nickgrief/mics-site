export default function addMobileMenu(
  parent = document.querySelector('body'),
  menus = ['']
) {
  const mobileMenu = document.createElement('div');
  mobileMenu.classList.toggle('mobile-menu');
  const mobileMenuButton = document.createElement('button');
  mobileMenuButton.textContent = 'MENU';
  mobileMenuButton.style.backgroundColor = 'lightgreen';
  mobileMenuButton.classList.toggle('mobile-menu-button');

  mobileMenu.appendChild(mobileMenuButton);
  mobileMenu.style.position = 'absolute';
  mobileMenu.style.bottom = '2rem';
  mobileMenu.style.right = '2rem';

  const dropUp = document.createElement('div');
  dropUp.classList.toggle('drop-up');
  dropUp.style.position = 'relative';
  dropUp.style.display = 'none';

  menus.forEach((item) => {
    const menuItem = document.createElement('div');
    menuItem.classList.toggle('menu-item');
    menuItem.textContent = item;

    dropUp.appendChild(menuItem);
  });

  mobileMenuButton.addEventListener('click', () => {
    if (dropUp.style.display === 'none') {
      dropUp.style.display = 'block';
    } else {
      dropUp.style.display = 'none';
    }
  });

  mobileMenu.prepend(dropUp);

  parent.appendChild(mobileMenu);
}
