document.addEventListener("DOMContentLoaded",async () => {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id');

        if (productId) {
            const response = await fetch(`/api/products/${productId}`);
            const productData = await response.json();
            renderPage(productData);
        }else{
            alert("Nie znaleziono produktu");
        }

    });


function renderPage(productData){
    document.getElementById('product-name').innerText = productData.name;
    document.getElementById('product-price').innerText = "Cena: " + productData.price;
    document.getElementById('product-stock').innerText = "Ilość w magazynie: " + productData.stock_quantity;
    document.getElementById('product-seller').innerText = "Sprzedawca: " + productData.seller.username;
    document.getElementById('product-description').innerText = productData.description;

}
