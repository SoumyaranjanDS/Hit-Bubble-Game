// === SELECT ELEMENTS ===
const panel = document.getElementById("panel");
const hitVal = document.getElementById("hitVal");
const scoreVal = document.getElementById("scoreVal");
const timerVal = document.getElementById("timerVal");
const overlay = document.getElementById("overlay");
const startBtn = document.getElementById("startBtn");

// === INITIAL VARIABLES ===
let timer, timeLeft = 60, score = 0, hitNumber = 0;

// === COLOR SET FOR BUBBLES ===
const colors = [
  "from-pink-500 to-fuchsia-400",
  "from-blue-500 to-cyan-400",
  "from-emerald-500 to-green-400",
  "from-violet-500 to-indigo-400",
  "from-amber-500 to-yellow-400"
];

// === GENERATE RANDOM BUBBLES ===
function makeBubbles() {
  let bubbles = "";
  for (let i = 0; i < 90; i++) {
    const num = Math.floor(Math.random() * 10);
    const color = colors[Math.floor(Math.random() * colors.length)];
    bubbles += `<div class="bubble w-12 h-12 rounded-full bg-gradient-to-br ${color} 
                 text-white flex items-center justify-center font-semibold text-lg shadow-md 
                 cursor-pointer hover:scale-110 transition-transform">${num}</div>`;
  }
  panel.innerHTML = bubbles;
}

// === GENERATE NEW HIT NUMBER ===
function getNewHit() {
  hitNumber = Math.floor(Math.random() * 10);
  hitVal.textContent = hitNumber;
}

// === START TIMER ===
function startTimer() {
  timer = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      timerVal.textContent = timeLeft;
    } else {
      clearInterval(timer);
      endGame();
    }
  }, 1000);
}

// === CLICK EVENT FOR BUBBLES ===
panel.addEventListener("click", e => {
  if (e.target.classList.contains("bubble")) {
    const clickedNum = Number(e.target.textContent);
    if (clickedNum === hitNumber) {
      score += 10;
      scoreVal.textContent = score;
      makeBubbles();
      getNewHit();
    }
  }
});

// === START GAME ===
function startGame() {
  overlay.classList.add("hidden");
  timeLeft = 60;
  score = 0;
  scoreVal.textContent = score;
  timerVal.textContent = timeLeft;
  makeBubbles();
  getNewHit();
  startTimer();
}

// === END GAME ===
function endGame() {
  overlay.classList.remove("hidden");
  overlay.innerHTML = `
    <div class="text-center">
      <h2 class="text-3xl font-bold mb-3">Game Over</h2>
      <p class="mb-5 text-lg">Final Score: <span class="font-bold text-emerald-400">${score}</span></p>
      <button id="restartBtn" class="bg-pink-500 hover:bg-pink-600 px-5 py-2 rounded-lg font-semibold transition">Play Again</button>
    </div>`;
  document.getElementById("restartBtn").addEventListener("click", () => location.reload());
}

// === EVENT LISTENER FOR START BUTTON ===
startBtn.addEventListener("click", startGame);
