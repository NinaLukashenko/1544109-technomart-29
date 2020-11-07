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

// СЛАЙДЕР "Преимущества"
const buttonBack = document.querySelector(".gallery-button-back");
const buttonNext = document.querySelector(".gallery-button-next");
const galleryItems = document.querySelectorAll(".gallery-item");
let currentItem = 0;

buttonNext.addEventListener("click", (evt) => {
  evt.preventDefault();

  galleryItems.forEach((item) => {
    item.classList.remove("gallery-item-active");
  });

  if (currentItem !== galleryItems.length - 1) {
    galleryItems[currentItem + 1].classList.add("gallery-item-active");
    currentItem ++;
    if (currentItem === galleryItems.length - 1) {
      buttonNext.setAttribute('disabled', 'disabled');
    }
    if (currentItem === 1) {
      buttonBack.removeAttribute('disabled', 'disabled');
    }
  } else {
    galleryItems[currentItem].classList.add("gallery-item-active");
  }

});

buttonBack.addEventListener("click", (evt) => {
  evt.preventDefault();

  galleryItems.forEach((item) => {
    item.classList.remove("gallery-item-active");
  });

  if (currentItem !== 0) {
    galleryItems[currentItem - 1].classList.add("gallery-item-active");
    currentItem --;
    // Если пользователь переключился на предпоследний слайд,
    // делаем снова доступной кнопку "Следующий"
    if (currentItem === galleryItems.length - 2) {
      buttonNext.removeAttribute('disabled', 'disabled');
    }
    if (currentItem === 0) {
      buttonBack.setAttribute('disabled', 'disabled');
    }
  } else {
    galleryItems[currentItem].classList.add("gallery-item-active");
  }

});

// СЛАЙДЕР "Сервисы"
const servicesButtons = document.querySelectorAll('.services-button');
const servicesGalleryItems = document.querySelectorAll(".services-item");

servicesButtons.forEach(btn => {
  btn.addEventListener("click", (evt)=> {
    evt.preventDefault();

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
