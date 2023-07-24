// authorize popup 
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
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
