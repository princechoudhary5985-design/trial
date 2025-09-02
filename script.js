document.getElementById("kitty").addEventListener("click", () => {
  const message = document.getElementById("birthday-message");
  const balloonsContainer = document.getElementById("balloons");
  const nextBtn = document.getElementById("next-btn");

  // Show message
  message.classList.remove("hidden");

  // Create balloons
  for (let i = 0; i < 20; i++) {
    let balloon = document.createElement("div");
    balloon.classList.add("balloon");

    balloon.style.background = `hsl(${Math.random() * 360}, 70%, 60%)`;
    balloon.style.left = Math.random() * 100 + "vw";
    balloon.style.width = 40 + Math.random() * 40 + "px";
    balloon.style.height = 60 + Math.random() * 40 + "px";

    balloonsContainer.appendChild(balloon);

    setTimeout(() => balloon.remove(), 6000);
  }

  // Show next button AFTER balloons are gone
  setTimeout(() => {
    nextBtn.classList.remove("hidden");
  }, 3000);
});
