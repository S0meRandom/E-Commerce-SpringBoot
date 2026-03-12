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
async function fetchUserOffers(user_id){
    try{
        const response = await fetch(`/api/products/seller/${user_id}`)
        if(response.ok){
            const userOffers = await response.json();
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

document.addEventListener("DOMContentLoaded", ()=>{
    getUserData();
});