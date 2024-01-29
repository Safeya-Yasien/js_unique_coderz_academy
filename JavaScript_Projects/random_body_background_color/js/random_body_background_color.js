let btn1 = document.querySelector(".btn-1");
let btn2 = document.querySelector(".btn-2");

// first way
btn1.addEventListener("click", randomBg1);

function randomBg1() {
  let randomColor1 = "#" + Math.random().toString(16).slice(2, 8);
  document.body.style.backgroundColor = randomColor1;
}

// second way
btn2.addEventListener("click", randomBg2);

function randomBg2() {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);

  let randomColor2 = `rgb(${x}, ${y}, ${z})`;
  document.body.style.backgroundColor = randomColor2;
}
