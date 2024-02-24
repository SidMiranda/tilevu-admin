@extends('layouts.panel')

@section('content')

    <link rel="stylesheet" href="../assets/css/pdv.css">

    <div class="content-wrapper" style="padding:5px!important;">
        <div class="container-fluid">
        <div class="d-flex flex-column flex-grow-1 justify-content-between pdv-adjust">

            <div class="d-flex justify-content-between flex-row align-items-center pdv-top">
                <div class="d-flex flex-column align-items-center justify-content-center pdv-top-qtd">
                    <span>Quantidade</span>
                    <div class="d-flex flex-column justify-content-center align-items-center pdv-top-qtd-control">
                        <span class="bmd-form-group">
                            <button>-</button>
                                <input value="1" maxlength="3">
                            <button>+</button>
                        </span>
                    </div>
                </div>
                <div class="d-flex flex-column flex-grow-1 overflow-auto pdv-top-name">
                    <span>Digite o nome do produto ou escaneie o código de barras</span>
                    <div class="bmd-form-group pdv-top-barcode d-flex">
                        <span class="mdi mdi-barcode-scan"></span>
                        <input value="Copão de Wisky com Energético Redbull 500ml"></input>
                    </div>
                </div>
                <span class="mdi mdi-cart-arrow-down pdv-top-icon"></span>
            </div>

            <div class="flex-grow-1 overflow-auto mt-3">
                <table class="table table-sm table-custom">
                    <thead class="table-custom">
                        <tr class="table-custom">
                            <th class="table-custom mw-50">Quantidade</th>
                            <th class="mw-150">Item / Descrição</th>
                            <th class="mw-50">Valor Unitário</th>
                            <th class="mw-100">Desconto</th>
                            <th class="mw-100">Valor Total</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="mw-50">
                                <span class="bmd-form-group pdv-table-qtd">
                                    <button>-</button>
                                        <input id="qtd" value="1" maxlength="3">
                                    <button>+</button>
                                </span>
                            </td>
                            <td class="text-left" style="max-width:100px; overflow:hidden;">Copão de Wisky com Energético Redbull 500ml</td>
                            <td class="text-left">R$ 20,00</td>
                            <td class="text-left">R$ 0,00</td>
                            <td class="text-left">R$ 20,00</td>
                            <td class="text-left"><span class="mdi mdi-delete pdv-table-icon-delete"></span></td>
                        </tr>
                        <tr>
                            <td class="mw-50">
                                <span class="bmd-form-group pdv-table-qtd">
                                    <button>-</button>
                                        <input id="qtd" value="1" maxlength="3">
                                    <button>+</button>
                                </span>
                            </td>
                            <td class="text-left" style="max-width:100px; overflow:hidden;">Coca Cola 2L</td>
                            <td class="text-left">R$ 15,00</td>
                            <td class="text-left">R$ 2,00</td>
                            <td class="text-left">R$ 13,00</td>
                            <td class="text-left"><span class="mdi mdi-delete pdv-table-icon-delete"></td>
                        </tr>
                        <tr>
                            <td class="mw-50">
                                <span class="bmd-form-group pdv-table-qtd">
                                    <button>-</button>
                                        <input id="qtd" value="1" maxlength="3">
                                    <button>+</button>
                                </span>
                            </td>
                            <td class="text-left" style="max-width:100px; overflow:hidden;">Cerveja Bavaria 360ml</td>
                            <td class="text-left">R$ 2,50</td>
                            <td class="text-left">R$ 0,00</td>
                            <td class="text-left">R$ 2,50</td>
                            <td class="text-left"><span class="mdi mdi-delete pdv-table-icon-delete"></td>
                        </tr>

                   </tbody>
                </table>

            </div>

            <div class="pdv-bottom">
                <div class="d-flex justify-content-between flex-row  align-items-center pdv-bottom-totais">
                    <div>3 Itens</div>
                    <div>Desconto R$ 2,00</div>
                    <div id="total-pay">Total R$ 35,50</div>
                </div>
                <div class="d-flex justify-content-between flex-row align-items-center"
                style="height:33%; background-color:#B9B9B9">
                    <div class="btn-cancel d-flex justify-content-center align-items-center">
                        <span class="mdi mdi-block-helper"></span>
                    </div>
                    <div id="payment-button">RECEBER  <span class="mdi mdi-arrow-right"></span></div>
                </div>
                <div style="height:33%;"></div>
            </div>

        </div>
        </div>
    </div>

    {{-- <script>
        $(document).ready(function(){
            $('#btn-add').click(function(){
                var value = parseInt($('#qtd').val());
                value = isNaN(value) ? 0 : value;
                if(value < 999){
                    $('#qtd').val(value + 1);
                }
            });
            $('#btn-remove').click(function(){
                var value = parseInt($('#qtd').val());
                value = isNaN(value) ? 0 : value;
                if(value > 1){
                    $('#qtd').val(value - 1);
                }
            });
        });
    </script> --}}
@endsection
