$(function () {

    'use strict';

    $('#nav').onePageNav();

    // smooth scroll
    $("a").on("click", function (event) {

        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $("html, body").animate({

                scrollTop: $(hash).offset().top - 50

            }, 350);

        }

    });

    // hide navbar on mobile after click
    // $('.navbar-nav a').on('click', function () {
    //     $('.navbar-collapse').collapse('hide');
    // });

    // navbar on scroll
    $(window).on("scroll", function () {

        var onScroll = $(this).scrollTop();

        if (onScroll > 50) {
            $(".navbar").addClass("navbar-fixed");
        }
        else {
            $(".navbar").removeClass("navbar-fixed");
        }

    });



});