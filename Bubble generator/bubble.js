const counterDisplay = document.querySelector("span");
let counter = 0;

const bubbleMaker = () => {
  const isWin = false;

  const bubble = document.createElement("div");
  bubble.classList.add("bubble");

  document.body.appendChild(bubble);

  const size = Math.random() * 200 + 100 + "px";
  bubble.style.height = size;
  bubble.style.width = size;

  bubble.style.top = Math.random() * 100 + 100 + "%";
  bubble.style.left = Math.random() * 100 + "%";

  const plusMinus = Math.random() > 0.5 ? 1 : -1;
  bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

  bubble.addEventListener("click", () => {
    counter++;
    counterDisplay.textContent = counter;
    bubble.remove();
  });

  if (counter === 40) {
    isWin = True;
  }

  setTimeout(() => {
    bubble.remove();
  }, 5000);
};

setInterval(bubbleMaker, 1000);

// --------------------------------------
