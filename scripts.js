// Smooth scrolling to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Select the toggle button and the navigation menu
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');

// Add click event listener to the toggle button
navToggle.addEventListener('click', () => {
    navList.classList.toggle('active'); // Toggle the 'active' class
});