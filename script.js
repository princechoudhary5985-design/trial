const kitty = document.getElementById("kitty");
const message = document.getElementById("message");
const balloonsContainer = document.getElementById("balloons-container");
const nextBtn = document.getElementById("nextBtn");

kitty.addEventListener("click", () => {
  message.classList.remove("hidden");

  // generate balloons (15 total)
  for (let i = 0; i < 15; i++) {
    let balloon = document.createElement("div");
    balloon.classList.add("balloon");

    // random colors
    balloon.style.background = `hsl(${Math.random() * 360}, 70%, 60%)`;
    balloon.style.left = Math.random() * 100 + "vw";

    // random size
    let size = Math.random() * 40 + 40;
    balloon.style.width = size + "px";
    balloon.style.height = size * 1.3 + "px";

    balloonsContainer.appendChild(balloon);

    // remove after animation
    setTimeout(() => balloon.remove(), 6000);
  }

  // show button AFTER balloons disappear
  setTimeout(() => {
    nextBtn.classList.remove("hidden");
  }, 6200);
});
