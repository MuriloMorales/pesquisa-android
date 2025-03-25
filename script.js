document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const navToggle = document.getElementById('nav-toggle');
    const sections = document.querySelectorAll('section');
    const menuLinks = document.querySelectorAll('nav ul li a');

    // Inicializa a primeira seção como visível
    sections.forEach((section, index) => {
        section.style.display = index === 0 ? 'block' : 'none';
    });

    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            // Oculta todas as seções
            sections.forEach(section => {
                section.style.display = 'none';
            });

            // Exibe a seção selecionada
            targetSection.style.display = 'block';

            // Rola suavemente para a seção
            window.scrollTo({
                top: targetSection.offsetTop - 60,
                behavior: 'smooth'
            });

            menuIcon.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
});