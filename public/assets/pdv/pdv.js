function log(data){
    let debug = true;
    if(debug){
        console.log(data);
    }
}

window.apiUrl = 'http://localhost:8000/api';
document.getElementById('input-search-item').focus();
let  inputSearchItem = document.getElementById('input-search-item');
let  autoCompleteBox = document.getElementById('auto-complete-box');
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

let selectedItemIndex = -1;

/** MANIPULATING LOCAL STORAGE **/
function createAccount(accountName){
    let accounts = JSON.parse(localStorage.getItem('accounts')) || {};
    let account = accounts[accountName] || { items: []};
    accounts[accountName] = account;
    localStorage.setItem('accounts', JSON.stringify(accounts));
}
createAccount('Caixa Livre');
function removeAccount(accountName){
    let accounts = JSON.parse(localStorage.getItem('accounts')) || {};
    delete accounts[accountName];
    localStorage.setItem('accounts', JSON.stringify(accounts));
}
function getAccountList(){
    let accounts = JSON.parse(localStorage.getItem('accounts')) || {};
    return Object.keys(accounts);
}
function getTotalPrice(accountName){
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
function getItemsCount(accountName){
    let accounts = JSON.parse(localStorage.getItem('accounts')) || {};
    let account = accounts[accountName] || { items: []};
    let itemsCount = 0;
    account.items.forEach((storedItem, index) => {
        itemsCount += parseInt(storedItem.qtd);
    });
    return itemsCount;
}
function getItemsDiscount(accountName){
    let accounts = JSON.parse(localStorage.getItem('accounts')) || {};
    let account = accounts[accountName] || { items: []};
    let discount = 0;
    account.items.forEach((storedItem, index) => {
        discount += storedItem.aleatorydiscount;
    });
    return convertToBRL(discount);
}
function getAccountItems(accountName){
    let accounts = JSON.parse(localStorage.getItem('accounts')) || {};
    let account = accounts[accountName] || { items: []};
    return account.items;
}
function getActiveAccount(){
    return document.getElementById('account-id').value;
}
function setActiveAccount(accountName){
    document.getElementById('account-id').value = accountName;
    document.querySelector('.pdv-items-account').innerText = 'Conta ' + accountName;
}
function incrementItem(accountName, itemId){
    let accounts = JSON.parse(localStorage.getItem('accounts')) || {};
    let account = accounts[accountName] || { items: []};
    if(accounts.hasOwnProperty(accountName)){
        let accountItems = accounts[accountName].items;
        accountItems.forEach((storedItem, index) => {
            if (storedItem.itemId == itemId) {
                accountItems[index].qtd = parseInt(accountItems[index].qtd) + 1;
            }
        });
        accounts[accountName] = account;
        localStorage.setItem('accounts', JSON.stringify(accounts));
    }
}
function decrementItem(accountName, itemId){
    let accounts = JSON.parse(localStorage.getItem('accounts')) || {};
    let account = accounts[accountName] || { items: []};
    if(accounts.hasOwnProperty(accountName)){
        let accountItems = accounts[accountName].items;
        accountItems.forEach((storedItem, index) => {
            if (storedItem.itemId == itemId) {
                accountItems[index].qtd = parseInt(accountItems[index].qtd) - 1;
                if(accountItems[index].qtd <= 0){
                    accountItems.splice(index, 1);
                }
            }
        });
        accounts[accountName] = account;
        localStorage.setItem('accounts', JSON.stringify(accounts));
    }
}

function addItemToAccount(accountName, item){
    let accounts = JSON.parse(localStorage.getItem('accounts')) || {};
    let account = accounts[accountName] || { items: []};
    item = JSON.parse(item);
    let itemId = item.id;
    let itemName = item.name;
    let qtd = inputQtd.value;
    let sellPrice = item.sell_price;
    let aleatorydiscount = Math.floor(Math.random() * sellPrice);
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
    accounts[accountName] = account;
    localStorage.setItem('accounts', JSON.stringify(accounts));

    inputSearchItem.value = '';
    inputQtd.value = 1;

    selectedItemIndex = -1;
    updateTable();
}
function deleteItemFromAccount(accountName, itemId){
    let accounts = JSON.parse(localStorage.getItem('accounts')) || {};
    let account = accounts[accountName] || { items: []};
    if(accounts.hasOwnProperty(accountName)){
        let accountItems = accounts[accountName].items;
        accountItems.forEach((storedItem, index) => {
            if (storedItem.itemId == itemId) {
                accountItems.splice(index, 1);
            }
        });
        accounts[accountName] = account;
        localStorage.setItem('accounts', JSON.stringify(accounts));
    }
}
/****************************************************/

/* ADD ITEM FLOW */
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
document.addEventListener('keydown', (e) => {
    if (e.key === '+') {
        e.preventDefault();
        btnAdd.click();
    }
    if (e.key === '-') {
        e.preventDefault();
        btnRemove.click();
    }
});
function loadProducts() {
    fetch(window.apiUrl+'/product/list')
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
inputSearchItem.addEventListener('input', event => {
    if (event.target.value.length > 3) {
        loadProducts();
        autoCompleteBox.style.display = 'block';
    } else {
        autoCompleteBox.style.display = 'none';
    }

})
inputSearchItem.addEventListener('focusout', event => {
    setTimeout(() => {
        autoCompleteBox.style.display = 'none';
    }, 200);
})
inputSearchItem.addEventListener('focusin', event => {
    if (inputSearchItem.value.length > 3) {
        autoCompleteBox.style.display = 'block';
    }
})
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
        inputSearchItem.value = items[selectedItemIndex].innerText;
        autoCompleteBox.style.display = 'none';
        addItemToAccount(getActiveAccount(), items[selectedItemIndex].dataset.value);
        inputSearchItem.focus();

    }
}
inputSearchItem.addEventListener('keydown', function (e) {
    if (autoCompleteBox.style.display === 'block') {
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
        if (inputSearchItem.value > 1 && inputSearchItem.value < 1000) {
            inputQtd.value = inputSearchItem.value;
            inputSearchItem.value = '';
        }else{
            addItemToAccount(getActiveAccount(), items[selectedItemIndex].dataset.value);
        }
        autoCompleteBox.style.display = 'none';
    }

    updateSelectedItem();
})
autoCompleteBox.addEventListener('click', function (e) {
    items.forEach((item, index) => {
        if (item === e.target) {
            selectedItemIndex = index;
        }
    });
    inputSearchItem.value = e.target.innerText;
    autoCompleteBox.style.display = 'none';
    inputSearchItem.focus();
})
btnAddItem.addEventListener('click', function () {
if(items[selectedItemIndex].dataset.value !== undefined){
        addItemToAccount(getActiveAccount(), items[selectedItemIndex].dataset.value);
    }
})
/***************************************************** */

/* TABLE FLOW */
function removeItem(itemId){
    decrementItem(getActiveAccount(), itemId)
    log('removing ' + itemId + ' from ' + getActiveAccount())
    updateTable()

}
function addItem(item){
    incrementItem(getActiveAccount(), item)
    log('adding ' + item + ' to ' + getActiveAccount())
    updateTable()
}
function deleteItem(itemId){
    deleteItemFromAccount(getActiveAccount(), itemId);
    log('deleting ' + itemId + ' from ' + getActiveAccount())
    updateTable();
}
function updateTotal(){
    document.querySelector('.pdv-items-count').innerHTML = "Itens " +
    getItemsCount(getActiveAccount());

    document.querySelector('.pdv-items-discount').innerHTML = "Desconto " +
    getItemsDiscount(getActiveAccount());

    document.querySelector('.pdv-total-price').innerHTML = "Total " +
    getTotalPrice(getActiveAccount());

    updateAccountList();
}
function updateTable(){
    log('updateTable');
    table = document.querySelector('.table-custom tbody');
    let accounts = JSON.parse(localStorage.getItem('accounts')) || {};
    let accountActiveId = getActiveAccount();
    log(accountActiveId);
    if(accounts.hasOwnProperty(accountActiveId)){
        let accountItems = accounts[accountActiveId].items;
        log(accountItems);
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
                    <p class="mb-0 tx-12 text-muted">${getTotalPrice(accountName)}</p>
                </a>
            </div>
        `;
        table.appendChild(tr);
    });
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

function cancelOrder(){
    if(confirm('Deseja cancelar o pedido?')){
        removeAccount(getActiveAccount());
        setActiveAccount('Caixa Livre');
        updateTable();
    }
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












