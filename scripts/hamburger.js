$(document).ready(function() {
    if (window.matchMedia('(max-width: 700px)').matches) {
        $('#desktop-nav').addClass('hidden');
        $('#mobile-header').removeClass('hidden');
    } else {
        $('#mobile-header').addClass('hidden');
        $('#desktop-nav').removeClass('hidden');
    }
});

$(window).on('resize', function() {
    if (window.matchMedia('(max-width: 700px)').matches) {
        $('#desktop-nav').addClass('hidden');
        $('#mobile-header').removeClass('hidden');
    } else {
        $('#mobile-header').addClass('hidden');
        $('#desktop-nav').removeClass('hidden');

    }
});

$("#hamburger").on('click', function() {
    if ($('#nav-menu').hasClass('hidden')) {
        $('#nav-menu').removeClass('hidden');
    } else {
        $('#nav-menu').addClass('hidden');
    }
});
