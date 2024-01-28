let inputEle = document.querySelector("input");
let btn = document.querySelector("button");

btn.addEventListener("click", togglePassword);

function togglePassword() {
  if (this.getAttribute("data-text") === "show") {
    inputEle.setAttribute("type", "text");
    this.setAttribute("data-text", "hide");
    this.innerHTML = "Hide";
  } else {
    inputEle.setAttribute("type", "password");
    this.setAttribute("data-text", "show");
    this.innerHTML = "Show";
  }
}
