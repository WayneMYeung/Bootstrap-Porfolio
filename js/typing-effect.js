// Array of words to display
const words = ["DEVELOPER", "DESIGNER", "CREATOR", "PROBLEM SOLVER"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 150;
const deletingSpeed = 75;
const delayBeforeNextWord = 2000; // Pause before moving to the next word

// Function to type or delete characters
function type() {
    const typingText = document.getElementById('typing-text');

    // Get the current word
    const currentWord = words[wordIndex];
    
    // Check if we are deleting characters
    if (isDeleting) {
        // Remove characters
        typingText.textContent = currentWord.substring(0, charIndex--);
        
        // If the word is completely deleted
        if (charIndex < 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, typingSpeed);
            return;
        }
    } else {
        // Add characters
        typingText.textContent = currentWord.substring(0, charIndex++ + 1);
        
        // If the word is completely typed
        if (charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(type, delayBeforeNextWord);
            return;
        }
    }
    
    // Set the delay for typing or deleting
    const delay = isDeleting ? deletingSpeed : typingSpeed;
    setTimeout(type, delay);
}

// Start the typing effect
document.addEventListener('DOMContentLoaded', () => {
    type();
});
