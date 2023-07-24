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