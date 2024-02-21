@extends('layouts.panel')

@section('content')

    <link rel="stylesheet" href="../assets/css/pdv.css">

    <main>
        <div class="d-flex flex-column flex-grow-1 justify-content-between pdv-adjust">
            <div class="d-flex justify-content-between flex-row align-items-center pdv-top">
                <div class="d-flex flex-column align-items-center justify-content-center pdv-top-qtd">
                    <span>Quantidade</span>
                    <div>
                        <button class="" id="btn-remove">-</button>
                            <input id="qtd" value="1" maxlength="3" style="width:25px; text-align:center">
                        <button class="" id="btn-add">+</button></td>
                    </div>
                </div>
                <div class="flex-grow-1 overflow-auto pdv-top-name">
                    <span>Digite o nome do produto ou escaneie o código de barras</span>
                    <div class="pdv-top-barcode d-flex">
                        <span class="mdi mdi-barcode"></span>
                        <input value="Copão de Wisky com Energético Redbull 500ml"></input>
                    </div>
                </div>
                <span class="mdi mdi-cart-arrow-down pdv-top-icon"></span>
            </div>
            <div class="flex-grow-1 overflow-auto mt-3">
                <table class="table table-sm table-custom">
                    <thead class="table-custom">
                        <tr class="text-left table-custom">
                            <th class="text-left table-custom mw-50">Quantidade</th>
                            <th class="text-left mw-150">Item / Descrição</th>
                            <th class="text-left mw-50">Valor Unitário</th>
                            <th class="text-left mw-100">Desconto</th>
                            <th class="text-left mw-100">Valor Total</th>
                            <th class="text-left"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="text-left">
                                <button class="btn btn-danger" id="btn-remove">-</button>
                                    <input id="qtd" value="1" maxlength="3" style="width:25px; text-align:center">
                                <button class="btn btn-success" id="btn-add">+</button></td>
                            <td class="text-left" style="max-width:100px; overflow:hidden;">Copão de Wisky com Energético Redbull 500ml</td>
                            <td class="text-left">R$ 100,00</td>
                            <td class="text-left">R$ 0,00</td>
                            <td class="text-left">R$ 100,00</td>
                            <td class="text-left"><button class="btn btn-danger">X</button></td>
                        </tr>
                        {{-- <tr>
                            <td class="text-left">
                                <button class="btn btn-danger" id="btn-remove">-</button>
                                    <input id="qtd" value="1" maxlength="3" style="width:25px; text-align:center">
                                <button class="btn btn-success" id="btn-add">+</button></td>
                            <td class="text-left" style="max-width:100px; overflow:hidden;">Cerveja Bavaria 365ml</td>
                            <td class="text-left">R$ 100,00</td>
                            <td class="text-left">R$ 0,00</td>
                            <td class="text-left">R$ 100,00</td>
                            <td class="text-left"><button class="btn btn-danger">X</button></td>
                        </tr> --}}
                        {{-- <tr>
                            <td class="text-left">
                                <button class="btn btn-danger" id="btn-remove">-</button>
                                    <input id="qtd" value="1" maxlength="3" style="width:25px; text-align:center">
                                <button class="btn btn-success" id="btn-add">+</button></td>
                            <td class="text-left" style="max-width:100px; overflow:hidden;">Coca Cola 2L</td>
                            <td class="text-left">R$ 100,00</td>
                            <td class="text-left">R$ 0,00</td>
                            <td class="text-left">R$ 100,00</td>
                            <td class="text-left"><button class="btn btn-danger">X</button></td>
                        </tr> --}}
                        {{-- <tr>
                            <td class="text-left">
                                <button class="btn btn-danger" id="btn-remove">-</button>
                                    <input id="qtd" value="1" maxlength="3" style="width:25px; text-align:center">
                                <button class="btn btn-success" id="btn-add">+</button></td>
                            <td class="text-left" style="max-width:100px; overflow:hidden;">Ração para peixe do mar 5kg</td>
                            <td class="text-left">R$ 100,00</td>
                            <td class="text-left">R$ 0,00</td>
                            <td class="text-left">R$ 100,00</td>
                            <td class="text-left"><button class="btn btn-danger">X</button></td>
                        </tr> --}}
                        {{-- <tr>
                            <td class="text-left">
                                <button class="btn btn-danger" id="btn-remove">-</button>
                                    <input id="qtd" value="1" maxlength="3" style="width:25px; text-align:center">
                                <button class="btn btn-success" id="btn-add">+</button></td>
                            <td class="text-left" style="max-width:100px; overflow:hidden;">Porção de azeitonas com queijo</td>
                            <td class="text-left">R$ 100,00</td>
                            <td class="text-left">R$ 0,00</td>
                            <td class="text-left">R$ 100,00</td>
                            <td class="text-left"><button class="btn btn-danger">X</button></td>
                        </tr> --}}
                    </tbody>
                </table>

            </div>
            <div class="pdv-bottom">
                <div class="d-flex justify-content-between flex-row  align-items-center pdv-bottom-totais">
                    <div>QTD Itens</div>
                    <div>Desconto</div>
                    <div>Total</div>
                </div>
                <div class="d-flex justify-content-between flex-row align-items-center"
                style="height:50%; background-color:#B9B9B9">
                    <div class="btn-cancel">Cancelar</div>
                    <div>Recebimento -></div>
                </div>
            </div>

        </div>
    </main>

    <script>
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
    </script>
@endsection
