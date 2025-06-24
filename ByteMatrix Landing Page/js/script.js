AOS.init();

const swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: {
    delay: 4000
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
