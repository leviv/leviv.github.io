
var defaultText     = "Recent"
var defaultPosition = "50%"


$('.category').click(function() {
    $(".category-display").css("display", "none");
    $(".category").removeClass("active");
});


$(".design").hover(function(){
    $(".vertical-text").text("Design");
    $(".triangle").css("top","20%");
}, function(){
    $(".vertical-text").text(defaultText);
    $(".triangle").css("top", defaultPosition);
});

$(".design").click(function(){
    defaultText = "Design";
    defaultPosition = "20%";
    $(".design-category").css("display", "block");
    $("h1.design").addClass("active");
});


$(".engineering").hover(function(){
    $(".vertical-text").text("Engineering");
    $(".triangle").css("top","40%");
}, function(){
    $(".vertical-text").text(defaultText);
    $(".triangle").css("top", defaultPosition);
});
$(".engineering").click(function(){
    defaultText = "Engineering";
    defaultPosition = "40%";
    $(".engineering-category").css("display", "block");
    $("h1.engineering").addClass("active");
});


$(".academic").hover(function(){
    $(".vertical-text").text("Academic");
    $(".triangle").css("top","60%");
}, function(){
    $(".vertical-text").text(defaultText);
    $(".triangle").css("top", defaultPosition);
});
$(".academic").click(function(){
    defaultText = "Academic";
    defaultPosition = "60%";
    $(".academic-category").css("display", "block");
    $("h1.academic").addClass("active");
});


$(".other").hover(function(){
    $(".vertical-text").text("Other");
    $(".triangle").css("top","80%");
}, function(){
    $(".vertical-text").text(defaultText);
    $(".triangle").css("top", defaultPosition);
});
$(".other").click(function(){
    defaultText = "Other";
    defaultPosition = "80%";
    $(".other-category").css("display", "block");
    $("h1.other").addClass("active");
});

$('.category').click(function() {
    $(".vertical-text").text(defaultText);
    $(".triangle").css("top", defaultPosition);
});

$(document).mouseup(function(event){
    var target = $(".category");
    if(!target.is(event.target) && !$(".award").is(event.target) && target.is(":visible")){
        defaultText = "Recent";
        defaultPosition = "50%";
        $(".vertical-text").text(defaultText);
        $(".triangle").css("top", defaultPosition);
        $(".category").removeClass("active");
        $(".category-display").css("display", "none");
        $(".default-category").css("display", "block");
    } else {
        return false;
    }
});







$(".award").click(function() {
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

$(function(){
    $(".award").hover(function(){
        var awardValue = this.getAttribute("data-id");
        $('.award-background').css('background-image', awardsPics[awardValue] );
        $('.award-background').stop(true).animate({ opacity: 1 }, 500);
        $('.award-background').animate({borderWidth: "50px"}, { 
            duration: 100,
            queue: false,
            complete: function() { /* Animation complete */ }
        });
    }, function() {
        $('.award-background').stop(true).animate({ opacity: 0 }, 500);
        $('.award-background').animate({borderWidth: "0px"}, { 
            duration: 100,
            queue: false,
            complete: function() { /* Animation complete */ }
        });
    });
});


$(".award").click(function() {
    var awardValue = this.getAttribute("data-id");
    $('.award-background').css('background-image', awardsPics[awardValue] );
    $('.award-background').stop(true).animate({ opacity: 1 }, 500);
    $('.award-background').delay(500).addClass("award-active");
    $('.award-background').animate({borderWidth: "0px"}, { 
        duration: 100,
        queue: false,
        complete: function() { /* Animation complete */ }
    });
    $('.award-background').css('background-size', '115%' );
    $('.award h2').addClass("award-click");
});

$(document).mouseup(function(event){
    var target = $("#nav");
    if(!target.is(event.target) && !$("#nav").is(event.target) && target.is(":visible")){
        $(".award").removeClass("collapse");
        $('.award-background').removeClass("award-active");
        $(".award").stop(true).animate({ opacity: 1 }, 500);
        $(".award").css('visibility', 'visible');
        $(".award-description").slideUp(500);    
        $('.award-background').animate({borderWidth: "50px"}, { 
            duration: 100,
            queue: false,
            complete: function() { /* Animation complete */ }
        });
        $('.award-background').css('background-size', '100%' );
        $('.award h2').removeClass("award-click");
    }else{
        return false;
    }
});


// Rotating  Heads

/*
This is the class for the head-image object. Per rotating head one headImage
object has to be instanciated.
By Jan Dellsperger
*/
var className;
var imageTop;
var imageLeft;
var imageBottom;
var imageRight;

function HeadImage(className){

    /* Setting the global instance of classname to the given parameter*/
    this.className = className;

    /* Calculating the borders of the image */
    this.imageLeft = $("."+this.className+">.head-image").offset().left;
    this.imageRight = this.imageLeft + $("."+this.className+">.head-image").width();
    this.imageTop = $("."+this.className+">.head-image").offset().top;
    this.imageBottom = this.imageTop + $("."+this.className+">.head-image").height();

    /* This function determines where the mouse pointer is relative to the image
     * and displays the correct image accordingly. */
    this.setImageDirection = function(){
        $("."+this.className+">.head-image").css("z-index","0");
        if(mouseX >= this.imageLeft && mouseX <= this.imageRight && mouseY <= this.imageTop){
            $("."+this.className+">.up").css("z-index","1");
        } else if(mouseX < this.imageLeft && mouseY < this.imageTop){
            $("."+this.className+">.up-left").css("z-index","1");
        } else if(mouseX <= this.imageLeft && mouseY >= this.imageTop && mouseY <= this.imageBottom){
            $("."+this.className+">.left").css("z-index","1");
        } else if(mouseX < this.imageLeft && mouseY > this.imageBottom){
            $("."+this.className+">.down-left").css("z-index","1");
        } else if(mouseX >= this.imageLeft && mouseX <= this.imageRight && mouseY >= this.imageBottom){
            $("."+this.className+">.down").css("z-index","1");
        } else if(mouseX > this.imageRight && mouseY > this.imageBottom){
            $("."+this.className+">.down-right").css("z-index","1");
        } else if(mouseX >= this.imageRight && mouseY >= this.imageTop && mouseY <= this.imageBottom){
            $("."+this.className+">.right").css("z-index","1");
        } else if(mouseX > this.imageRight && mouseY < this.imageTop){
            $("."+this.className+">.up-right").css("z-index","1");
        } else{
            $("."+this.className+">.front").css("z-index","1");
            $(".text-holder").css("display","none");
            $("."+this.className+".text-holder").css("display","block");
        }
    };
}



//Scroll transition when click on link
$(document).ready(function () {
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




function parallax(e) {
    window.webkitRequestAnimationFrame(function() {
        var offset = window.pageYOffset;
        a.style.top = (offset / 2) + "px";
        b.style.top = (offset / 2) + "px";
        textbox.style.top =- (offset * 0.7) + "px";
        textbox2.style.top =- (offset * 0.7) + "px";
    });
}

/*
    Hamburger transition tutorial
    By Nick
    http://callmenick.com/2015/01/25/animating-css-only-hamburger-menu-icons/
*/
$(document).ready(function(){

    (function() {

        "use strict";

        var toggles = document.querySelectorAll(".c-hamburger");


        for (var i = toggles.length - 1; i >= 0; i--) {
            var toggle = toggles[i];
            toggleHandler(toggle);
        };

        function toggleHandler(toggle) {
            toggle.addEventListener( "click", function(e) {
                e.preventDefault();
                (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");



            });
        }

    })();
});




$("#nav").click(function() {
    var width = $(window).width() - 68;


    if ($(".c-hamburger").hasClass("is-active")) {
        $(".c-hamburger").animate({
            right: "20px", 
        }, {
            duration: 150,
            easing: 'easeInOutQuint'
        });
        $("#nav-expand").animate({
            width: "100%"
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
        $(".c-hamburger").animate({right: width + "px"}, {
            duration: 150,
            easing: 'easeInOutQuint'
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



// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 400) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});









