// Fonction pour le défilement fluide vers une section
function scrollToSection(sectionID) {
    document.querySelector(sectionID).scrollIntoView({ behavior: 'smooth' });
}

// Animation du formulaire de contact
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Message sent! Thank you for reaching out.');
    // Réinitialise le formulaire après soumission
    this.reset();
});

// Animation pour les éléments de la galerie de portfolio
const portfolioItems = document.querySelectorAll('.portfolio-item');
portfolioItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'scale(1.05)';
    });
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'scale(1)';
    });
});
