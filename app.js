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
// Variables para el carrito
const cartBtn = document.getElementById('cart-btn');
const cartDetails = document.getElementById('cart-details');
const cartItems = document.getElementById('cart-items');
const totalPrice = document.getElementById('total-price');

// Datos del carrito (simulados para iniciar)
let cart = [
    { name: 'Ropa Deportiva', quantity: 2, price: 15000 },
    { name: 'Street Wear', quantity: 1, price: 20000 },
    { name: 'Suplementos y Vitaminas', quantity: 3, price: 10000 },
];

// Muestra u oculta el carrito al hacer clic en el botón
cartBtn.addEventListener('click', () => {
    cartDetails.style.display = cartDetails.style.display === 'block' ? 'none' : 'block';
    renderCart();
});

// Renderiza el carrito en el HTML
function renderCart() {
    cartItems.innerHTML = ''; // Limpia el contenido previo
    let total = 0;

    cart.forEach((item) => {
        const itemElement = document.createElement('div');
        itemElement.textContent = `${item.name} (x${item.quantity}) - $${item.quantity * item.price}`;
        cartItems.appendChild(itemElement);
        total += item.quantity * item.price;
    });

    totalPrice.innerHTML = `<strong>Total: $${total}</strong>`;
}

// Inicializa el carrito al cargar la página
renderCart();
// Añade productos al carrito
function addToCart(name, price) {
    const existingItem = cart.find((item) => item.name === name);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name, quantity: 1, price });
    }

    renderCart();
}
// Selecciona el botón de finalizar compra
const finalizeBtn = document.getElementById('finalize-btn');

// Evento para abrir la página de finalizar compra
finalizeBtn.addEventListener('click', () => {
    window.location.href = 'finalizar-compra.html'; // Redirige a la nueva página
});
// Renderiza los detalles de la compra en "finalizar-compra.html"
if (window.location.pathname.endsWith('finalizar-compra.html')) {
    const purchaseDetails = document.getElementById('purchase-details');

    let total = 0;
    cart.forEach((item) => {
        const itemElement = document.createElement('div');
        itemElement.textContent = `${item.name} (x${item.quantity}) - $${item.quantity * item.price}`;
        purchaseDetails.appendChild(itemElement);
        total += item.quantity * item.price;
    });

    const totalElement = document.createElement('p');
    totalElement.innerHTML = `<strong>Total: $${total}</strong>`;
    purchaseDetails.appendChild(totalElement);
}
// Selecciona los elementos
const introScreen = document.getElementById('intro-screen');
const mainContent = document.getElementById('main-content');
const enterButton = document.getElementById('enter-button');

// Evento para ocultar la pantalla de introducción y mostrar el contenido principal
enterButton.addEventListener('click', () => {
    introScreen.style.display = 'none'; // Oculta la pantalla de introducción
    mainContent.style.display = 'block'; // Muestra el contenido principal
});
// Funcionalidad del botón de menú
const menuBtn = document.getElementById('menu-btn');
const menuContent = document.getElementById('menu-content');

menuBtn.addEventListener('click', () => {
    if (menuContent.style.display === 'block') {
        menuContent.style.display = 'none';
    } else {
        menuContent.style.display = 'block';
    }
});
// Variables
const introScreen = document.getElementById('intro-screen');
const mainContent = document.getElementById('main-content');
const enterButton = document.getElementById('enter-button');

// Evento para ocultar la pantalla de introducción y mostrar el contenido principal
enterButton.addEventListener('click', () => {
    introScreen.style.display = 'none'; // Oculta la pantalla de introducción
    mainContent.style.display = 'block'; // Muestra el contenido principal
});
enterButton.addEventListener('click', () => {
    console.log("Botón INGRESAR clickeado"); // Verifica si el evento ocurre
    introScreen.style.display = 'none'; // Oculta la pantalla de introducción
    mainContent.style.display = 'block'; // Muestra el contenido principal
});
