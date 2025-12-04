$(function () {
    "use strict";

    // Navbar Sticky
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            $(".stick").addClass("sticky");
        } else {
            $(".stick").removeClass("sticky");
        }
    });

    // Scroll Navbar
    $('body').scrollspy({
        target: ".navbar",
        offset: 75
    });
    
    $("#navbarSupported a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1500, function () {
                window.location.hash = hash;
            });
        }
    });

    // Hamburger Function
    $(".hamburger").click(function () {
        $(this).toggleClass("nav-open");
    });

    // Off Canvas Navigation JS
    $('[data-toggle="offcanvas"], #navToggle').on('click', function () {
        $('.offcanvas-collapse').toggleClass('open')
    });

});