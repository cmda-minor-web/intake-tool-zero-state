// show example card
const exampleShow = document.querySelector(".example__button");
const exampleCard = document.querySelector(".example__card");
const exampleButton = document.querySelector(".example__button");

exampleShow.addEventListener("click", () => {
  exampleCard.classList.toggle("example__card--show");
  exampleButton.classList.toggle("example__button--hidden");
});

// resize code panels
const topPane = document.querySelector(".input__html");
const midPane = document.querySelector(".input__css");

const divider = document.querySelectorAll(".input__resizer");

function resizer(elem) {
  const nextPanel = elem.srcElement.nextElementSibling;
  const previousPanel = elem.srcElement.previousElementSibling;
  console.log(nextPanel);
  console.log(previousPanel);
  window.addEventListener("mousemove", mousemove);
  window.addEventListener("mouseup", mouseup);

  let prevY = elem.y;
  const panel = previousPanel.getBoundingClientRect();
  // console.log(topPanel);
  function mousemove(elem) {
    let newY = prevY - elem.y;
    console.log(newY);
    previousPanel.style.height = panel.height - newY + "px";
  }

  function mouseup() {
    window.removeEventListener("mousemove", mousemove);
    window.removeEventListener("mouseup", mouseup);
  }
}

divider.forEach((bar) => {
  console.log(bar);
  bar.addEventListener("mousedown", resizer);
});

// collapse / expand code panels
const arrow = document.querySelectorAll(".input__collapse");

arrow.forEach((elem) => {
  const parent = elem.parentElement;
  const child = elem.firstElementChild;
  parent.classList.add("input__code--open");
  elem.addEventListener("click", () => {
    child.classList.toggle("legend__icon--active");
    parent.classList.toggle("input__code--close");
  });
});

// collapse / expand output section
const preview = document.querySelector(".navigation__preview");
const inputPanel = document.querySelector("#input");
const outputPanel = document.querySelector("#output");
const previewIcon = document.querySelector(".navigation__preview svg");
console.log(previewIcon);

preview.addEventListener("click", () => {
  previewIcon.classList.toggle("navigation__icon--toggle");
  inputPanel.classList.toggle("expand");
  outputPanel.classList.toggle("collapse");
});

// show example modal
const exampleModalButton = document.querySelector(".navigation__example");
const exampleModal = document.querySelector(".l-example--modal");

exampleModalButton.addEventListener("click", () => {
  exampleModal.classList.toggle("l-example--modal--show");
});

// draggable example
// https://www.w3schools.com/howto/howto_js_draggable.asp
dragElement(exampleModal);

function dragElement(elem) {
  let currentX = 0;
  let currentY = 0;
  let initX = 0;
  let initY = 0;

  elem.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();

    initX = e.clientX;
    initY = e.clientY;

    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();

    currentX = initX - e.clientX;
    currentY = initY - e.clientY;
    initX = e.clientX;
    initY = e.clientY;

    elem.style.top = elem.offsetTop - currentY + "px";
    elem.style.left = elem.offsetLeft - currentX + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
