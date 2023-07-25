function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "იხილეთ მეტი"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "დაბრუნდით უკან"; 
      moreText.style.display = "inline";
    }
}


// authorize popup 
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBaton");
var btn1 = document.getElementById("myBtnResponsive");
var closeBtn = document.getElementsByClassName("close")[0];
 

btn.addEventListener("click", function() {
  modal.style.display = "block";
});
btn1.addEventListener("click", function() {
  modal.style.display = "block";
});
                                

closeBtn.addEventListener("click", function() {
modal.style.display = "none";
});
                                

window.addEventListener("click", function(event) {
if (event.target == modal) {
modal.style.display = "none";
}
});


const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});

// accordion


const sectionHeaders = document.querySelectorAll(".section-header");
  const sectionContents = document.querySelectorAll(".section-content");

  // Function to toggle the visibility of section content
  function toggleSectionContent(index) {
    sectionContents.forEach((content, i) => {
      if (i === index) {
        content.classList.toggle("show");
      } else {
        content.classList.remove("show");
      }
    });
  }

  // Add click event listeners to section headers
  sectionHeaders.forEach((header, index) => {
    header.addEventListener("click", () => {
      toggleSectionContent(index);
    });
  });

  // By default, hide all section contents except the first one
  toggleSectionContent(0);




  

const items = document.querySelectorAll('.accordion button');
  function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');
    for (i = 0; i < items.length; i++) {
      items[i].setAttribute('aria-expanded', 'false');
    }
    if (itemToggle == 'false') {
      this.setAttribute('aria-expanded', 'true');
    }
  }
items.forEach((item) => item.addEventListener('click', toggleAccordion));




const showContentLink = document.getElementById('showContentLink');
const hiddenContent = document.getElementById('hiddenContent');

showContentLink.onclick = function () {
  hiddenContent.classList.toggle('visible');
  return false; // Prevent the link from causing a page refresh
};