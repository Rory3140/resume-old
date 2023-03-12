console.log("script.js Linked");

// Scroll on link click
function scrollAbove(id, margin = 49) {
  var element = document.querySelector(id);
  let dims = element.getBoundingClientRect();
  window.scrollTo(window.scrollX, dims.top + window.scrollY - margin);
}

var navbar = document.querySelector('#navbar');
//var titlePage = document.querySelector('#title');
var navDim = navbar.offsetTop;
//var titleDim = titlePage.offsetHeight - navbar.offsetHeight;

window.onscroll = function () {
  // Sticky navbar
  if (window.pageYOffset >= navDim) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }

  // if (window.pageYOffset >= titleDim) {
  //   console.log("test");
  // }
};



