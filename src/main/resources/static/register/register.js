document.getElementById('register-form').addEventListener('submit',async(e)=>{
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;

    const response = await fetch('/api/auth/register',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            username:username,
            password:password,
            email:email
        })
    });
    const msgDiv = document.getElementById('msg');
    if(response.ok){
        msgDiv.className = "alert-success";
        msgDiv.innerText = "Konto zostało założone. Za chwile zostaniesz przekierowany";
        setTimeout(()=> window.location.href='/login/login.html',1000);
    }
    else{
        msgDiv.className = "alert-notsuccess";
        msgDiv.innerText = await response.text();

    }

})