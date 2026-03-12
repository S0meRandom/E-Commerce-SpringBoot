async function fetchProducts(){
    const response = await fetch('/api/products');
    const products = await response.json();
    displayProducts(products);
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
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];


    const existing = cart.find(p => p.id === product.id);
    if(existing) {
        existing.quantity += 1;
    } else {
        cart.push({...product, quantity: 1});
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert("Dodano do koszyka!");
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