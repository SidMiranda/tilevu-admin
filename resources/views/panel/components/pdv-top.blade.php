<div class="d-flex justify-content-between flex-row align-items-center pdv-top">
    <div class="d-flex flex-column align-items-center justify-content-center
    pdv-top-qtd h-100 color-white">
        <span>Quantidade</span>
        <div class="d-flex flex-column justify-content-center align-items-center
        pdv-top-qtd-control m-2">
            <span class="bmd-form-group p-1">
                <button id="btn-remove">-</button>
                    <input class="text-center" id="input-qtd" value="1" maxlength="3">
                <button id="btn-add">+</button>
            </span>
        </div>
    </div>
    <div class="d-flex flex-column flex-grow-1 pdv-top-name">
        <span>Digite o nome do produto ou escaneie o código de barras</span>
        <div class="bmd-form-group pdv-top-barcode d-flex">
            <span class="mdi mdi-barcode-scan"></span>
                <div class="d-flex flex-column flex-grow-1">
                    <input type="text" id="input-search-item"></input>
                    <div id="auto-complete-box">
                        <ul id="auto-complete-list">
                            {{-- <li> products table --}}
                        </ul>
                    </div>
                </div>
        </div>
    </div>
    <div id="btn-add-item" class="d-flex justify-content-center align-items-center">
        <span class="mdi mdi-cart-arrow-down pdv-top-icon color-white font-2rem"></span>
    </div>
    <div id="btn-accounts" class="d-flex justify-content-center align-items-center">
        <div class="d-flex justify-content-center align-items-center pdv-top-account
        font-2rem color-white h-100 text-center">
            <span class="mdi mdi-arrow-down"></span>
        </div>
        <div id="change-account">
            <div class="d-flex flex-column align-items-center justify-content-center">
                <span class="bmd-form-group m-0 p-0">
                    <input type="text" class="text-center bg-white font-1rem mb-1"
                    id="input-new-account" maxlength="15"/>
                </span>
                <button id="btn-new-account" class="btn btn-outline-info btn-block mb-2">Nova Conta</button>
            </div>
            <div id="change-account-list">

                <div class="to-do-list-item">
                    <h5 class="mb-0 font-weight-normal">Caixa Livre</h5>
                    <p class="mb-0 tx-12 text-muted">R$ 00,00</p>
                </div>

              </div>
        </div>
    </div>
</div>

