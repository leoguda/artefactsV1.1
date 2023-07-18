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



// Start - IMAGE CAROUSEL SCRIPT 

const images = document.querySelectorAll(".carousel-image");
const dots = document.querySelectorAll(".dot");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

const nextSlide = () => {
  const currentSlide = document.querySelector(".current");
  currentSlide.classList.remove("current");
  if (currentSlide.nextElementSibling) {
    currentSlide.nextElementSibling.classList.add("current");
  } else {
    images[0].classList.add("current");
  }

  dotsNextSlide();
};

const prevSlide = () => {
  const currentSlide = document.querySelector(".current");
  currentSlide.classList.remove("current");
  if (currentSlide.previousElementSibling) {
    currentSlide.previousElementSibling.classList.add("current");
  } else {
    images[images.length - 1].classList.add("current");
  }

  dotsPrevSlide();
};

nextBtn.addEventListener("click", k => {
  nextSlide();
});
prevBtn.addEventListener("click", k => {
  prevSlide();
});

// =================== Dots ===========================
const dotsNextSlide = () => {
  const dotActive = document.querySelector(".active");

  dotActive.classList.remove("active");
  if (dotActive.nextElementSibling) {
    dotActive.nextElementSibling.classList.add("active");
  } else {
    dots[0].classList.add("active");
  }
  dotActive.classList.remove("active");
};

const dotsPrevSlide = () => {
  const dotActive = document.querySelector(".active");

  dotActive.classList.remove("active");
  if (dotActive.previousElementSibling) {
    dotActive.previousElementSibling.classList.add("active");
  } else {
    dots[dots.length - 1].classList.add("active");
  }
  dotActive.classList.remove("active");
};

const dotJump = () => {
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      const dotActive = document.querySelector(".active");
      dotActive.classList.remove("active");
      dot.classList.add("active");

      const imageTarget = images[index];
      const currentSlide = document.querySelector(".current");

      currentSlide.classList.remove("current");
      imageTarget.classList.add("current");
    });
  });
};
dotJump();

// End - IMAGE CAROUSEL SCRIPT 






var tablinks = document.getElementsByClassName("tab-links")
var tabitems = document.getElementsByClassName("tab-items")


function opentab(tabname) {
  for(tablink of tablinks) {
    tablink.classList.remove("active-link")
  }
  for(tabitem of tabitems) {
    tabitem.classList.remove("active-tab")
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab")
}