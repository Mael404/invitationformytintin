const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const question = document.getElementById('question');
const mainGif = document.querySelector('.main-gif');

// Variable to keep track of button size
let yesScale = 1;

// Function to move the "No" button
function moveButton() {
    // Get screen width and height
    const maxWidth = window.innerWidth - noBtn.offsetWidth - 20;
    const maxHeight = window.innerHeight - noBtn.offsetHeight - 20;

    // Generate random coordinates
    const randomX = Math.random() * maxWidth;
    const randomY = Math.random() * maxHeight;

    // Apply new position
    noBtn.style.position = 'fixed'; // Break out of flow
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';

    // Make the "Yes" button grow every time she misses "No"
    yesScale += 0.15;
    yesBtn.style.transform = `scale(${yesScale})`;
}

// Event Listeners
// 'mouseover' for desktop, 'touchstart' for iPhone
noBtn.addEventListener('mouseover', moveButton);
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault(); // Prevents double-firing on some phones
    moveButton();
});

// Yes Button Click Action
yesBtn.addEventListener('click', () => {
    // 1. Change the text
    question.innerHTML = "YAY! I Love You! 💖";
    
    // 2. Change the GIF to the happy one
    mainGif.src = "https://media1.tenor.com/m/I7QkQkK2MQQAAAAC/cute-love-bear.gif";

    // 3. Hide the No button
    noBtn.style.display = 'none';

    // 4. Reset Yes button scale
    yesBtn.style.transform = 'scale(1)';

    // 5. Trigger Confetti
    triggerConfetti();
});

// Confetti Effect Function
function triggerConfetti() {
    const duration = 3000;
    const end = Date.now() + duration;

    // Launch confetti from edges
    (function frame() {
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ['#ff4d6d', '#ff758f', '#fff']
        });
        confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ['#ff4d6d', '#ff758f', '#fff']
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}