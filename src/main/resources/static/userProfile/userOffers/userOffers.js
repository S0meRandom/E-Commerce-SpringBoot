async function getUserData(){
    try{
        const response = await fetch("/api/auth/me")
        if(response.ok){
            const userData = await response.json();
            const user_id = userData.id;
            await fetchUserOffers(user_id);

        }
    }catch(error){
        console.error("Błąd pobierania danych"+error)
    }
}

let userOffers = [];
async function fetchUserOffers(user_id){
    try{
        const response = await fetch(`/api/products/seller/${user_id}`)
        if(response.ok){
            userOffers = await response.json();
            const userOffersCount = userOffers.length;
            document.getElementById('count-value').innerText = userOffersCount;
            document.getElementById('total-price').innerText = `${calculateValue(userOffers)} zł`;
            renderOffers(userOffers);
        }

    }catch(error){
    }

}
function renderOffers(userOffers){
    const container = document.getElementById("offers-container");
    container.innerHTML = "";

    userOffers.forEach(offer =>{
        const productHTML=`
        <div class="offer-card">
        <h3>${offer.name}</h3>
        <p>Cena: ${offer.price} zł</p>
        <p>${offer.description}</p>
        <button onclick="deleteProduct(${offer.id})">Usuń Oferte</button>
        <button onclick="location.href='/product-page/product-page.html?id=${offer.id}'">Zobacz Oferte</button>
        <button onclick="showModal(${offer.id})">Edytuj Oferte</button>
        </div>`;

        container.innerHTML += productHTML;
    })

}
async function deleteProduct(id) {
    if (!confirm("Czy na pewno chcesz usunąć ten produkt?")) return;

    const res = await fetch(`/api/products/${id}`, { method: 'DELETE' });
    if (res.ok) {
        alert("Pomyślnie usunięto ofertę");

    } else {
        alert("Błąd podczas usuwania produktu.");
    }
}
function calculateValue(offers){
    let sum = 0;
    offers.forEach(offer=>{
        sum += offer.price;

    })
    return sum;
}

function showModal(offerId){
    const modal = document.getElementById("editModal");
    modal.style.display = "block";
    const offer = userOffers.find(o=>String(offerId)===String(o.id));
    document.getElementById('modalPrice').value = offer.price;
    document.getElementById('modalName').value = offer.name;
    document.getElementById('modalDescription').value = offer.description;
    document.getElementById('modalStock_quantity').value = offer.stock_quantity;
    document.getElementById('modalSave-btn').onclick = () =>editUserOffer(offerId);

}
function closeModal(){
    const modal= document.getElementById('editModal');
    modal.style.display = "none";
}
async function editUserOffer(id) {
    const offer = {
        price: document.getElementById('modalPrice').value,
        name: document.getElementById('modalName').value,
        description: document.getElementById('modalDescription').value,
        stock_quantity: document.getElementById('modalStock_quantity').value
    }

    const response = await fetch(`/api/products/${id}`,{
        method: 'PUT',
        body : JSON.stringify(offer),
        headers: {'Content-Type': 'application/json'}
    });
    if(response.ok){
        alert("Zapisano zmiany oferty");
    }else{
        alert("Błąd w trakcie zapisywania oferty");
    }

}

document.addEventListener("DOMContentLoaded", ()=>{
    getUserData();
});

