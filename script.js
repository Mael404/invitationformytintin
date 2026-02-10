const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const question = document.getElementById('question');
const subtext = document.getElementById('sub-text');
const mascot = document.getElementById('mascot');

// Variables to track button size
let yesScale = 1;

// Function to move the "No" button randomly
function moveButton() {
    // Get the viewport dimensions (the screen size)
    const containerRect = document.querySelector('.container').getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();
    
    // Calculate random position within the visible screen
    // We limit it slightly so it doesn't go off-screen entirely
    const maxX = window.innerWidth - btnRect.width - 20;
    const maxY = window.innerHeight - btnRect.height - 20;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    // Apply the new position
    noBtn.style.position = 'fixed'; // Takes it out of the flow
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';

    // Grow the Yes button slightly every time she tries to click No
    yesScale += 0.2;
    yesBtn.style.transform = `scale(${yesScale})`;
}

// Event Listeners for "No" button (Desktop hover & Mobile touch)
noBtn.addEventListener('mouseover', moveButton);
noBtn.addEventListener('touchstart', moveButton); // For iPhone touch

// What happens when she clicks "Yes"
yesBtn.addEventListener('click', () => {
    // 1. Change the text
    question.innerHTML = "Yay! See you on the 14th! 💖";
    subtext.innerHTML = "I knew you'd say yes! 🥰";
    
    // 2. Change the GIF to a happy one
    // Using a specific happy bear GIF
    mascot.src = "https://media.giphy.com/media/T86i6yDyOYz7J6v9uh/giphy.gif"; 
    
    // 3. Hide the buttons
    document.querySelector('.buttons').style.display = 'none';

    // 4. Trigger Confetti
    launchConfetti();
});

function launchConfetti() {
    var duration = 3 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function() {
      var timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      var particleCount = 50 * (timeLeft / duration);
      
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);
}