window.addEventListener("load", () => {
  const balloons = document.querySelectorAll(".balloon");
  const nextButton = document.getElementById("nextButton");
  let finished = 0;

  balloons.forEach(balloon => {
    balloon.addEventListener("animationend", () => {
      finished++;
      if (finished === balloons.length) {
        nextButton.style.display = "inline-block"; // show button
      }
    });
  });

  nextButton.addEventListener("click", () => {
    window.location.href = "page2.html"; // go to page2
  });
});
