var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
let modal = document.querySelector('.modal');
let buttonCard = document.querySelectorAll('.button--card');

let showAll = document.querySelector('.show-all');
let buttonShowAll = document.querySelector('.button--more-products');
let catalog = document.querySelector('.catalog');
let buttonRollUp = document.querySelector('.roll-up');
let card = document.querySelectorAll('.card-product');
let moreProducts = document.querySelector('.more-products');
let radioButtons = document.querySelectorAll('.form__label--radio');
let checkButtons = document.querySelectorAll('.form__label--additional')

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


function range() {
  var sliderItem = document.querySelectorAll(".slider__item");
  for (let i = 0; i < sliderItem.length; i++) {
    if (sliderItem[i].classList.contains("slider__item--active")) {
      sliderItem[i].classList.remove("slider__item--active");
      sliderItem[i].classList.add("slider__item--hidden");
    } else {
      sliderItem[i].classList.add("slider__item--active");
      sliderItem[i].classList.remove("slider__item--hidden");
    }
  }
}

for (let j = 0; j < buttonCard.length; j++) {
  if (buttonCard[j].classList.contains('more-products__button')) {} else {
    buttonCard[j].addEventListener('click', function () {
      buttonCard[j].removeAttribute("href");
      openModal();
    })
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
buttonShowAll.addEventListener('click', function () {
  showAll.removeAttribute("href");
  catalog.classList.add('additional-padding-bottom');
  for (let m = 0; m < card.length; m++) {
    if (card[m].classList.contains('visually-hidden')) {
      card[m].classList.remove('visually-hidden');
    }

  }
  moreProducts.classList.add('visually-hidden');
  buttonRollUp.classList.remove('display-none');
})

buttonRollUp.addEventListener('click', function () {
  for (let p = 7; p < card.length; p++) {
    if (card[p].classList.contains('card-product--mini')) {

    } else {
      card[p].classList.add('visually-hidden');

    }
  }
  moreProducts.classList.remove('visually-hidden');
  buttonRollUp.classList.add('display-none');
  catalog.classList.remove('additional-padding-bottom');
})
