document.getElementById('login-form').addEventListener('submit', async (e)=>{
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;


    const params = new URLSearchParams();
    params.append('username',username);
    params.append('password',password);


    try {
        const response = await fetch('/login',{
            method: 'POST',
            body: params,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });

        if(response.redirected){
            window.location.href = response.url;
        }}catch(error){
        console.error("Błąd logowania: ", error);
    }

});