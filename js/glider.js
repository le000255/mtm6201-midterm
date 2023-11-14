// setupt Glider
new Glider(document.querySelector('.glider'), {
  slidesToShow: 1,
  dots: '.dots',
  draggable: false,
  arrows: {
    prev: '.glider-prev',
    next: '.glider-next'
  }
});