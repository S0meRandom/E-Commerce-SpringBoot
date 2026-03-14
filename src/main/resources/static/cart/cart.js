
async function fetchCartProducts(){

        const response = await fetch("/api/cart");
        const products = await response.json();
        renderCart(products);

}

function renderCart(products) {
    const container = document.getElementById('cart-items-list');
    const subtotal = document.getElementById('subtotal');
    const grandTotal = document.getElementById('grand-total');
    const shippingFee = 15;

    if (products.length === 0) {
        container.innerHTML = "<h3>Twój koszyk jest pusty.</h3>";
        subtotal.innerText = "0.00 zł";
        grandTotal.innerText = "0.00 zł";
        return;
    }
    let totalSum = 0;

    container.innerHTML = '';
    products.forEach(item => {
        const product = item.product;
        const itemTotal = product.price* item.quantity;
        totalSum += itemTotal;


        container.innerHTML += `
            <div class="cart-product">
                <img src="${product.image || '/placeholder.png'}" alt="">
                <div class="product-details">
                    <h4>${product.name}</h4>
                    <p>${product.price} zł</p>
                </div>
                <div>Ilość: ${item.quantity}</div>
            </div>
        `;
    });

    subtotal.innerText = `${totalSum} zł`;
    grandTotal.innerHTML = `${totalSum+15} zł`;


}
document.addEventListener('DOMContentLoaded', fetchCartProducts);
