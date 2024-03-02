<div class="d-flex justify-content-between flex-row align-items-center pdv-top">
    <div class="d-flex flex-column align-items-center justify-content-center pdv-top-qtd">
        <span>Quantidade</span>
        <div class="d-flex flex-column justify-content-center align-items-center pdv-top-qtd-control">
            <span class="bmd-form-group">
                <button id="btn-remove">-</button>
                    <input id="input-qtd" value="1" maxlength="3">
                <button id="btn-add">+</button>
            </span>
        </div>
    </div>
    <div class="d-flex flex-column flex-grow-1 pdv-top-name">
        <span>Digite o nome do produto ou escaneie o código de barras</span>
        <div class="bmd-form-group pdv-top-barcode d-flex">
            <span class="mdi mdi-barcode-scan"></span>
                <div class="d-flex flex-column flex-grow-1">
                    <input type="text" id="search-item"></input>
                    <div id="auto-complete">
                        <ul id="auto-complete-list">
                            {{-- <li> products table --}}
                        </ul>
                    </div>
                </div>
        </div>
    </div>
    <div id="btn-add-item" class="d-flex justify-content-center align-items-center">
        <span class="mdi mdi-cart-arrow-down pdv-top-icon"></span>
    </div>
    <div id="btn-accounts" class="d-flex justify-content-center align-items-center">
        <div class="d-flex justify-content-center align-items-center pdv-top-account">
            <span class="mdi mdi-arrow-down"></span>
        </div>
        <div id="change-account">
            <button id="btn-new-account" class="btn btn-outline-info btn-block mb-2">Nova Conta</button>
            <div class="to-do-list-content" id="change-account-list">

                <div class="to-do-list-item">
                    <h5 class="mb-0 font-weight-normal">Caixa Livre</h5>
                    <p class="mb-0 tx-12 text-muted">R$ 15,30</p>
                </div>

                <div class="to-do-list-item">
                    <h5 class="mb-0 font-weight-normal">Carlos Silva</h5>
                    <p class="mb-0 tx-12 text-muted">R$ 22,70</p>
                </div>

                <div class="to-do-list-item">
                    <h5 class="mb-0 font-weight-normal">Quarto 125</h5>
                    <p class="mb-0 tx-12 text-muted">R$ 185,00</p>
                </div>

                <div class="to-do-list-item">
                      <h5 class="mb-0 font-weight-normal">Conta Mesa 12</h5>
                      <p class="mb-0 tx-12 text-muted">R$ 84,30</p>
                  </div>

                <div class="to-do-list-item">
                    <h5 class="mb-0 font-weight-normal">Silvana Morais</h5>
                    <p class="mb-0 tx-12 text-muted">R$ 25,12</p>
                </div>

                <div class="to-do-list-item">
                    <h5 class="mb-0 font-weight-normal">Quarto 125</h5>
                    <p class="mb-0 tx-12 text-muted">R$ 185,00</p>
                </div>

                <div class="to-do-list-item">
                      <h5 class="mb-0 font-weight-normal">Conta Mesa 12</h5>
                      <p class="mb-0 tx-12 text-muted">R$ 84,30</p>
                  </div>

                <div class="to-do-list-item">
                    <h5 class="mb-0 font-weight-normal">Silvana Morais</h5>
                    <p class="mb-0 tx-12 text-muted">R$ 25,12</p>
                </div>

              </div>
        </div>
    </div>
</div>

