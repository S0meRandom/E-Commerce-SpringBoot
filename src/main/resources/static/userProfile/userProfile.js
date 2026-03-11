async function getUserData(){
    try{
        const response = await fetch("/api/auth/me")
        if(response.ok){
            const userData = await response.json();

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
getUserData();