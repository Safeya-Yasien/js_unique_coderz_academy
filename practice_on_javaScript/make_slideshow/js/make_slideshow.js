let myImage = document.slideshow;
let imgs = [
  "imgs/img-1.jpg",
  "imgs/img-2.jpg",
  "imgs/img-3.jpg",
  "imgs/img-4.jpg",
  "imgs/img-5.jpg",
];

let counter = 0;

let slideShow = function () {
  myImage.setAttribute("src", imgs[counter]);
  if (counter === imgs.length - 1) counter = 0;
  else counter++;
  setTimeout(slideShow, 2000);
};

slideShow();
