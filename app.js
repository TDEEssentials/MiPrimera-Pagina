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

// 1. FUNCIONALIDAD DEL BOTÓN INGRESAR
if (enterButton) {
    enterButton.addEventListener('click', () => {
        console.log("Botón INGRESAR clickeado"); // Depuración
        introScreen.style.display = 'none'; // Oculta la pantalla de introducción
        mainContent.style.display = 'block'; // Muestra el contenido principal
    });
}

// 2. FUNCIONALIDAD DEL MENÚ DESPLEGABLE
if (menuBtn && menuContent) {
    menuBtn.addEventListener('click', () => {
        menuContent.style.display = menuContent.style.display === 'block' ? 'none' : 'block';
    });

    // Cierra el menú si haces clic fuera de él
    document.addEventListener('click', (event) => {
        if (!menuBtn.contains(event.target) && !menuContent.contains(event.target)) {
            menuContent.style.display = 'none'; // Oculta el menú
        }
    });
}

// 3. FUNCIONALIDAD DEL CARRITO
if (cartBtn && cartDetails) {
    cartBtn.addEventListener('click', () => {
        cartDetails.style.display = cartDetails.style.display === 'block' ? 'none' : 'block';
        renderCart();
    });
}

// Renderiza el contenido del carrito
function renderCart() {
    if (!cartItems || !totalPrice) return; // Verifica si los elementos existen
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
if (finalizeBtn) {
    finalizeBtn.addEventListener('click', () => {
        window.location.href = 'finalizar-compra.html';
    });
}

// Renderizar los detalles de la compra en "finalizar-compra.html"
if (window.location.pathname.endsWith('finalizar-compra.html')) {
    const purchaseDetails = document.getElementById('purchase-details');
    if (purchaseDetails) {
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
}


