// Select the floating navbar
const floatingNavbar = document.getElementById('floatingNavbar');

// Variable to track if the navbar is currently visible
let isNavbarVisible = false;

// Debounce delay
let scrollTimeout;

// Function to toggle the visibility of the floating navbar
function toggleFloatingNavbar() {
    if (window.scrollY > 10) {
        if (!isNavbarVisible) {
            // Show the floating navbar
            floatingNavbar.style.display = 'flex';
            floatingNavbar.style.opacity = '1';
            isNavbarVisible = true;
        }
    } else {
        if (isNavbarVisible) {
            // Hide the floating navbar with a slight delay
            floatingNavbar.style.opacity = '0';
            setTimeout(() => {
                floatingNavbar.style.display = 'none';
                isNavbarVisible = false;
            }, 300); // Match the transition duration
        }
    }
}

// Add the scroll event listener with a debounce mechanism
window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(toggleFloatingNavbar, 50); // Debounce delay
});
