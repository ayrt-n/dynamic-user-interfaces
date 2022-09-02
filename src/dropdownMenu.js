const dropdownMenus = document.getElementsByClassName('dd-menu');
const dropdownNodes = [...dropdownMenus];

// Toggle visibility of dropdown menu
const toggleDropdown = (event) => {
  // Toggle dropdown menu selected
  const dropdownMenuTarget = event.target.closest('.dd-menu');
  dropdownMenuTarget.classList.toggle('visible');

  // Close any other dropdown menus opened
  dropdownNodes.forEach((node) => {
    if (!(node === dropdownMenuTarget)) {
      node.classList.remove('visible');
    }
  });
};

// If clicking outside of dropdown menu, close all open menus
window.addEventListener('click', (e) => {
  const dropdownCheck = e.target.closest('.dd-menu');
  if (!dropdownCheck) {
    dropdownNodes.forEach((node) => { node.classList.remove('visible'); });
  }
});

dropdownNodes.forEach((menu) => {
  menu.addEventListener('click', toggleDropdown);
});
