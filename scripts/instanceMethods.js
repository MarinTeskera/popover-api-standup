const toggleButton = document.getElementById("toggle");
const firstInstanceMethodsPopover = document.getElementById(
  "firstInstanceMethodsPopover"
);

toggleButton.addEventListener("click", (event) => {
  firstInstanceMethodsPopover.togglePopover();
});

const showButton = document.getElementById("show");
const hideButton = document.getElementById("hide");
const secondInstanceMethodsPopover = document.getElementById(
  "secondInstanceMethodsPopover"
);

showButton.addEventListener("click", (event) => {
  secondInstanceMethodsPopover.showPopover();
});

hideButton.addEventListener("click", (event) => {
  secondInstanceMethodsPopover.hidePopover();
});

const hoverButton = document.getElementById("hover");
const thirdInstanceMethodsPopover = document.getElementById(
  "thirdInstanceMethodsPopover"
);

hoverButton.addEventListener("mouseover", (event) => {
  thirdInstanceMethodsPopover.showPopover();
});

hoverButton.addEventListener("mouseleave", (event) => {
  thirdInstanceMethodsPopover.hidePopover();
});
