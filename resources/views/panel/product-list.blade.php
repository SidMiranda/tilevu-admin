@extends('layouts.panel')

@section('content')


    <main class="content-wrapper">
        <div class="page-header">
        <h3 class="page-title"> Tabela de Produtos </h3>
        </div>
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-12">
                        <div class="table-responsive">
                        <table id="order-listing" class="table table-sm">
                            <thead>
                                <tr>
                                    <th>Código</th>
                                    <th>Nome</th>
                                    <th>Preço</th>
                                    <th>Categoria</th>
                                    <th>Disponivel</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody class="product-list">

                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <script>
            var productList = document.querySelector('.product-list');
            function loadProducts() {
                fetch('http://127.0.0.1:8000/api/product/list')
                    .then(response => response.json())
                    .then(data => {
                        productList.innerHTML = '';
                        data.forEach(product => {
                            let sellPrice = convertToBRL(product.sell_price);
                            productList.innerHTML += `
                                <tr>
                                    <td>${product.client_code}</td>
                                    <td>${product.name}</td>
                                    <td>${sellPrice}</td>
                                    <td>${product.group_id}</td>
                                    <td class='text-center'>
                                        <input type="checkbox" id="product-status" name="product-status" value="1" checked>
                                    </td>
                                    <td>
                                        <button class="btn btn-outline-secondary">Editar</button>
                                    </td>

                                </tr>
                            `;

                        });

                    });
            }
            loadProducts();
    </script>
    </main>

@endsection
