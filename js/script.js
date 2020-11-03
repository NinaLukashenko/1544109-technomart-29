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
  console.log(evt);
  if (evt === 27) {
    if (mapPopup.classList.contains('active')) {
      evt.preventDefault();
      mapPopup.classList.remove('active');
    }
  }
})
