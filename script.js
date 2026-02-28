// Dark/Light toggle
const toggle = document.getElementById('themeToggle');
toggle.addEventListener('click', () => {
    document.body.dataset.theme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
});

// Contact form submission
document.getElementById('contactForm').addEventListener('submit', function(e){
    e.preventDefault();
    document.getElementById('formMessage').textContent = "Thanks! Your message has been sent.";
    this.reset();
});
