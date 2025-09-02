document.getElementById("kitty").addEventListener("click", () => {
  // Show birthday message
  document.getElementById("birthday-message").classList.remove("hidden");

  // Create balloons
  for (let i = 0; i < 20; i++) {
    let balloon = document.createElement("div");
    balloon.classList.add("balloon");

    // Random colors
    balloon.style.background = `hsl(${Math.random() * 360}, 70%, 60%)`;

    // Random position
    balloon.style.left = Math.random() * 100 + "vw";

    // Different sizes
    balloon.style.width = 40 + Math.random() * 40 + "px";
    balloon.style.height = 60 + Math.random() * 40 + "px";

    // Add balloon
    document.getElementById("balloons").appendChild(balloon);

    // Remove balloon after animation
    setTimeout(() => {
      balloon.remove();
    }, 6000);
  }

  // Show "Next Page" button AFTER balloons disappear
  setTimeout(() => {
    document.getElementById("next-btn").classList.remove("hidden");
  }, 6000); // same time as balloon removal
});
