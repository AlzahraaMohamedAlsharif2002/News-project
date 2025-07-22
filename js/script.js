
const carousel = document.getElementById('myCarousel');
  const afterCarousel = document.querySelector('.after-carousel');

  const myCarousel = new bootstrap.Carousel(carousel);

  carousel.addEventListener('slid.bs.carousel', function (event) {
    if(event.to === 3){ // Slide index يبدأ من 0، يبقى السلايد الرابع رقم 3
      afterCarousel.style.display = 'block';
    } else {
      afterCarousel.style.display = 'none';
    }
  });