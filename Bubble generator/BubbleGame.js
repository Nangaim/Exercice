class BubbleMaker {
  constructor() {
    this.size = Math.random() * 200 + 100 + "px";
    this.isWin = false;
    this.counter = 0;
    this.plusMinus = Math.random() > 0.5 ? 1 : -1;

    this.parent = document.querySelector("body");
    this.child = document.querySelector("#light");

    this.counterDisplay = document.querySelector("span");
    this.bubble = document.createElement("div");
    this.bubbleContainer = document.createElement("div");

    this.init();
  }

  bubbleContainerMaker() {
    this.bubble.addEventListener("click", () => {
      this.counter += 1;
      this.counterDisplay.textContent = this.counter;
      this.bubble.remove();
    });

    this.bubbleContainer.innerHTML = `<h3>Score <br>${this.counterDisplay}</h3>`;

    setInterval(this.bubbleMaker, 1000);

    if (this.counter === 40) {
      this.isWin = true;
    }
  }

  bubbleMaker() {
    this.bubble.classList.add("bubble");
    this.bubble.style.height = this.size;
    this.bubble.style.width = this.size;
    this.bubble.style.top = Math.random() * 100 + 100 + "%";
    this.bubble.style.left = Math.random() * 100 + "%";

    this.bubble.style.setProperty(
      "--left",
      Math.random() * 100 * this.plusMinus + "%"
    );

    this.bubbleContainer.appendChild(this.bubble);

    setTimeout(() => {
      this.bubble.remove();
    }, 5000);
  }

  init() {
    this.bubbleContainerMaker();

    this.parent.insertBefore(this.bubbleContainer, this.child);
  }
}
