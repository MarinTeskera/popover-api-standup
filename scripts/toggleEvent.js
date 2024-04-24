const popover = document.getElementById("toggleEventPopover");
const indicator = document.getElementById("toggleEventPopoverIndicator");

popover.addEventListener("beforetoggle", (event) => {
  if (event.newState === "open") {
    indicator.innerText = "open";
  } else {
    indicator.innerText = "closed";
  }
});

// popover.addEventListener("toggle", (event) => {
//   if (event.oldState === "closed") {
//     indicator.innerText = "open";
//   } else {
//     indicator.innerText = "closed";
//   }
// });
