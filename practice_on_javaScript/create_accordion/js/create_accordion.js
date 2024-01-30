let btns = document.querySelectorAll(".accordion");

function accordions() {
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      this.classList.toggle("active");
      let panel = this.nextElementSibling;
      console.log(panel);
      if (panel.style.maxHeight) panel.style.maxHeight = null;
      else panel.style.maxHeight = panel.scrollHeight + "px";
    });
  }
}

accordions();
