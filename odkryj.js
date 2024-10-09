document.addEventListener('DOMContentLoaded', () => {
    const descriptionToggles = document.querySelectorAll('.toggle-description');
    const galleryToggles = document.querySelectorAll('.toggle-gallery');
    const contactToggles = document.querySelectorAll('.toggle-contact');
    const techDetailToggles = document.querySelectorAll('.toggle-tech-details');
    const carouselInner = document.querySelector('.carousel-inner');
    const images = document.querySelectorAll('.gallery-image');
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const caption = document.getElementById('caption');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;

    descriptionToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            const description = toggle.nextElementSibling;
            description.style.display = description.style.display === 'none' ? 'block' : 'none';
        });
    });

    galleryToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            const gallery = toggle.nextElementSibling;
            gallery.style.display = gallery.style.display === 'none' ? 'block' : 'none';
        });
    });

    contactToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            const contact = toggle.nextElementSibling;
            contact.style.display = contact.style.display === 'none' ? 'block' : 'none';
        });
    });

    techDetailToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            const techDetails = toggle.closest('.description').querySelector('.tech-details');
            techDetails.style.display = techDetails.style.display === 'none' ? 'block' : 'none';
        });
    });

    // Wyświetlanie modalu z obrazkiem
    images.forEach((image, index) => {
        image.addEventListener('click', () => {
            modal.style.display = 'block';
            modalImage.src = image.src;
            caption.innerText = image.alt;
            currentIndex = index; // Ustalamy indeks bieżącego zdjęcia
        });
    });

    // Zmienianie obrazka w modalu
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        updateModalImage();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        updateModalImage();
    });

    // Funkcja aktualizująca obrazek w modalu
    function updateModalImage() {
        modalImage.src = images[currentIndex].src;
        caption.innerText = images[currentIndex].alt;

        // Logika przesunięcia karuzeli
        const offset = -currentIndex * 100; // Przesunięcie w procentach
        carouselInner.style.transform = `translateX(${offset}%)`;
    }

    // Zamknięcie modalu
    document.querySelector('.close').addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Zamknięcie modalu przy kliknięciu poza obrazkiem
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});