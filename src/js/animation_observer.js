// Card animation observer

const cards = document.querySelectorAll(".card");

const card_observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("card_scroll_animation");
      } else {
        entry.target.classList.remove("card_scroll_animation");
      }
    });
  },
  { threshold: 0.5 }
);

for (let i = 0; i < cards.length; i++) {
  const card = cards[i];
  card_observer.observe(card);
}

// IVF Process steps animation observer

const steps = document.querySelectorAll(".step");

const steps_observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("step_scroll_animation");
      } else {
        entry.target.classList.remove("step_scroll_animation");
      }
    });
  },
  { threshold: 0.5 }
);

for (let i = 0; i < steps.length; i++) {
  const step = steps[i];
  steps_observer.observe(step);
}
