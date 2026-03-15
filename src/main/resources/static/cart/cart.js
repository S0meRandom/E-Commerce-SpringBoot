
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
                <div id="quantity">Ilość: ${item.quantity}</div>
                <button id="plus-quantity" onclick="changeQuantity(${item.id},${item.quantity+1})">+</button>
                <button id="minus-quantity" onclick="changeQuantity(${item.id},${item.quantity-1})">-</button>
            </div>
        `;
    });

    subtotal.innerText = `${totalSum} zł`;
    grandTotal.innerHTML = `${totalSum+15} zł`;


}
async function changeQuantity(id,newQuantity){
    try{
        const response = await fetch(`/api/cart/${id}?newQuantity=${newQuantity}`,{
            method: 'PUT'
        });
        if (response.ok) {
            fetchCartProducts();
        } else {
            console.error("Błąd podczas aktualizacji koszyka");
        }


    }catch(error){
        alert("Błąd połączenia: " + error)
    }


}
document.addEventListener('DOMContentLoaded', fetchCartProducts);
