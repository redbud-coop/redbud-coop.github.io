const SLIDES = $('div.carousel > picture');

function nextSlide() {
  let nextNum = SLIDES.index($('div.carousel > picture:not(.hidden)')) + 1 + 1; /* +1 for 0-index array */
  if (nextNum > SLIDES.length) {
    nextNum = 1;
  }
  showSlide(nextNum);
}

function prevSlide() {
  let prevNum = SLIDES.index($('div.carousel > picture:not(.hidden)')) - 1 + 1;
  if (prevNum <= 0) {
    prevNum = SLIDES.length;
  }
  showSlide(prevNum);
}

function showSlide(num) {
  let index = num - 1;
  let currentSlide = SLIDES.eq(index);

  SLIDES.addClass('hidden');
  currentSlide.removeClass('hidden');
}

$('#carousel-back').on('click', function() {
    prevSlide();
});

$('#carousel-fwd').on('click', function() {
    nextSlide();
});

setInterval(function() {
    nextSlide();
}, 10000);
