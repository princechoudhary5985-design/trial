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

    // Random size
    balloon.style.width = 40 + Math.random() * 40 + "px";
    balloon.style.height = 60 + Math.random() * 40 + "px";

    document.getElementById("balloons").appendChild(balloon);

    // Remove after float
    setTimeout(() => {
      balloon.remove();
    }, 6000);
  }

  // Show Next button after balloons appear
  setTimeout(() => {
    document.getElementById("next-button").classList.remove("hidden");
  }, 2000);
});

// When clicking next button → go to next page
document.getElementById("next-button").addEventListener("click", () => {
  window.location.href = "page2.html"; // create page2.html later
});
