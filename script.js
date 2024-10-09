document.addEventListener('DOMContentLoaded', () => {
    const mainTitle = document.getElementById('main-title');
    
    // Dodaj nasłuchiwanie na kliknięcie na tytuł
    mainTitle.addEventListener('click', () => {
        window.location.href = 'odkryj.html'; // Użyj do przeniesienia do odkryj.html
    });
    
    // Dodaj efekt hover
    mainTitle.addEventListener('mouseenter', () => {
        mainTitle.classList.add('hovered'); // Dodanie klasy hover
    });

    mainTitle.addEventListener('mouseleave', () => {
        mainTitle.classList.remove('hovered'); // Usunięcie klasy hover
    });
});