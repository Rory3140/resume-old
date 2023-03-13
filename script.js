console.log('script.js Linked');

var skillsElement = document.getElementById('home-link');
skillsElement.onclick = function () { scrollAbove('title') };

var skillsElement = document.getElementById('skills-link');
skillsElement.onclick = function () { scrollAbove('skills') };

var skillsElement = document.getElementById('education-link');
skillsElement.onclick = function () { scrollAbove('education') };

var skillsElement = document.getElementById('work-experience-link');
skillsElement.onclick = function () { scrollAbove('work-experience') };

var skillsElement = document.getElementById('about-link');
skillsElement.onclick = function () { scrollAbove('about') };

var skillsElement = document.getElementsByClassName('contact-link');
for (let i = 0; i < skillsElement.length; i++) {
  skillsElement[i].onclick = function () { scrollAbove('contact') };
}

// Scroll on link click
function scrollAbove(id) {
  let margin = 49;
  var element = document.getElementById(id);
  let dims = element.getBoundingClientRect();
  window.scrollTo(window.scrollX, dims.top + window.scrollY - margin);
}

var navbar = document.querySelector('#navbar');
var navDim = navbar.offsetTop;

window.onscroll = function () {
  // Sticky navbar
  if (window.pageYOffset >= navDim) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
};



