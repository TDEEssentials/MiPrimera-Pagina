// Selecciona el botón y el contenido del menú
const menuBtn = document.getElementById('menu-btn');
const menuContent = document.getElementById('menu-content');

// Alterna la visibilidad del menú al hacer clic en el botón
menuBtn.addEventListener('click', () => {
    if (menuContent.style.display === 'block') {
        menuContent.style.display = 'none';
    } else {
        menuContent.style.display = 'block';
    }
});