const requestedDetails = new URLSearchParams(window.location.search).get("details");
const requestedPopover = requestedDetails ? document.getElementById(requestedDetails) : null;

if (requestedPopover?.matches("[popover]") && typeof requestedPopover.showPopover === "function") {
  requestedPopover.showPopover();
  requestedPopover.querySelector(".project-dialog-close")?.focus();
}
