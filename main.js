$( document ).ready(function() {
	$(".home-left h1").animate({
		width: "100%"
	}, {
		duration: 2500,
		easing: 'easeInOutQuint'
	});
});


$(".award").click(function () {
	"use strict";
	
	$(this).siblings(".award").stop(true).animate({ opacity: 0 }, 500);
    $(this).siblings(".award").css('visibility', 'hidden');
    $(this).children(".award-description").slideDown(500);
});

var awardsPics = [
    "url(assets/img/award-nhms.jpg)",
    "url(assets/img/award-ryla.jpg)",
    "url(assets/img/award-physics.jpg)",
    "url(assets/img/award-outstand.jpg)",
    "url(assets/img/award-exploravision.jpg)",
    "url(assets/img/award-scouts.jpg)",
    "url(assets/img/award-tsa.jpg)"
];

$(function () {
	"use strict";
	
	$(".award").hover(function () {
        var awardValue = this.getAttribute("data-id");
        $('.award-background').css('background-image', awardsPics[awardValue]);
        $('.award-background').stop(true).animate({ opacity: 1 }, 500);
        $('.award-background').animate({borderWidth: "50px"}, {
            duration: 100,
            queue: false,
            complete: function () { /* Animation complete */ }
        });
    }, function () {
        $('.award-background').stop(true).animate({ opacity: 0 }, 500);
        $('.award-background').animate({borderWidth: "0px"}, {
            duration: 100,
            queue: false,
            complete: function () { /* Animation complete */ }
        });
    });
});


$(".award").click(function () {
	"use strict";
	
	var awardValue = this.getAttribute("data-id");
    $('.award-background').css('background-image', awardsPics[awardValue]);
    $('.award-background').stop(true).animate({ opacity: 1 }, 500);
    $('.award-background').delay(500).addClass("award-active");
    $('.award-background').animate({borderWidth: "0px"}, {
        duration: 100,
        queue: false,
        complete: function () { /* Animation complete */ }
    });
    $('.award-background').css('background-size', '115%');
    $('.award h2').addClass("award-click");
});

$(document).mouseup(function (event) {
	"use strict";
	
	var target = $("#nav");
    if (!target.is(event.target) && !$("#nav").is(event.target) && target.is(":visible")) {
        $(".award").removeClass("collapse");
        $('.award-background').removeClass("award-active");
        $(".award").stop(true).animate({ opacity: 1 }, 500);
        $(".award").css('visibility', 'visible');
        $(".award-description").slideUp(500);
        $('.award-background').animate({borderWidth: "50px"}, {
            duration: 100,
            queue: false,
            complete: function () { /* Animation complete */ }
        });
        $('.award-background').css('background-size', '100%');
        $('.award h2').removeClass("award-click");
    } else {
        return false;
    }
});


//Scroll transition when click on link
$(document).ready(function () {
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
});


/*
    Hamburger transition tutorial
    By Nick
    http://callmenick.com/2015/01/25/animating-css-only-hamburger-menu-icons/
*/
$(document).ready(function () {
	"use strict";
    (function () {
		
		var toggles = document.querySelectorAll(".c-hamburger");
		var i = toggles.length - 1;
		        
        for (i; i >= 0; i--) {
            var toggle = toggles[i];
            toggleHandler(toggle);
        }

        function toggleHandler(toggle) {
            toggle.addEventListener("click", function (e) {
                e.preventDefault();
                (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");

            });
        }
    })();
});


var inProgress = false;

$("#nav").click(function () {
    
	"use strict";
	
	var width = $(window).width() - 68;
	
    if ($(".c-hamburger").hasClass("is-active")) {
		inProgress = true;
		$('#dim-screen').fadeTo(500, 1);
        $("#nav-expand").animate({
            width: "300px"
        }, {
            duration: 1500,
            easing: 'easeInOutQuint'
        });
        $(".nav-list").animate({
            left: "0%"
        }, {
            duration: 300,
            easing: 'easeInOutQuint'
        });
        $(".c-hamburger").css({'transform' : 'rotate(180deg)'});
        $("body").css("overflow", "hidden");
    } else {
		
		$('#dim-screen').fadeTo(500, 0, function (){
			$(this).hide();
		});
        $("#nav-expand").animate({
            width: "0%"
        }, {
            duration: 1500,
            easing: 'easeInOutQuint'
        });
        $(".nav-list").animate({
            left: "-100%"
        }, {
            duration: 400,
            easing: 'easeInOutQuint'
        });
        $(".c-hamburger").css({'transform' : 'rotate(0deg)'});
        $("body").css("overflow", "auto");
    }
});









