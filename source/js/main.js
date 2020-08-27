var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
let modal = document.querySelector('.modal');
    let buttonCard = document.querySelectorAll('.button--card');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});
for (let i = 0; i < buttonCard.length; i++) {
  buttonCard[i].addEventListener('click', function () {
    openModal();
  })
}

function range() {
  var sliderItem = document.querySelectorAll(".slider__item");
  for (var i = 0; i < sliderItem.length; i++) {
    if (sliderItem[i].classList.contains("slider-item--active")) {
      sliderItem[i].classList.remove("slider-item--active");
      sliderItem[i].classList.add("slider-item--hidden");
    } else {
      sliderItem[i].classList.add("slider-item--active");
      sliderItem[i].classList.remove("slider-item--hidden");
    }
  }
}

function openModal(n) {
  modal.classList.remove('display-none');
}

function closeModal(n) {
  modal.classList.add('display-none');
}

document.addEventListener("keydown", function (evt) {
  if (evt.code == "Escape") {
    closeModal();
  }
});
