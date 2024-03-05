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

var accountActiveId = document.getElementById('account-id').value;

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

updateTable();

document.addEventListener('keydown', (e) => {
    if (e.key === 'F2') {
        e.preventDefault();
        document.getElementById('showPayments').click();}
    if (e.key === 'F4') {
        e.preventDefault();
        cancelOrder();
    }
});

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
                <h5 class="mb-0 font-weight-normal">${accountName}</h5>
                <p class="mb-0 tx-12 text-muted">${totalSumAccount(accountName)}</p>
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

document.getElementById('btn-new-account').addEventListener('click', function() {
    let inputNewAccount = document.getElementById('input-new-account');
    document.getElementById('account-id').value = inputNewAccount.value;
    inputNewAccount.value = '';
    document.querySelector('.pdv-items-account').innerText = 'Conta ' + document.getElementById('account-id').value;
    document.getElementById('change-account').style.display = 'none';
    addAccountLocalStorage(document.getElementById('account-id').value);
    updateTable();
    updateAccountList();
});







