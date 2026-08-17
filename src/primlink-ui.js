const header = document.querySelector("[data-ui-header]");
const menuButton = document.querySelector("[data-ui-menu-button]");
const nav = document.querySelector("[data-ui-nav]");

if (header) {
  const updateHeader = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
}

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.querySelector("[data-ui-menu-label]").textContent = isOpen ? "Close" : "Menu";
  });
}

document.querySelectorAll("[data-ui-carousel]").forEach((carousel) => {
  const slides = [...carousel.querySelectorAll("[data-ui-slide]")];
  const dots = [...carousel.querySelectorAll("[data-ui-slide-dot]")];
  if (slides.length < 2) return;

  let index = Math.max(0, slides.findIndex((slide) => slide.classList.contains("is-active")));
  let timer;

  const show = (next) => {
    index = (next + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => slide.classList.toggle("is-active", slideIndex === index));
    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle("is-active", dotIndex === index);
      dot.setAttribute("aria-current", dotIndex === index ? "true" : "false");
    });
  };

  const start = () => {
    timer = window.setInterval(() => show(index + 1), 6500);
  };

  const restart = () => {
    window.clearInterval(timer);
    start();
  };

  dots.forEach((dot, dotIndex) => {
    dot.addEventListener("click", () => {
      show(dotIndex);
      restart();
    });
  });

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    start();
  }
});

const revealItems = document.querySelectorAll("[data-ui-reveal]");

if (revealItems.length && "IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
