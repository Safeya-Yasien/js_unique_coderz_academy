let heading = document.querySelector(".header"),
  list = document.querySelector(".list"),
  link = list.getElementsByTagName("a"),
  adding = document.querySelector(".add"),
  counter = 1;

list.addEventListener("click", changeHeading);

function changeHeading(element) {
  if (element.target.nodeName === "A") {
    heading.innerHTML = element.target.innerHTML;
    for (let i = 0; i < list.children.length; i++) {
      list.children[i].firstElementChild.classList.remove("hover");
    }

    element.target.classList.add("hover");
  }
}

adding.addEventListener("click", addNewItem);

function addNewItem() {
  let newItem = `<li><a href="#" class="new-item-link"> New Item ${counter}</a></li>`;
  list.innerHTML += newItem;
  counter++;
}
