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

  $('.modal').modal({
    opacity: .5,
    preventScrolling: false
  });
});

// document.addEventListener('DOMContentLoaded', function() {
//   var elems = document.querySelectorAll('.modal');
//   var instances = M.Modal.init(elems, options);
// });

// MODAL
$(document).ready(function(){
  $('#modal1').modal();
  $('#modal1').modal('open'); 
  setTimeout(function(){ 
      instance.close();
    }, 3000);
});

// var instanceModal = M.Modal.getInstance(elem);
// setTimeout(function(){ 
//   instanceModal.open();
//   instance.close();
//   instance.destroy();
// }, 3000);


// When the user scrolls the page, execute myFunction 
window.onscroll = function () { myFunction() };

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



// HIDE PRE-LOADER AFTER SOME TIME
$('.progress').delay(15000).queue(function () {
  $(this).addClass("hideMe");
});