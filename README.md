I made this small JavaScript project called Target Hit Bubble Game to practice working with the DOM, event handling, and simple game logic using timers, loops, and random number generation.

It’s a game where you need to click the bubble matching the “Hit” number to score points.

ABOUT THE CODE

Generating random bubbles

The makeBubbles() function creates 90 bubbles each with a number between 0–9.
Each bubble also gets a random gradient color and is clickable.
```
<div class="bubble">0–9</div>

```

Selecting the Hit number

The getNewHit() function randomly selects a number that appears in the “Hit” section.
The player must click the bubble matching this number to score 10 points.
```
hitNumber = Math.floor(Math.random() * 10);
hitVal.textContent = hitNumber;
```

Handling clicks

The panel listens for clicks on bubbles.
If the clicked bubble matches the current hit number, score increases by 10, new bubbles are generated, and a new hit number appears.
```
if (clickedNum === hitNumber) {
    score += 10;
    makeBubbles();
    getNewHit();
}
```

Timer

The game runs for 60 seconds using setInterval.
When the timer reaches 0, the game ends and the final score is shown.
```
timer = setInterval(() => { ... }, 1000);
```

Starting and ending the game

The overlay is used for both start and end screens.
Clicking “Start Game” hides it and begins the game.
When time runs out, the overlay shows the final score and a “Play Again” button.

EXAMPLE FLOW

Open the file — you see a Start button and the Hit, Timer, and Score display.

Click Start — bubbles appear and the timer starts.

Click the bubble that matches the “Hit” number to gain 10 points.

Each correct click regenerates the bubbles and changes the Hit number.

When the timer ends, the overlay shows the final score.

Click “Play Again” to restart the game.

SUMMARY

This small project helped me understand:

How to dynamically generate elements in the DOM

How to handle click events and check conditions

How to manage game state with timers and variables

How to build a simple, interactive browser game with a modern UI using TailwindCSS

It’s a small game, but a good way to practice JavaScript interactivity, DOM manipulation, and responsive styling.