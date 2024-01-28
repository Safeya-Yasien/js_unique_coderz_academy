let btn = document.querySelector(".change-color");
let box = document.querySelector(".box");

let colors = ["#aaaaaa", "#f9ae37", "#982d6b"];
let i = 0;

btn.onclick = () => {
  box.style.backgroundColor = colors[i];
  i++;

  if (i === colors.length) i = 0;
};
