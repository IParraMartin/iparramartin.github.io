// filepath: scripts.js
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navbar links
    document.querySelectorAll('.navbar a').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: 'smooth'
        });
      });
    });
  });