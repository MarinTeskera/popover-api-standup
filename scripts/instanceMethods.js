// Toggle button

const toggleButton = document.getElementById("toggle");
const toggleMethodPopover = document.getElementById("toggle-method-popover");

toggleButton.addEventListener("click", (event) => {
  toggleMethodPopover.togglePopover();
});

// Show/hide buttons

const showButton = document.getElementById("show");
const hideButton = document.getElementById("hide");
const secondInstanceMethodsPopover = document.getElementById(
  "show-hide-method-popover"
);

showButton.addEventListener("click", (event) => {
  secondInstanceMethodsPopover.showPopover();
});

hideButton.addEventListener("click", (event) => {
  secondInstanceMethodsPopover.hidePopover();
});

// Hover button

const hoverButton = document.getElementById("hover");
const thirdInstanceMethodsPopover = document.getElementById(
  "hover-method-popover"
);

hoverButton.addEventListener("mouseover", (event) => {
  thirdInstanceMethodsPopover.showPopover();
});

hoverButton.addEventListener("mouseleave", (event) => {
  thirdInstanceMethodsPopover.hidePopover();
});
