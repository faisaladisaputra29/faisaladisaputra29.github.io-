var swiper = new Swiper('.mySwiper', {
  grabCursor: true,
  centeredSlides: false,
  slidesPerView: 'auto',
  spaceBetween: 80,
  scrollbar: {
    el: '.swiper-scrollbar',
    hide: true,
  },
  navigation: {
    nextEl: '.bxs-chevron-right-circle',
    prevEl: '.bxs-chevron-left-circle',
  },
});
const first = document.getElementById('Frame1');
const second = document.getElementById('Frame2');
const third = document.getElementById('third');
const container = document.getElementById('container');
const rect = container.getBoundingClientRect();

const animate = (element, position) => {
  element.style.transform = `translateX(${position}px)`;
};

document.addEventListener('scroll', function (e) {
  lastKnownScrollPosition = window.scrollY;

  window.requestAnimationFrame(function () {
    animate(Frame1, lastKnownScrollPosition * 0.1);
    animate(Frame2, lastKnownScrollPosition * -0.1);
    animate(third, lastKnownScrollPosition * 0.2);
  });
});
