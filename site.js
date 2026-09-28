const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const entranceGroups = [
  ".home-page > section",
  ".project-stack > .project-item",
  ".post-year > .post-timeline-entry",
  ".course-list > .course-row",
];

const entranceItems = entranceGroups.flatMap((selector) =>
  Array.from(document.querySelectorAll(selector)),
);

if (!reduceMotion && entranceItems.length) {
  document.documentElement.classList.add("has-entrance-motion");

  entranceGroups.forEach((selector) => {
    document.querySelectorAll(selector).forEach((item, index) => {
      item.classList.add("entrance-item");
      item.style.setProperty("--entrance-delay", `${Math.min(index, 3) * 70}ms`);
    });
  });

  if ("IntersectionObserver" in window) {
    const entranceObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8%", threshold: 0.12 },
    );

    entranceItems.forEach((item) => entranceObserver.observe(item));
  } else {
    entranceItems.forEach((item) => item.classList.add("is-visible"));
  }
}

if (!reduceMotion) {
  document.querySelectorAll("[data-rotator]").forEach((rotator, rotatorIndex) => {
    const slides = Array.from(rotator.querySelectorAll(".explore-preview-item"));
    const card = rotator.closest(".explore-card");
    let currentIndex = 0;
    let timer;

    const showNext = () => {
      const previous = slides[currentIndex];
      currentIndex = (currentIndex + 1) % slides.length;
      const next = slides[currentIndex];

      previous.classList.remove("is-active");
      previous.classList.add("is-leaving");
      previous.setAttribute("aria-hidden", "true");

      next.classList.remove("is-leaving");
      next.classList.add("is-active");
      next.removeAttribute("aria-hidden");

      window.setTimeout(() => previous.classList.remove("is-leaving"), 320);
    };

    const stop = () => window.clearInterval(timer);
    const start = () => {
      stop();
      timer = window.setInterval(showNext, 4000);
    };

    card.addEventListener("mouseenter", stop);
    card.addEventListener("mouseleave", start);
    card.addEventListener("focusin", stop);
    card.addEventListener("focusout", start);

    window.setTimeout(start, rotatorIndex * 700);
  });
}
