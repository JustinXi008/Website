const requestedDetails = new URLSearchParams(window.location.search).get("details");
const requestedPopover = requestedDetails ? document.getElementById(requestedDetails) : null;

const openProjectDetails = (popover) => {
  if (!popover?.matches("[popover]") || typeof popover.showPopover !== "function") return;

  popover.showPopover();
  popover.querySelector(".project-dialog-close")?.focus();
};

openProjectDetails(requestedPopover);

document.querySelectorAll("[data-project-details]").forEach((project) => {
  const openDetails = () => {
    const popover = document.getElementById(project.dataset.projectDetails);
    openProjectDetails(popover);
  };

  project.addEventListener("click", openDetails);
  project.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;

    event.preventDefault();
    openDetails();
  });
});
