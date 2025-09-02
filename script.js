const kitty = document.getElementById("kitty");
const nextBtn = document.getElementById("nextBtn");

kitty.addEventListener("click", () => {
  // Create balloons
  for (let i = 0; i < 20; i++) {
    let balloon = document.createElement("div");
    balloon.classList.add("balloon");
    balloon.style.left = Math.random() * window.innerWidth + "px";
    balloon.style.backgroundColor = getRandomColor();
    document.body.appendChild(balloon);

    // Remove balloon after animation
    setTimeout(() => balloon.remove(), 4000);
  }

  // After balloons disappear, show button
  setTimeout(() => {
    nextBtn.classList.add("show");
  }, 4000);
});

function getRandomColor() {
  const colors = ["#ff6f91", "#ff9671", "#ffc75f", "#f9f871", "#6ecb63"];
  return colors[Math.floor(Math.random() * colors.length)];
}

