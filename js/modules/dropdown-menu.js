import outsideClick from './outside-click.js';
// DropDown
export default function initDropDownMenu() {
  const dropdownMenus = document.querySelectorAll('[data-dropdown]');

  function showMenu(event) {
    event.preventDefault();
    this.classList.toggle('ativo');
    outsideClick(this, ['touchstart', 'click'], () => {
      this.classList.remove('ativo');
    });
  }

  dropdownMenus.forEach((menu) => {
    ['touchstart', 'click'].forEach((userEvent) => {
      menu.addEventListener(userEvent, showMenu);
    });
  });
}
