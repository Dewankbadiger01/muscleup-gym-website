document.getElementById("contactForm").addEventListener("submit", function(e){

e.preventDefault();

alert("Message Sent Successfully!");

});
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-menu");

toggle.addEventListener("click", function(){

if(nav.style.display === "flex"){
nav.style.display = "none";
}else{
nav.style.display = "flex";
}

});