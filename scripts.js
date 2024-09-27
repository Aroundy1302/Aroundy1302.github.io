// Smooth scroll to a section
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Handling form submission
const form = document.getElementById('contact-form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    alert(`Thank you, ${form.name.value}! Your message has been sent.`);
    form.reset();
});

function updateData() {
    fetch('https://206.189.146.138/api/sensors')
    .then(response => response.json())
    .then(data => {
      document.getElementById('timestamp').textContent = data.timestamp;
      document.getElementById('temperature').textContent = data.temperature.toFixed(2);
      document.getElementById('humidity').textContent = data.humidity.toFixed(2);
      document.getElementById('luxsensor').textContent = data.luxsensor.toFixed(2);
      document.getElementById('motion').textContent = data.motion;
    });
  }
  setInterval(updateData, 1000);