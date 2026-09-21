const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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
