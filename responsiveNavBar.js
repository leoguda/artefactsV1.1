// Start - responsive nav
const navResponsive = document.querySelector(".nav-info-responsive");
const open = document.querySelector(".burger-menu-open");
const close = document.querySelector(".burger-menu-close");

function openBurgerMenu(){
  navResponsive.style.transform = 'translateX(0)';
  event.currentTarget.style.display="none";
  close.style.display="block";
}
function closeBurgerMenu(){
  navResponsive.style.transform = 'translateX(-100%)';
  event.currentTarget.style.display="none";
  open.style.display="block";
}
// End - responsive nav