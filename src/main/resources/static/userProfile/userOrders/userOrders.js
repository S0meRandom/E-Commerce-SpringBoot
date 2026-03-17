async function fetchUserOrders(){
    const response = await fetch("/api/orders");

    if(response.ok){
        const userOrders = await response.json();
        renderOrders(userOrders);
    }else{
        alert("Wystąpił bład w trakcie pobierania zamówień")
    }
}
function renderOrders(orders){
    const loading = document.getElementById('loading');
    const table = document.getElementById('orders-table');
    const body = document.getElementById('orders-body');
    const empty = document.getElementById('empty-cart');

    loading.style.display = 'none';

    if(orders.length===0){
        empty.style.display = 'block';
        return;
    }
    table.style.display = 'table';
    body.innerHTML = orders.map(order => `
        <tr>
            <td>#${order.id}</td>
            <td>
                <div class="product-info">
                    <strong>${order.productName}</strong>
                </div>
            </td>
            <td>${order.quantity}</td>
            <td class="price">${order.price.toFixed(2)} zł</td>
            <td><span class="status-badge ${order.status.toLowerCase()}">${order.status}</span></td>
            <td>${order.adress}, ${order.city}</td>
        </tr>
    `).join('');
}
fetchUserOrders();