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
        <p class="description">${product.description || 'Brak opisu'}</p>
        <div style="display: flex; justify-content: space-between; align-items:center"></div>
            <span class="price">${product.price} PLN</span>
            <button onclick="addToCart(${product.id})">Dodaj do koszyka</button> 
        `;
        grid.appendChild(card);
    });
}
let count = 0;
function addToCart(id){
    count++;
    document.getElementById('cart-count').innerText= count;
    alert("Dodano produkt o ID: " + id + " do koszyka.")
}
async function addProduct(){
    const productName = prompt("Podaj nazwe produktu");
    const productDescription = prompt("Wpisz krótki opis produktu");
    const productPrice = parseFloat(prompt("Podaj cene produktu"));
    const productQuantity = parseInt(prompt("Podaj ilość na magazynie"));

    const product = {
        name: productName,
        description: productDescription,
        price: productPrice,
        stock_quantity: productQuantity
    };
    if(productName && productDescription && productPrice && productQuantity){
        const response = await fetch('/api/products',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)

        });
        if(response.ok){
            alert("Dodano produkt.")
            fetchProducts();
        }else{
            alert("Błąd: " + response.status);
        }
    }else{
        alert("Wszystkie pola muszą zostać wypełnione.")
    }


}
fetchProducts();