// Открытие модального окна с картой
const mapLink = document.querySelector(".map-link");
const mapPopup = document.querySelector(".modal-form-map");
const mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener('click', (evt) => {
  evt.preventDefault();
  mapPopup.classList.add('active')
})

mapClose.addEventListener('click', (evt) => {
  evt.preventDefault();
  mapPopup.classList.remove('active');
})

window.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains('active')) {
      evt.preventDefault();
      mapPopup.classList.remove('active');
    }
  }
})

// Открытие формы обратной связи
const feedbackLink = document.querySelector(".feedback-link");
const feedbackPopup = document.querySelector(".modal-form-feedback");
const feedbackClose = feedbackPopup.querySelector(".modal-close");

feedbackLink.addEventListener('click', (evt) => {
  evt.preventDefault();
  feedbackPopup.classList.add('active')
})

feedbackClose.addEventListener('click', (evt) => {
  evt.preventDefault();
  feedbackPopup.classList.remove('active');
})

window.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27) {
    if (feedbackPopup.classList.contains('active')) {
      evt.preventDefault();
      feedbackPopup.classList.remove('active');
    }
  }
})
