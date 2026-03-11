document.getElementById('add-product-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const productData = {
        name: document.getElementById('name').value,
        price: parseFloat(document.getElementById('price').value),
        description: document.getElementById('description').value,
        stock_quantity: parseInt(document.getElementById('stock_quantity').value)
    };


    const msgDiv = document.getElementById('msg');

    try {
        const response = await fetch('/api/products', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(productData)
        });

        if (response.ok) {
            msgDiv.className = "alert-success";
            msgDiv.innerText = "Produkt został pomyślnie wystawiony!";
            document.getElementById('add-product-form').reset();
            setTimeout(() => window.location.href = 'index.html', 2000);
        } else {
            msgDiv.className = "alert-notsuccess";
            msgDiv.innerText = "Błąd: Nie udało się dodać produktu.";
        }
    } catch (err) {
        msgDiv.className = "alert-notsuccess";
        msgDiv.innerText = "Błąd połączenia z serwerem.";
    }
});