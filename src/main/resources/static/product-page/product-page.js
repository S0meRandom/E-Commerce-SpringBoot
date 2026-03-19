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

    const sellerName = (productData.seller && productData.seller.username) ? productData.seller.username : "Nieznany sprzedawca";
    document.getElementById('product-name').innerText = productData.name;
    document.getElementById('product-price').innerText = "Cena: " + productData.price;
    document.getElementById('product-stock').innerText = "Ilość w magazynie: " + productData.stock_quantity;
    document.getElementById('product-seller').innerText = "Sprzedawca: " + sellerName;
    document.getElementById('product-description').innerText = productData.description;

    const imageSection = document.getElementById('image-section');
    const correctPath = productData.imageUrl.startsWith('/')
        ? productData.imageUrl
        : '/' + productData.imageUrl;
    if(correctPath){
        imageSection.innerHTML = `<img src="${correctPath}" alt="${productData.name}" style="max-width: 100%;">`;
    }else{
        imageSection.innerText = "Brak zdjęcia";
    }

}
async function buyNow(){
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    const response = await fetch(`/api/cart/add?productId=${productId}`, {
        method: 'POST'
    });
    if(response.ok){
        window.location.href="/checkout/checkout.html";
    }else{
        alert("Błąd w trakcie kupowania");
    }

}
async function addToCart(){
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    const response = await fetch(`/api/cart/add?productId=${productId}`, {
        method: 'POST'
    });
    if(response.ok){
        alert("Dodano przedmiot do koszyka");
    }

}
