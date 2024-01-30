function displayTagName(event) {
  let element = document.querySelector(".demo");
  element.innerHTML = event.target.tagName;
}

// or
document.body.addEventListener("click", displayTagName);
