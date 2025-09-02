const kitty = document.getElementById("kitty");
const balloonsContainer = document.getElementById("balloons-container");
const birthdayText = document.getElementById("birthdayText");
const nextBtn = document.getElementById("nextBtn");

kitty.addEventListener("click", () => {
  launchBalloons();
});

function launchBalloons() {
  for (let i = 0; i < 20; i++) {
    setTimeout(() => {
      createBalloon();
    }, i * 300); // balloons appear one by one
  }

  // Show text & button after balloons animation ends
  setTimeout(() => {
    birthdayText.classList.remove("hidden");
    nextBtn.classList.remove("hidden");
  }, 7000);
}

function createBalloon() {
  const balloon = document.createElement("div");
  balloon.classList.add("balloon");

  // random color
  balloon.style.background = getRandomColor();
  // random horizontal position
  balloon.style.left = Math.random() * 100 + "vw";
  // random size
  const size = Math.random() * 40 + 30;
  balloon.style.width = size + "px";
  balloon.style.height = size * 1.4 + "px";

  balloonsContainer.appendChild(balloon);

  setTimeout(() => {
    balloon.remove();
  }, 5000);
}

function getRandomColor() {
  const colors = ["red", "blue", "green", "yellow", "purple", "orange", "pink"];
  return colors[Math.floor(Math.random() * colors.length)];
}

function goToNext() {
  window.location.href = "page2.html";
}

