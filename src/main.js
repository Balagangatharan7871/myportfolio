import './style.css'

// Mobile menu logic (placeholder)
console.log('SEO Portfolio Loaded');

// Typing Animation for Search Query
const searchQueries = [
    "SEO Specialist",
    "Technical SEO",
    "SEO Architect",
    "SEO AI Automation"
];

let currentQueryIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;

function typeSearchQuery() {
    const typingElement = document.querySelector('.typing-text');
    if (!typingElement) return;

    const currentQuery = searchQueries[currentQueryIndex];

    if (isDeleting) {
        typingElement.textContent = currentQuery.substring(0, currentCharIndex - 1);
        currentCharIndex--;
    } else {
        typingElement.textContent = currentQuery.substring(0, currentCharIndex + 1);
        currentCharIndex++;
    }

    let typingSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && currentCharIndex === currentQuery.length) {
        typingSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentQueryIndex = (currentQueryIndex + 1) % searchQueries.length;
        typingSpeed = 500;
    }

    setTimeout(typeSearchQuery, typingSpeed);
}

// Start typing animation
setTimeout(typeSearchQuery, 1000);

// Rotating Slogan
const slogans = [
    "Strategy. Skill. High Scores. Welcome to the Game of Growth.",
    "SEO is the Game. Ranking is the High Score. Let's Play."
];

let currentSloganIndex = 0;

function rotateslogan() {
    const sloganElement = document.getElementById('rotating-slogan');
    if (!sloganElement) return;

    // Fade out
    sloganElement.style.opacity = '0';

    setTimeout(() => {
        // Change text
        currentSloganIndex = (currentSloganIndex + 1) % slogans.length;
        sloganElement.textContent = slogans[currentSloganIndex];

        // Fade in
        sloganElement.style.opacity = '1';
    }, 500);
}

// Rotate slogan every 5 seconds
setInterval(rotateslogan, 5000);

// Booking Form Functionality
document.addEventListener('DOMContentLoaded', function () {
    // Set minimum date to today
    const dateInput = document.getElementById('booking-date');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
    }

    // Handle form submission
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                date: document.getElementById('booking-date').value,
                time: document.getElementById('time-slot').value
            };

            // Show success message
            const successMsg = document.getElementById('success-message');
            successMsg.classList.remove('hidden');

            // Send email with form data (using mailto as fallback)
            const subject = encodeURIComponent('SEO Call Booking Request');
            const body = encodeURIComponent(
                `Name: ${formData.name}\n` +
                `Email: ${formData.email}\n` +
                `Preferred Date: ${formData.date}\n` +
                `Preferred Time: ${formData.time}\n\n` +
                `Please confirm this booking.`
            );

            window.location.href = `mailto:balagangatharan2001@gmail.com?subject=${subject}&body=${body}`;

            // Reset form after a delay
            setTimeout(() => {
                bookingForm.reset();
                successMsg.classList.add('hidden');
            }, 3000);
        });
    }
});
