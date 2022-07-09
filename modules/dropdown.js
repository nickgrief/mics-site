export default function addDropDown(
  /** Style classes: 'drop-down-menu' and 'drop-down-item' */
  parent = document.querySelector('body'),
  items = ['']
) {
  // Create menu element
  const dropDownMenu = document.createElement('div');
  dropDownMenu.classList.toggle('drop-down-menu');
  dropDownMenu.style.position = 'absolute';

  items.forEach((item) => {
    const dropDownItem = document.createElement('div');
    dropDownItem.classList.toggle('drop-down-item');
    dropDownItem.textContent = item;
    dropDownItem.style.display = 'none';

    parent.addEventListener('mouseenter', () => {
      dropDownItem.style.display = 'block';
    });

    parent.addEventListener('mouseleave', () => {
      dropDownItem.style.display = 'none';
    });

    dropDownMenu.appendChild(dropDownItem);
  });

  parent.appendChild(dropDownMenu);
}
