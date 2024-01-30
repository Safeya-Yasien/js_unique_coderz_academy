let mainImg = document.querySelector(".main-img");
let modal = document.querySelector(".modal");
let modalImage = document.querySelector(".modal-img");
let modalClose = document.querySelector(".close");
let modalContent = document.querySelector(".modal-text");

mainImg.addEventListener("click", createModal);

function createModal() {
  modal.style.display = "block";
  modalImage.src = mainImg.src;
  modalContent.innerHTML = mainImg.alt;

  modalClose.onclick = () => (modal.style.display = "none");
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
