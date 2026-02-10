
const envelope = document.getElementById('envelope');
const envelopeScreen = document.getElementById('envelope-screen');
const popupMessage = document.getElementById('popup-message');
const revealBtn = document.getElementById('reveal-btn');
const mainPage = document.getElementById('main-page');

envelope.addEventListener('click', () => {
    envelopeScreen.style.display = 'none';
    popupMessage.classList.remove('hidden');
});

revealBtn.addEventListener('click', () => {
    popupMessage.classList.add('hidden');
    mainPage.classList.remove('hidden');
    
    // Small welcome confetti
    confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
    });
});


const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const question = document.getElementById('question');
const mainGif = document.querySelector('.main-gif');
const buttonsContainer = document.querySelector('.buttons');

let yesScale = 1;

// Function to move the "No" button
function moveButton() {
    const maxWidth = window.innerWidth - noBtn.offsetWidth - 20;
    const maxHeight = window.innerHeight - noBtn.offsetHeight - 20;

    const randomX = Math.random() * maxWidth;
    const randomY = Math.random() * maxHeight;

    noBtn.style.position = 'fixed';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';

    yesScale += 0.15;
    yesBtn.style.transform = `scale(${yesScale})`;
}

// Event Listeners for running button
noBtn.addEventListener('mouseover', moveButton);
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    moveButton();
});


yesBtn.addEventListener('click', () => {

    question.innerHTML = `
        See you on Feb 14th! 🌹<br><br>
        Will pick you up at 7pm sharp!<br>
        I promise not to be late! 
    `;

    mainGif.src = "https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif";

    buttonsContainer.style.display = 'none';
    

    yesBtn.style.transform = 'scale(1)';


    document.body.classList.add('celebrate');

    triggerConfetti();
});

function triggerConfetti() {
    const duration = 3000;
    const end = Date.now() + duration;

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