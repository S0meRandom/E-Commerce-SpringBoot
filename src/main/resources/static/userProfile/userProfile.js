async function getUserData(){
    try{
        const response = await fetch("/api/auth/me")
        if(response.ok){
            const userData = await response.json();
            fetchUserOffers(userData.id);

            document.getElementById('profile-username').innerText = userData.username;
            document.getElementById('profile-email').innerText = userData.email;
        }
    }catch(error){
        console.error("Błąd pobierania danych"+error)
    }
}
function accessUserOffers(){
    window.location.href = "/userProfile/userOffers/userOffers.html";
}
async function logout() {
    try {
        const response = await fetch('/api/logout', {
            method: 'POST'
        });
        if(response.ok){
            localStorage.clear();
            sessionStorage.clear();
            window.location.href="/login/login.html";

        }else{
            alert("Błąd wylogowania");
        }

    } catch (error) {
        alert("Błąd sieci: " + error)
    }

}
async function fetchUserOffers(user_id){
    try{
        const response = await fetch(`/api/products/seller/${user_id}`)
        if(response.ok){
            const userOffers = await response.json();
            const userOffersCount = userOffers.length;
            document.getElementById('count-items').innerText = userOffersCount;
        }

    }catch(error){

    }

}
function accessUserOrders(){
    window.location.href="userOrders/userOrders.html";
}

getUserData();
