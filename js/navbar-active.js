// navbar-active.js

// Function to set the active class based on the current hash
function setActiveClassByHash() {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentHash = window.location.hash || '#home'; // Default to #home if no hash

    // Remove active class from all links
    navLinks.forEach(link => link.classList.remove('active'));

    // Find the link with the matching hash and add active class
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentHash) {
            link.classList.add('active');
        }
    });
}

// Function to update active class when a link is clicked
function updateActiveClassOnClick(event) {
    const navLinks = document.querySelectorAll('.nav-link');

    // Remove active class from all links
    navLinks.forEach(link => link.classList.remove('active'));

    // Add active class to the clicked link
    event.currentTarget.classList.add('active');
}

// Attach click event listeners to each nav link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', updateActiveClassOnClick);
});

// Run the function to set the active class based on the URL hash when the page loads
setActiveClassByHash();

// Update the active class whenever the hash changes
window.addEventListener('hashchange', setActiveClassByHash);

console.log("navbar-active.js is running");
