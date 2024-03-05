<div class="pdv-bottom">
    <div class="d-flex justify-content-between flex-row  align-items-center pdv-bottom-totais">
        <div class="pdv-items-count"></div>
        <div class="pdv-items-discount"></div>
        <input type="text" id="account-id" value="Caixa Livre" hidden />
        <div class="pdv-items-account" style="color:blue; font-weight: bold;">Conta: Caixa Livre</div>
        <div class="pdv-total-price" id="total-pay"></div>
    </div>
    <div class="d-flex justify-content-between flex-row align-items-center pdv-bottom-buttons">
        <div class="btn-cancel d-flex flex-column justify-content-center align-items-center" onclick="cancelOrder()">
            <span>Cancelar</span>
            <span>[F4]</span>
        </div>
        <a href="#" id="showPayments">
            <div id="payment-button">[F2] RECEBER  <span class="mdi mdi-arrow-right"></span></div>
        </a>

    </div>
</div>
