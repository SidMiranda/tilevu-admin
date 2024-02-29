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
}

function updateItemsCount(){
    let items = JSON.parse(localStorage.getItem('items')) || [];
    let count = 0;
    items.forEach(item => {
        count += parseInt(item.qtd);
    });
    document.querySelector('.pdv-items-count').innerHTML = count + " Itens";
}

function updateDiscount(){
    let items = JSON.parse(localStorage.getItem('items')) || [];
    let discount = 0;
    items.forEach(item => {
        discount += item.aleatorydiscount;
    });
    document.querySelector('.pdv-items-discount').innerHTML = "Descontos " + convertToBRL(discount);
}

function upadateTotalPrice(){
    let items = JSON.parse(localStorage.getItem('items')) || [];
    let totalPrice = 0;
    let discount = 0;
    items.forEach(item => {
        discount += item.aleatorydiscount;
        totalPrice += item.qtd * item.aleatoryPrice - item.aleatorydiscount;
    });
    document.querySelector('.pdv-total-price').innerHTML = "Total " + convertToBRL(totalPrice);
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





