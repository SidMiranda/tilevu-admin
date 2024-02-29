function addItem(itemId){
    let items = JSON.parse(localStorage.getItem('items')) || [];
    items.forEach((storedItem, index) => {
        if (storedItem.itemId === itemId) {
            items[index].qtd = parseInt(items[index].qtd) + 1;
        }
    });
    localStorage.setItem('items', JSON.stringify(items));
    updateTable();
}

function removeItem(itemId){
    let items = JSON.parse(localStorage.getItem('items')) || [];
    items.forEach((storedItem, index) => {
        if (storedItem.itemId === itemId) {
            if (parseInt(items[index].qtd) > 1) {
                items[index].qtd = parseInt(items[index].qtd) - 1;
            } else {
                items.splice(index, 1);
            }
        }
    });
    localStorage.setItem('items', JSON.stringify(items));
    updateTable();
}

function deleteItem(itemId){
    let items = JSON.parse(localStorage.getItem('items')) || [];
    items.forEach((storedItem, index) => {
        if (storedItem.itemId === itemId) {
            items.splice(index, 1);
        }
    });
    localStorage.setItem('items', JSON.stringify(items));
    updateTable();
}

function updateTable(){

    table = document.querySelector('.table-custom tbody');
    let itemsTable = JSON.parse(localStorage.getItem('items')) || [];
    table.innerHTML = '';
    itemsTable.forEach(item => {
        let tr = document.createElement('tr');
        let totalPrice = item.qtd * item.aleatoryPrice - item.aleatorydiscount;
        tr.innerHTML = `
            <td class="mw-50">
                <span class="bmd-form-group pdv-table-qtd">
                    <button onclick="removeItem('${item.itemId}')">-</button>
                        <input id="qtd" value="${item.qtd}" maxlength="3">
                    <button onclick="addItem('${item.itemId}')">+</button>
                </span>
            </td>
            <td class="text-left">${item.item}</td>
            <td class="text-left">${convertToBRL(item.aleatoryPrice)}</td>
            <td class="text-left">${convertToBRL(item.aleatorydiscount)}</td>
            <td class="text-left">${convertToBRL(totalPrice)}</td>
            <td class="text-left">
                <span class="mdi mdi-delete pdv-table-icon-delete" onclick="deleteItem('${item.itemId}')"></span>
            </td>
        `;
        table.appendChild(tr);
    });
    updateTotal();
}
