let myImage = document.getElementById("slide-show");

let imgs = [
  "imgs/img-1.jpg",
  "imgs/img-2.jpg",
  "imgs/img-3.jpg",
  "imgs/img-4.jpg",
  "imgs/img-5.jpg",
];

let i = 0;

function slideShow() {
  myImage.setAttribute("src", imgs[i]);

  if (i == imgs.length - 1) i = 0;
  else i++;

  setTimeout(() => slideShow(), 2000);
}

slideShow();
