// Открытие модального окна с корзиной
const cartLinks = document.querySelectorAll(".button-purchase");
const cartPopup = document.querySelector(".modal-form-cart");
const cartClose = cartPopup.querySelector(".modal-close");

cartLinks.forEach((item) => {
  item.addEventListener("click", (evt) => {
    evt.preventDefault();
    cartPopup.classList.add("active")
  })
})

cartClose.addEventListener("click", (evt) => {
  evt.preventDefault();
  cartPopup.classList.remove("active");
})

window.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27) {
    if (cartPopup.classList.contains("active")) {
      evt.preventDefault();
      cartPopup.classList.remove("active");
    }
  }
})
