let button = document.querySelector("button");
let highlighted = false;

button.addEventListener("click", function () {
  const cards = document.querySelectorAll(".card");
  cards.forEach(function (card, index) {
    if (!highlighted) {
      card.style.border = "2px solid orange";
      card.style.borderRadius = "20px";
      card.style.boxShadow = "0 6px 15px rgba(0, 0, 0, 0.15)";

      if (index % 2 === 0) {
        card.style.backgroundColor = "lightyellow";
      } else {
        card.style.backgroundColor = "#EDE9FE";
      }
    } else {
      card.style.backgroundColor = "#ffffff";
      card.style.border = "2px solid #e5e7eb";
      card.style.borderRadius = "15px";
      card.style.boxShadow = "0 6px 15px rgba(0, 0, 0, 0.08)";
    }
  });
  highlighted = !highlighted;
});

//JS Completed