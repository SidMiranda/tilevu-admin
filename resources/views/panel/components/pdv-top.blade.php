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
</div>

