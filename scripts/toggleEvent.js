const popover = document.getElementById("toggleEventPopover");
const indicator = document.getElementById("toggleEventPopoverIndicator");

popover.addEventListener("beforetoggle", (event) => {
  console.log(event.newState);
  if (event.newState === "open") {
    indicator.innerText = "open";
  } else {
    indicator.innerText = "closed";
  }
});
