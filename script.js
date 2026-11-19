// --- 1. TYPEWRITER EFFECT ---
const textElement = document.getElementById('typewriter');
const words = [
    "Criminologist.", 
    "Security Professional.", 
    "Business Analyst.", 
    "Fraud & AML Specialist.",
    "Researcher."
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        textElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        textElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = 100;
    if (isDeleting) typeSpeed /= 2;

    if (!isDeleting && charIndex === currentWord.length) {
        typeSpeed = 2000; 
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500; 
    }

    setTimeout(type, typeSpeed);
}

// --- 2. SHOW/HIDE CV LOGIC ---
const revealBtn = document.getElementById('reveal-btn');
const cvDetails = document.getElementById('cv-details');

revealBtn.addEventListener('click', (e) => {
    e.preventDefault(); 
    cvDetails.classList.add('active');
    
    setTimeout(() => {
        cvDetails.scrollIntoView({ behavior: 'smooth' });
    }, 100);
});

document.querySelector('.back-btn').addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    setTimeout(() => {
        cvDetails.classList.remove('active');
    }, 800);
});

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, 1000); 
});


