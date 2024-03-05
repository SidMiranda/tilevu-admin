function addItem(itemId){
    let accounts = JSON.parse(localStorage.getItem('accounts')) || {};
    let accountActiveId = document.getElementById('account-id').value;
    let account = accounts[accountActiveId] || { items: []};

    if(accounts.hasOwnProperty(accountActiveId)){
        let accountItems = accounts[accountActiveId].items;
        accountItems.forEach((storedItem, index) => {
            if (storedItem.itemId == itemId) {
                accountItems[index].qtd = parseInt(accountItems[index].qtd) + 1;
            }
        });
        accounts[accountActiveId] = account;
        localStorage.setItem('accounts', JSON.stringify(accounts));
        updateTable();
    }
}

function removeItem(itemId){
    let accounts = JSON.parse(localStorage.getItem('accounts')) || {};
    let accountActiveId = document.getElementById('account-id').value;
    let account = accounts[accountActiveId] || { items: []};

    if(accounts.hasOwnProperty(accountActiveId)){
        let accountItems = accounts[accountActiveId].items;
        accountItems.forEach((storedItem, index) => {
            if (storedItem.itemId == itemId) {
                accountItems[index].qtd = parseInt(accountItems[index].qtd) - 1;
                if(accountItems[index].qtd <= 0){
                    accountItems.splice(index, 1);
                }
            }
        });
        accounts[accountActiveId] = account;
        localStorage.setItem('accounts', JSON.stringify(accounts));
        updateTable();
    }
}

function deleteItem(itemId){
    let accounts = JSON.parse(localStorage.getItem('accounts')) || {};
    let accountActiveId = document.getElementById('account-id').value;
    let account = accounts[accountActiveId] || { items: []};

    if(accounts.hasOwnProperty(accountActiveId)){
        let accountItems = accounts[accountActiveId].items;
        accountItems.forEach((storedItem, index) => {
            if (storedItem.itemId == itemId) {
                accountItems.splice(index, 1);
            }
        });
        accounts[accountActiveId] = account;
        localStorage.setItem('accounts', JSON.stringify(accounts));
        updateTable();
    }
}

function updateTable(){

    table = document.querySelector('.table-custom tbody');
    let accounts = JSON.parse(localStorage.getItem('accounts')) || {};
    let accountActiveId = document.getElementById('account-id').value;

    if(accounts.hasOwnProperty(accountActiveId)){
        let accountItems = accounts[accountActiveId].items;

        table.innerHTML = '';
        accountItems.forEach(item => {
            let tr = document.createElement('tr');
            let totalPrice = item.qtd * item.sellPrice - item.aleatorydiscount;
            tr.innerHTML = `
                <td class="mw-50">
                    <span class="bmd-form-group pdv-table-qtd">
                        <button onclick="removeItem('${item.itemId}')">-</button>
                            <input id="qtd" value="${item.qtd}" maxlength="3">
                        <button onclick="addItem('${item.itemId}')">+</button>
                    </span>
                </td>
                <td class="text-left">${item.itemName}</td>
                <td class="text-left">${convertToBRL(item.sellPrice)}</td>
                <td class="text-left">${convertToBRL(item.aleatorydiscount)}</td>
                <td class="text-left">${convertToBRL(totalPrice)}</td>
                <td class="text-left">
                    <span class="mdi mdi-delete pdv-table-icon-delete" onclick="deleteItem('${item.itemId}')"></span>
                </td>
            `;
            table.appendChild(tr);
        });
    }
    updateTotal();
}
