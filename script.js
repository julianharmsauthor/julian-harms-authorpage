const revealItems = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

revealItems.forEach((item) => revealObserver.observe(item));

const flodeskTriggers = document.querySelectorAll(".prequel-trigger");

const openFlodeskPopup = () => {
  let opened = false;

  if (typeof window.fd === "function") {
    window.fd("form", { formId: "69ac960345e6c74c868c4135" });
    opened = true;
  }

  // Re-open an existing Flodesk modal instance if it is already in the DOM.
  const modal = document.querySelector(".fd-modal");
  if (modal) {
    modal.classList.add("fd-is-open");
    modal.setAttribute("aria-hidden", "false");
    opened = true;
  }

  if (!opened) {
    window.location.hash = "signup";
  }
};

flodeskTriggers.forEach((trigger) => {
  trigger.addEventListener("click", (event) => {
    event.preventDefault();
    openFlodeskPopup();
  });
});
