$( window ).resize(function() {
    $window = $(window);
    if( $window .width() > 767){

        $('section[data-type="background"]').each(function(){
            var $bgobj = $(this); // assigning the object

            $(window).scroll(function() {

                // Scroll the background at var speed
                // the yPos is a negative value because we're scrolling it UP!                              
                var yPos = -( ($window.scrollTop() - $bgobj.offset().top) / $bgobj.data('speed'));

                // Put together our final background position
                var coords = '50% '+ yPos + 'px';

                // Move the background
                $bgobj.css({ backgroundPosition: coords });

            }); // window scroll Ends

        });    
    }
});



$(document).ready(function(){
    $window = $(window);
    if( $window.width() > 767){
        // Cache the Window object

        $('section[data-type="background"]').each(function(){
            var $bgobj = $(this); // assigning the object

            $(window).scroll(function() {

                // Scroll the background at var speed
                // the yPos is a negative value because we're scrolling it UP!                              
                var yPos = -( ($window.scrollTop() - $bgobj.offset().top) / $bgobj.data('speed'));

                // Put together our final background position
                var coords = '50% '+ yPos + 'px';

                // Move the background
                $bgobj.css({ backgroundPosition: coords });

            }); // window scroll Ends

        });    
    }
});


// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 40) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");       
        $(".nav-brand").addClass("logo-shrink");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

/* ===============================
    http://callmenick.com/2015/01/25/animating-css-only-hamburger-menu-icons/
=============================== */
(function() {

    "use strict";

    var toggles = document.querySelectorAll(".cmn-toggle-switch");

    for (var i = toggles.length - 1; i >= 0; i--) {
        var toggle = toggles[i];
        toggleHandler(toggle);
    };

    function toggleHandler(toggle) {
        toggle.addEventListener( "click", function(e) {
            e.preventDefault();
            (this.classList.contains("active") === true) ? this.classList.remove("active") : this.classList.add("active");
        });
    }

})();

$(document).ready(function(){
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
});





/* ===============================
    Tabbable Content
    http://callmenick.com/2015/01/25/animating-css-only-hamburger-menu-icons/
=============================== */
(function () {

    "use strict";

    var toggles = document.querySelectorAll(".cmn-toggle-switch");

    for (var i = toggles.length - 1; i >= 0; i--) {
        var toggle = toggles[i];
        toggleHandler(toggle);
    };

    function toggleHandler(toggle) {
        toggle.addEventListener( "click", function(e) {
            e.preventDefault();
            (this.classList.contains("active") === true) ? this.classList.remove("active") : this.classList.add("active");
        });
    }

})();
