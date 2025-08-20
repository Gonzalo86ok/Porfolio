// Script compartido para el menú hamburguesa

document.addEventListener('DOMContentLoaded', function() {
    // Menú hamburguesa
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    const overlay = document.querySelector('.nav-overlay');

    // Función para abrir/cerrar el menú
    function toggleMenu() {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
        overlay.classList.toggle('active');
    }

    // Función para cerrar el menú
    function closeMenu() {
        hamburger.classList.remove('active');
        nav.classList.remove('active');
        overlay.classList.remove('active');
    }

    // Event listeners
    hamburger.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', closeMenu);

    // Cerrar menú al hacer clic en un enlace
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Cerrar menú con la tecla Escape
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeMenu();
        }
    });

    // Cerrar menú al hacer scroll (opcional)
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (nav.classList.contains('active')) {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(closeMenu, 100);
        }
    });
});
