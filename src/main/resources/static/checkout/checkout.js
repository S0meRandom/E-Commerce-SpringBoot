async function fetchCartProducts(){
    const response = await fetch("/api/cart");

    if(response.ok){
        const cartItems = await response.json();
        calculateValue(cartItems);
    }else{
        alert("Błąd w trakcie pobierania danych koszyka");
    }
}
function calculateValue(cartItems){
    let sum = 0;
    const shippingFee = 15;
    cartItems.forEach(cartItem=>{
        const product = cartItem.product;
        const itemTotal = product.price* cartItem.quantity;
        sum += itemTotal;
    });
    document.getElementById('subtotal').innerText = sum;
    document.getElementById('grand-total').innerText = sum + shippingFee;
}
async function createOrders(event){
    if(event) event.preventDefault();
    const order = {
        clientCred : document.getElementById('name').value,
        postCode : document.getElementById('zip').value,
        city : document.getElementById('city').value,
        adress : document.getElementById('address').value

    }

    const response = await fetch("/api/orders",{
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body : JSON.stringify(order)

    });
    if(response.ok){
        alert("Utworzono zamówienie");
        window.location.href="/index/index.html";
    }else{
        alert("Coś poszło nie tak");
    }

}
fetchCartProducts();
