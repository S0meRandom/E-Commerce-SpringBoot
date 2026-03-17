async function fetchProducts(){
    const response = await fetch('/api/products');
    const products = await response.json();
    displayProducts(products);
}
async function fetchCartItems(){
    const response = await fetch('/api/cart');

    if (!response.ok) {
        document.getElementById('cart-count').innerText = "0";
        return;
    }
    const cartItems = await response.json();

    let cartCount = cartItems.length;

    document.getElementById('cart-count').innerText = cartCount;

}

function displayProducts(products){
    const grid = document.getElementById('product-grid');
    grid.innerHTML='';

    products.forEach(product=>{
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
        <h3>${product.name}</h3>
        <p class="seller-info">Sprzedawca: <strong>${product.seller?.username || 'Nieznany'}</strong></p>
        <p class="description">${product.description || 'Brak opisu'}</p>
        <div style="display: flex; justify-content: space-between; align-items:center"></div>
            <span class="price">${product.price} PLN</span>
            <button onclick="addToCart(${product.id})">Dodaj do koszyka</button> 
            <button onclick="location.href='/product-page/product-page.html?id=${product.id}'">Zobacz</button>
        `;
        grid.appendChild(card);
    });
}
async function addToCart(productId) {

    try {

        const response = await fetch(`/api/cart/add?productId=${productId}`, {
            method: 'POST'
        });


        if (response.ok) {

            alert("Dodano do koszyka.");
            fetchCartItems();
        } else if (response.status === 401 || response.status === 403) {

            alert("Musisz być zalogowany, aby dodać produkt do koszyka!");

        } else {

            alert("Coś poszło nie tak.");
            console.error("Błąd serwera:", response.status);
        }
    } catch (error) {
        console.error("Błąd zapytania fetch:", error);
    }
}
async function addProduct(){
    window.location.href="/add-product/add-product.html";
}
async function accessProfile(){
    window.location.href="/userProfile/userProfile.html";
}
async function accessCart(){
    window.location.href="/cart/cart.html";
}
fetchProducts();
fetchCartItems();