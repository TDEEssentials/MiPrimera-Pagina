// Selecciona el botón y el contenido del menú
const menuBtn = document.getElementById('menu-btn');
const menuContent = document.getElementById('menu-content');

// Alterna la visibilidad del menú al hacer clic en el botón
menuBtn.addEventListener('click', () => {
    menuContent.style.display = menuContent.style.display === 'block' ? 'none' : 'block';
});

// Cierra el menú si haces clic fuera de él
document.addEventListener('click', (event) => {
    if (!menuBtn.contains(event.target) && !menuContent.contains(event.target)) {
        menuContent.style.display = 'none'; // Oculta el menú
    }
});
