/**** Initiate Menu button and  Menu wrapper *****/
const menuWrapper = document.getElementById("menu-wrapper");
const menuButton = document.getElementById("menu-btn");

/****Variable to track state of menu,
 *           initial state of Menu is closed *****/
let isMenuOpen = false;

/**** Toggle logic  *****/
toggleMenu = () => {
  isMenuOpen = !isMenuOpen;
  menuWrapper.classList.toggle("open");
};

/**** Event triggered by click on Menu button  *****/
if (menuButton) {
  menuButton.addEventListener("click", toggleMenu);
}
