"use strict";

let inputElement = document.querySelector("input");
let clickButton = document.querySelector("button");
let mess = document.querySelector("p");

clickButton.onclick = () => {
  let inputValue = inputElement.value;
  if (inputValue !== "") {
    mess.textContent = inputValue;
    mess.style.display = "block";
    console.log(mess);
    inputElement.value = "";
  }
};
