const instructions = document.getElementById("instructions");
const popover = document.getElementById("mypopover");

if (!HTMLElement.prototype.hasOwnProperty("popover")) {
  popover.innerText = "";
  instructions.innerText = "Popovers not supported";
}

if (HTMLElement.prototype.hasOwnProperty("popover")) {
  instructions.addEventListener("mouseover", (event) => {
    const popupOpened = popover.showPopover();
  });

  instructions.addEventListener("mouseleave", (event) => {
    const popupOpened = popover.hidePopover();
  });
}
