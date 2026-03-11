document.addEventListener('DOMContentLoaded', () => {
    renderCart();
});

function renderCart() {

    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const container = document.getElementById('cart-items-list');

    if (cart.length === 0) {
        container.innerHTML = "<h3>Twój koszyk jest pusty.</h3>";
        updateTotals(0);
        return;
    }

    container.innerHTML = '';
    let subtotal = 0;

    cart.forEach((item, index) => {
        subtotal += item.price * item.quantity;
        container.innerHTML += `
            <div class="cart-product">
                <img src="${item.image || '/placeholder.png'}" alt="">
                <div class="product-details">
                    <h4>${item.name}</h4>
                    <p>${item.price} zł</p>
                </div>
                <div class="quantity-controls">
                    <button onclick="changeQty(${index}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="changeQty(${index}, 1)">+</button>
                </div>
                <div class="item-total">${(item.price * item.quantity).toFixed(2)} zł</div>
            </div>
        `;
    });

    updateTotals(subtotal);
}

function changeQty(index, delta) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    cart[index].quantity += delta;

    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);

    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

function updateTotals(subtotal) {
    const shipping = subtotal > 0 ? 15.00 : 0;
    document.getElementById('subtotal').innerText = subtotal.toFixed(2) + " zł";
    document.getElementById('grand-total').innerText = (subtotal + shipping).toFixed(2) + " zł";
}}