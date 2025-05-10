document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav ul li a");

  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 50,
          behavior: "smooth"
        });
      }
    });
  });
});

const reviews = [
  {
    name: "Sofia M.",
    text: "Absolutely incredible! The quad ride through the Agafay desert was thrilling and beautiful. Highly recommended!"
  },
  {
    name: "Youssef K.",
    text: "Our guide was very professional and fun. We felt safe and had a blast. Great experience for families or friends."
  },
  {
    name: "Amina B.",
    text: "I loved every minute of it! Amazing landscapes and perfectly organized. Will do it again!"
  },
  {
    name: "Daniel R.",
    text: "The highlight of our trip to Marrakech. Friendly staff, powerful quads, and unforgettable scenery."
  }
];

function loadReviews() {
  const container = document.getElementById("review-container");
  reviews.forEach(review => {
    const card = document.createElement("div");
    card.className = "review-card";

    const text = document.createElement("p");
    text.textContent = review.text;

    const name = document.createElement("div");
    name.className = "reviewer";
    name.textContent = `— ${review.name}`;

    card.appendChild(text);
    card.appendChild(name);
    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", loadReviews);

document.addEventListener("DOMContentLoaded", function() {
      const faqItems = document.querySelectorAll(".faq-item");
      faqItems.forEach(item => {
        item.querySelector("h3").addEventListener("click", () => {
          item.classList.toggle("active");
        });
      });
    });