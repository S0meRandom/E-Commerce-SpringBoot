document.getElementById('add-product-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const image = document.getElementById('file');
    const msgDiv = document.getElementById('msg');
    const formData = new FormData();

    if(image.files.length>0){
        formData.append('file',image.files[0]);
    }

    formData.append('name',document.getElementById('name').value);
    formData.append('price',document.getElementById('price').value);
    formData.append('description',document.getElementById('description').value);
    formData.append('stock_quantity',document.getElementById('stock_quantity').value);

    try {
        const response = await fetch('/api/products', {
            method: 'POST',
            body : formData
        });

        if (response.ok) {
            msgDiv.className = "alert-success";
            msgDiv.innerText = "Produkt został pomyślnie wystawiony!";
            document.getElementById('add-product-form').reset();
            setTimeout(() => window.location.href = '/index/index.html', 2000);
        } else {
            msgDiv.className = "alert-notsuccess";
            msgDiv.innerText = "Błąd: Nie udało się dodać produktu.";
        }
    } catch (err) {
        msgDiv.className = "alert-notsuccess";
        msgDiv.innerText = "Błąd połączenia z serwerem.";
    }
});