const popover = document.getElementById("toggle-event-popover");
const indicator = document.getElementById("toggle-event-popover-indicator");

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
