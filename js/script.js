$(document).ready(function () {
  $('ul.tabs').tabs({
    swipeable: true,
    responsiveThreshold: 1920
  });
  
  $('.collapsible').collapsible();
  
  $('.scrollspy').scrollSpy({
    scrollOffset: 0
  });
  
  $('.parallax').parallax();

  // $('.pushpin').pushpin();
});


// -----------------------------------------
// PUSHPIN (qlik selection always on top)
// $('.pushpin').each(function() {
//   var $this = $(this);
//   var $target = $('#' + $(this).attr('data-target'));
//   $this.pushpin({
//     top: $target.offset().top,
//     bottom: $target.offset().top + $target.outerHeight() - $this.height()
//   });
// });


// /* ABOVE NOT WORKING */
// /* USE THIS INSTEAD */
  // /* fixedHeaderOnScroll */

// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("fixedHeaderOnScrollSelection");
// var header = document.getElementById("fixedHeaderOnScrollTest");



// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}