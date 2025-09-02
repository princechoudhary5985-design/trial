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
    
    // After balloons are removed
setTimeout(() => {
  document.querySelectorAll(".balloon").forEach(b => b.remove());

  // Show the next button
  document.getElementById("nextBtn").style.display = "inline-block";
}, 4000); // 4s = balloon duration
    const nextBtn = document.getElementById("nextBtn");
nextBtn.style.display = "inline-block";
setTimeout(() => nextBtn.classList.add("show"), 50);

}
});
