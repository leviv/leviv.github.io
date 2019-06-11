/* Animations and other javascript snippets for leviv.github.io
   Created by Levi Villarreal */

$(document).ready(function () {
  page_load_animations ();
  scroll_to_link ();
});

/* Animations that should happen when the page is first loaded */
function page_load_animations () {
  $(".home-left h1").animate({
    width: "100%"
  }, {
    duration: 2500,
    easing: 'easeInOutQuint'
  });
}

/* Function to scroll transition when click on link */
function scroll_to_link () {
  "use strict";

  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $('html, body').stop().animate({
      'scrollTop': $target.offset().top
    }, 900, 'swing', function () {
      window.location.hash = target;
    });
  });
}
