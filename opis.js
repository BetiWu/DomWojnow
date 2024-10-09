document.addEventListener('DOMContentLoaded', () => {
    const descriptionSections = document.querySelectorAll('.description-section');

    function animateSection(section) {
        section.classList.add('animate');
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSection(entry.target);
                observer.unobserve(entry.target); // Przestań obserwować po animacji
            }
        });
    });

    descriptionSections.forEach(section => {
        observer.observe(section);
    });
});