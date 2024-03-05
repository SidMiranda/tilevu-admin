
document.getElementById('search-item').focus();
let  searchItem = document.getElementById('search-item');
let  autoComplete = document.getElementById('auto-complete');
let  autoCompleteList = document.getElementById('auto-complete-list');
let  items = document.querySelectorAll('#auto-complete-list li');
let  btnAdd = document.getElementById('btn-add');
let  btnRemove = document.getElementById('btn-remove');
let  inputQtd = document.getElementById('input-qtd');
let  btnAddItem = document.getElementById('btn-add-item');
let  btnTopAccount = document.querySelector('.pdv-top-account');
let  changeAccount = document.getElementById('change-account');
let  inputNewAccount = document.getElementById('input-new-account');
let  btnNewAccount = document.getElementById('btn-new-account');

// criar padrões de classes comuns em css

// alterar nome das variaveis e ids/class das tags
// btn
// input
// box
// lbl

// function createAccount(accountName)
// function removeAccount(accountName)
// function updateAccount()
// function updateAccountList()
// function totalSumAccount(accountName)
// function addAccountItem(accountName, item[])
// function getAccountItems(accountName)
// function getAccountsList()

// renomear funções
// criar testes

let selectedItemIndex = -1;

function saveItemLocalStorage(item) {
    let productData = JSON.parse(item);
    let itemId = productData.id;
    let itemName = productData.name;
    let qtd = inputQtd.value;
    let sellPrice = productData.sell_price;
    let aleatorydiscount = Math.floor(Math.random() * sellPrice);

    let accountActiveId = document.getElementById('account-id').value;
    let accounts = JSON.parse(localStorage.getItem('accounts')) || {};
    let account = accounts[accountActiveId] || { items: []};

    let itemExists = false;

    account.items.forEach((storedItem, index) => {
        if (storedItem.itemId === itemId) {
            account.items[index].qtd = parseInt(account.items[index].qtd) + parseInt(qtd);
            itemExists = true;
        }
    });

    if (!itemExists) {
        account.items.push({ itemId, itemName, qtd, sellPrice, aleatorydiscount });
    }

    accounts[accountActiveId] = account;
    localStorage.setItem('accounts', JSON.stringify(accounts));

    searchItem.value = '';
    inputQtd.value = 1;

    selectedItemIndex = -1;
    updateTable();

}

function updateSelectedItem() {
    items.forEach((item, index) => {
        if (index === selectedItemIndex) {
            item.classList.add('item-selected');
        } else {
            item.classList.remove('item-selected');
        }
    });
}

function handleEnter() {
    if (items.length > 0) {
        searchItem.value = items[selectedItemIndex].innerText;
        autoComplete.style.display = 'none';
        saveItemLocalStorage(items[selectedItemIndex].dataset.value);
        // saveItemLocalStorageAccount(items[selectedItemIndex].dataset.value);
        searchItem.focus();

    }
}

function loadProducts() {
    fetch('http://127.0.0.1:8000/api/product/list')
        .then(response => response.json())
        .then(data => {
            autoCompleteList.innerHTML = '';
            data.forEach(product => {
                let li = document.createElement('li');
                li.innerText = product.name;
                li.dataset.value = JSON.stringify(product);
                autoCompleteList.appendChild(li);
            });
            items = document.querySelectorAll('#auto-complete-list li');
        });
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

(function($) {
    // 'use strict';
    $(function() {
      $('#showPayments').avgrund({
        height:350,
        holderClass: 'custom',
        showClose: true,
        showCloseText: 'x',
        onBlurContainer: '.container-scroller',
        template: '<div">' +
          '<style>' +
            '.btn-payment{color:white!important;font-size:1rem; padding:15px 0 15px 5}' +
            '.btn-payment:hover{background-color:#F43E41!important;}' +
          '</style>' +
          '<a href="#" class="btn btn-primary btn-block text-left btn-payment">[1] Cartão de Credito</a><br>' +
          '<a href="#" class="btn btn-primary btn-block text-left btn-payment">[2] Cartão de Débito</a><br>' +
          '<a href="#" class="btn btn-primary btn-block text-left btn-payment">[3] PIX</a><br>' +
          '<a href="#" class="btn btn-primary btn-block text-left btn-payment">[4] Dinheiro</a><br>' +
          '</div>' +
          '<div class="text-center">' +
        //   '<a href="#" target="_blank" class="btn btn-success mr-2">Great!</a>' +
        //   '<a href="#" target="_blank" class="btn btn-light">Cancel</a>' +
          '</div>'
      });
    })
  })(jQuery);

function updateTotal(){
    updateItemsCount();
    updateDiscount();
    upadateTotalPrice();

    updateAccountList();

}

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

function updateItemsCount(){
    let accounts = JSON.parse(localStorage.getItem('accounts')) || {};
    let accountActiveId = document.getElementById('account-id').value;

    if(accounts.hasOwnProperty(accountActiveId)){
        let accountItems = accounts[accountActiveId].items;
        let itemsCount = 0;
        accountItems.forEach((storedItem, index) => {
            itemsCount += parseInt(storedItem.qtd);
        });
        document.querySelector('.pdv-items-count').innerHTML = "Itens " + itemsCount;
    }

}

function updateDiscount(){
    let accounts = JSON.parse(localStorage.getItem('accounts')) || {};
    let accountActiveId = document.getElementById('account-id').value;

    if(accounts.hasOwnProperty(accountActiveId)){
        let accountItems = accounts[accountActiveId].items;
        let discount = 0;
        accountItems.forEach((storedItem, index) => {
            discount += storedItem.aleatorydiscount;
        });
        document.querySelector('.pdv-items-discount').innerHTML = "Desconto " + convertToBRL(discount);
    }
}

function upadateTotalPrice(){
    let accounts = JSON.parse(localStorage.getItem('accounts')) || {};
    let accountActiveId = document.getElementById('account-id').value;
    let totalPrice = 0;
    let discount = 0;
    if(accounts.hasOwnProperty(accountActiveId)){
        let accountItems = accounts[accountActiveId].items;
        accountItems.forEach(item => {
            discount += item.aleatorydiscount;
            totalPrice += item.qtd * item.sellPrice - item.aleatorydiscount;
        });
        document.querySelector('.pdv-total-price').innerHTML = "Total " + convertToBRL(totalPrice);
    }
}

function cancelOrder(){
    if(confirm('Deseja cancelar o pedido?')){
        localStorage.removeItem('items');
        updateTable();
    }
}

function totalSumAccount(accountName){
    let accounts = JSON.parse(localStorage.getItem('accounts')) || {};
    let account = accounts[accountName] || { items: []};
    let totalPrice = 0;
    let discount = 0;
    account.items.forEach(item => {
        discount += item.aleatorydiscount;
        totalPrice += item.qtd * item.sellPrice - item.aleatorydiscount;
    });
    return convertToBRL(totalPrice);
}

function updateAccountList(){

    table = document.querySelector('#change-account-list');

    let accounts = JSON.parse(localStorage.getItem('accounts')) || {};
    let accountNames = Object.keys(accounts);

    table.innerHTML = '';
    accountNames.forEach(accountName => {
        let tr = document.createElement('div');
        tr.innerHTML = `
            <div class="to-do-list-item">
                <a href="#" onclick="changeActiveAccount('${accountName}')" style="text-decoration: none;">
                    <h5 class="mb-0 font-weight-normal">${accountName}</h5>
                    <p class="mb-0 tx-12 text-muted">${totalSumAccount(accountName)}</p>
                </a>
            </div>
        `;
        table.appendChild(tr);
    });
}

function addAccountLocalStorage(newAccount){
    let accounts = JSON.parse(localStorage.getItem('accounts')) || {};
    let account = accounts[newAccount] || { items: []};
    accounts[newAccount] = account;
    localStorage.setItem('accounts', JSON.stringify(accounts));
}

function changeActiveAccount(accountName){
    document.getElementById('account-id').value = accountName;
    document.querySelector('.pdv-items-account').innerText = 'Conta ' + accountName;
    document.getElementById('change-account').style.display = 'none';
    updateTable();
}


searchItem.addEventListener('keydown', function (e) {
    if (autoComplete.style.display === 'block') {
        if (e.key === 'ArrowDown') {
            var itemsCount = autoCompleteList.children.length;
            if (selectedItemIndex < itemsCount - 1) {
                selectedItemIndex++;

                if (items[selectedItemIndex].offsetTop + items[selectedItemIndex].offsetHeight > autoCompleteList.scrollTop + autoCompleteList.offsetHeight) {
                    autoCompleteList.scrollTop = items[selectedItemIndex].offsetTop + items[selectedItemIndex].offsetHeight - autoCompleteList.offsetHeight;
                }
            }
        }else if (e.key === 'ArrowUp') {
            if (selectedItemIndex > 0) {
                selectedItemIndex--;

                if (items[selectedItemIndex].offsetTop < autoCompleteList.scrollTop) {
                    autoCompleteList.scrollTop = items[selectedItemIndex].offsetTop;
                }
            }
        }else if (e.key === 'Enter') {
            handleEnter();
        }
    }else if (e.key === 'Enter') {
        if (searchItem.value > 1 && searchItem.value < 1000) {
            inputQtd.value = searchItem.value;
            searchItem.value = '';
        }else{
            saveItemLocalStorage(items[selectedItemIndex].dataset.value);
        }
        autoComplete.style.display = 'none';
    }else if (e.key === '+') {
        e.preventDefault();
        btnAdd.click();
    }else if (e.key === '-') {
        e.preventDefault();
        btnRemove.click();
    }

    updateSelectedItem();
})

searchItem.addEventListener('input', event => {
    if (event.target.value.length > 3) {
        loadProducts();
        autoComplete.style.display = 'block';
    } else {
        autoComplete.style.display = 'none';
    }

})

searchItem.addEventListener('focusout', event => {
    setTimeout(() => {
        autoComplete.style.display = 'none';
    }, 200);
})

searchItem.addEventListener('focusin', event => {
    if (searchItem.value.length > 3) {
        autoComplete.style.display = 'block';
    }
})

autoComplete.addEventListener('click', function (e) {
    items.forEach((item, index) => {
        if (item === e.target) {
            selectedItemIndex = index;
        }
    });
    searchItem.value = e.target.innerText;
    autoComplete.style.display = 'none';
    searchItem.focus();
})

btnAdd.addEventListener('click', function () {
    if (inputQtd.value < 999){
        inputQtd.value = parseInt(inputQtd.value) + 1;
    }
})

btnRemove.addEventListener('click', function () {
    if (inputQtd.value > 1) {
        inputQtd.value = parseInt(inputQtd.value) - 1;
    }
})

btnAddItem.addEventListener('click', function () {
if(items[selectedItemIndex].dataset.value !== undefined){
        saveItemLocalStorage(items[selectedItemIndex].dataset.value);
    }
})

btnTopAccount.addEventListener('click', function () {
    if (changeAccount.style.display === 'block') {
        changeAccount.style.display = 'none';
    }else {
        changeAccount.style.display = 'block';
        document.getElementById('input-new-account').focus();
    }
})

inputNewAccount.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        document.getElementById('btn-new-account').click();
    }
})

btnNewAccount.addEventListener('click', function() {
    let inputNewAccount = document.getElementById('input-new-account');
    document.getElementById('account-id').value = inputNewAccount.value;
    inputNewAccount.value = '';
    document.querySelector('.pdv-items-account').innerText = 'Conta ' + document.getElementById('account-id').value;
    document.getElementById('change-account').style.display = 'none';
    addAccountLocalStorage(document.getElementById('account-id').value);
    updateTable();
    updateAccountList();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'F2') {
        e.preventDefault();
        document.getElementById('showPayments').click();}
    if (e.key === 'F4') {
        e.preventDefault();
        cancelOrder();
    }
});

updateTable();












