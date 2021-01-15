(function ($) {
    "use strict";
    //stycky header
    $(window).on('scroll', function () {
        if ($(window).scrollTop()) {
            $('header').addClass('neel');
        } else {
            $('header').removeClass('neel');
        }

     })


    // circle-progressbar
    var el = $('.single-progress'),
        inited = false;

    el.appear({
        force_process: true
    });

    el.on('appear', function () {
        if (!inited) {
            el.circleProgress({
                value: 0.7
            });
            inited = true;
        }
    });
    $('#uiux-progress').circleProgress({
        value: 0.73,
        size: 200,
        thickness: 8,
        startAngle: -1.7,
        lineCap: "round",
        emptyFill: "#15154c",
        fill: "#6928d9",

    }).on('circle-animation-progress', function (event, progress) {
        $(this).find('.percentage').html(Math.round(73 * progress) + '<i>%</i>');
    });

    $('#development-progress').circleProgress({
        value: 0.85,
        size: 200,
        thickness: 8,
        startAngle: -1.7,
        lineCap: "round",
        emptyFill: "#15154c",
        fill: "#1573ff",

    }).on('circle-animation-progress', function (event, progress) {
        $(this).find('.percentage').html(Math.round(85 * progress) + '<i>%</i>');
    });

    $('#branding-progress').circleProgress({
        value: 0.48,
        size: 200,
        thickness: 8,
        startAngle: -1.7,
        lineCap: "round",
        emptyFill: "#15154c",
        fill: "#16ffdb",

    }).on('circle-animation-progress', function (event, progress) {
        $(this).find('.percentage').html(Math.round(48 * progress) + '<i>%</i>');
    });

    $('#product-progress').circleProgress({
        value: 0.69,
        size: 200,
        thickness: 8,
        startAngle: -1.7,
        fill: "#16ffdb",
        emptyFill: "#15154c",
        fill: "#baff26",

    }).on('circle-animation-progress', function (event, progress) {
        $(this).find('.percentage').html(Math.round(69 * progress) + '<i>%</i>');
    });

    // sponsor slider (slick slider)
    $('.sponsor-brand').slick({
        speed: 10,
        slidesToShow: 5,
        arrows: false,
    });

     // Isotope js
     var $grid = $('.portfolio-grid').isotope({
        itemSelector: '.portfolio-item',
        percentPosition: true,
        masonry: {
            // use outer width of grid-sizer for columnWidth
            columnWidth: 1
        }
    });
    // filter items on button click
    $('.portfolio-menu').on('click', 'li', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });
    });

    // active js
    $('.portfolio-menu li, .menu a').on('click', function () {
        $('li,a').removeClass('active');
        $(this).addClass('active')
    });
    
// Fancy-box
$('[data-fancybox="gallery"]').fancybox({
    animationEffect: "zoom-in-out",
    transitionEffect: "slide",

});

// offcanvas menu
$(".humberg-icon img").on('click', function(){
    $(".offcanvas-menu").addClass("active");
    $(".offcanvas-menu-overlay").addClass("active");
  });

  $(".menu-cross, .offcanvas-menu-overlay").on('click', function(){
    $(".offcanvas-menu").removeClass("active");
    $(".offcanvas-menu-overlay").removeClass("active");
  });

// WOW Js
new WOW().init();

// typed JS
var typed = new Typed(".type", {
    strings: [
      "Designer.",
      "Developer."
    ],
    typeSpeed: 70,
    backSpeed: 70,
    loop: true,
    cursorChar: '',
  });
  // parallax JS
 var scene = document.getElementById('home-parallax');
  var parallaxInstance = new Parallax(scene);

//hover 3d
$(".about").hover3d({
	selector: ".abt-shape",
	shine: true,
	sensitivity: 20,
});
  //about 3d
  $(".about").hover3d({
    selector: ".flying-shape",
    sensitivity: 40,
  });

    //skill 3d
    $(".skill").hover3d({
        selector: ".shape-quality",
        sensitivity: 30,
      });

     //qualification 3d
    $(".qualification").hover3d({
        selector: ".qualification-square",
        sensitivity: 70,
      });

     //contact 3d
    $(".contact").hover3d({
        selector: ".shape-contact",
        sensitivity: 70,
      });

    // smooth-scroll
    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 800,
        speedAsDuration: true
    });

    

})(jQuery);