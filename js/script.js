// Открытие модального окна с картой
const mapLink = document.querySelector(".map-link");
const mapPopup = document.querySelector(".modal-form-map");
const mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", (evt) => {
  evt.preventDefault();
  mapPopup.classList.add("active")
})

mapClose.addEventListener("click", (evt) => {
  evt.preventDefault();
  mapPopup.classList.remove("active");
})

window.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("active")) {
      evt.preventDefault();
      mapPopup.classList.remove("active");
    }
  }
})

// Открытие формы обратной связи
const feedbackLink = document.querySelector(".feedback-link");
const feedbackPopup = document.querySelector(".modal-form-feedback");
const feedbackClose = feedbackPopup.querySelector(".modal-close");

feedbackLink.addEventListener("click", (evt) => {
  evt.preventDefault();
  feedbackPopup.classList.add("active")
})

feedbackClose.addEventListener("click", (evt) => {
  evt.preventDefault();
  feedbackPopup.classList.remove("active");
})

window.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27) {
    if (feedbackPopup.classList.contains("active")) {
      evt.preventDefault();
      feedbackPopup.classList.remove("active");
    }
  }
})

const buttonBack = document.querySelector(".gallery-button-back");
const buttonNext = document.querySelector(".gallery-button-next");
const galleryItems = document.querySelectorAll(".gallery-item");
let currentItem = 0;

buttonNext.addEventListener("click", (evt) => {
  evt.preventDefault();

  galleryItems.forEach((item) => {
    item.classList.remove("gallery-item-active");
  });
  nextItem = currentItem + 1;
  if (nextItem === galleryItems.length) {
    nextItem = currentItem = 0;
  } else {
    currentItem = nextItem;
  }
  galleryItems[nextItem].classList.add("gallery-item-active");
});

buttonBack.addEventListener("click", (evt) => {
  evt.preventDefault();

  galleryItems.forEach((item) => {
    item.classList.remove("gallery-item-active");
  });
  nextItem = currentItem - 1;
  if (nextItem < 0) {
    nextItem = currentItem = galleryItems.length - 1;
  } else {
    currentItem = nextItem;
  }
  galleryItems[nextItem].classList.add("gallery-item-active");
});




const servicesButtons = document.querySelectorAll('.services-button');
const servicesGalleryItems = document.querySelectorAll(".services-item");

servicesButtons.forEach(btn => {
  btn.addEventListener("click", (evt)=> {
    const activeIndex = evt.target.dataset.position;

    // Удаляем класс *active для всех слайдеров
    servicesGalleryItems.forEach((item) => {
      item.classList.remove("services-item-active");
    })

    // Добавляем класс *active для нужного слайдера
    servicesGalleryItems[activeIndex].classList.add("services-item-active");

    // Удаляем класс *active для всех кнопок
    servicesButtons.forEach((item) => {
      item.classList.remove("services-button-active");
    })

    // Добавляем класс *active для нужной кнопки
    servicesButtons[activeIndex].classList.add("services-button-active");
  })
})
