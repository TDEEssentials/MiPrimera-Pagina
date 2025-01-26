// VARIABLES GENERALES
const introScreen = document.getElementById('intro-screen');
const mainContent = document.getElementById('main-content');
const enterButton = document.getElementById('enter-button');
const menuBtn = document.getElementById('menu-btn');
const menuContent = document.getElementById('menu-content');
const cartBtn = document.getElementById('cart-btn');
const cartDetails = document.getElementById('cart-details');
const cartItems = document.getElementById('cart-items');
const totalPrice = document.getElementById('total-price');
const finalizeBtn = document.getElementById('finalize-btn');

// DATOS DEL CARRITO
let cart = [
    { name: 'Ropa Deportiva', quantity: 2, price: 15000 },
    { name: 'Street Wear', quantity: 1, price: 20000 },
    { name: 'Suplementos y Vitaminas', quantity: 3, price: 10000 },
];

// FUNCIONALIDAD DEL BOTÓN INGRESAR
enterButton.addEventListener('click', () => {
    console.log("Botón INGRESAR clickeado"); // Depuración
    introScreen.style.display = 'none'; // Oculta la pantalla de introducción
    mainContent.style.display = 'block'; // Muestra el contenido principal
});

// Funcionalidad del menú desplegable
const menuBtn = document.getElementById('menu-btn');
const menuContent = document.getElementById('menu-content');

menuBtn.addEventListener('click', () => {
    menuContent.style.display = menuContent.style.display === 'block' ? 'none' : 'block';
});

// Cierra el menú si haces clic fuera de él
document.addEventListener('click', (event) => {
    if (!menuBtn.contains(event.target) && !menuContent.contains(event.target)) {
        menuContent.style.display = 'none'; // Oculta el menú
    }
});

// FUNCIONALIDAD DEL CARRITO
cartBtn.addEventListener('click', () => {
    cartDetails.style.display = cartDetails.style.display === 'block' ? 'none' : 'block';
    renderCart();
});

// Renderiza el contenido del carrito
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

// Agregar productos al carrito
function addToCart(name, price) {
    const existingItem = cart.find((item) => item.name === name);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name, quantity: 1, price });
    }

    renderCart();
}

// 4. FINALIZAR COMPRA
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

finalizeBtn?.addEventListener('click', () => {
    window.location.href = 'finalizar-compra.html';
});


