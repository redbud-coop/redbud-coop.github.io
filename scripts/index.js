$(document).ready(function() {
    if (window.matchMedia('(max-width: 1200px)').matches) {
        $('#history').addClass('flex-col');
        $('#home-history').removeClass('left');
        $('#home-gallery').removeClass('right');
    }
});

$(window).on('resize', function() {
    if (window.matchMedia('(max-width: 1200px)').matches) {
        $('#history').addClass('flex-col');
        $('#home-history').removeClass('left');
        $('#home-gallery').removeClass('right');
    } else {
        $('#history').removeClass('flex-col');
        $('#home-history').addClass('left');
        $('#home-gallery').addClass('right');
    }
});
