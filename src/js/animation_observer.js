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
  { threshold: 0 }
);

for (let i = 0; i < steps.length; i++) {
  const step = steps[i];
  steps_observer.observe(step);
}

// Doctors Intro animation observer

const intro_text = document.querySelectorAll(".intro_text");

const intro_text_observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("text_scroll_animation");
      } else {
        entry.target.classList.remove("text_scroll_animation");
      }
    });
  }
  // { threshold: 0 }
);

for (let i = 0; i < intro_text.length; i++) {
  const text = intro_text[i];
  intro_text_observer.observe(text);
}

// Successful Deliveries animation observer

const deliveries = document.querySelectorAll(".delivery");

const deliveries_observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("delivery_scroll_animation");
      } else {
        entry.target.classList.remove("delivery_scroll_animation");
      }
    });
  }
  // { threshold: 0 }
);

for (let i = 0; i < deliveries.length; i++) {
  const delivery = deliveries[i];
  deliveries_observer.observe(delivery);
}

// Services animation observer

const services = document.querySelectorAll(".service");

const services_observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("service_scroll_animation");
      } else {
        entry.target.classList.remove("service_scroll_animation");
      }
    });
  }
  // { threshold: 0.5 }
);

for (let i = 0; i < services.length; i++) {
  const service = services[i];
  services_observer.observe(service);
}

// Specialities animation observer

const specialities = document.querySelectorAll(".speciality");

const specialities_observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("speciality_scroll_animation");
      } else {
        entry.target.classList.remove("speciality_scroll_animation");
      }
    });
  }
  // { threshold: 0.5 }
);

for (let i = 0; i < specialities.length; i++) {
  const speciality = specialities[i];
  specialities_observer.observe(speciality);
}
