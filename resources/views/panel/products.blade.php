@extends('layouts.panel')

@section('content')

    <main class="content-wrapper">

        <link rel="stylesheet" href="../../assets/css/imgDropZone.css">

        {{--

            configuration app store:
                - tags for search
                - faixa promocional
                - cor da faixa promocional
                - é destaque?
                - ordem de exibição

            advanced information:
                - barcode
                - sku
                - client code
                - buy price
                - NCM
                - controla estoque?
                - estoque mínimo
                - desconto
                - acrescimo
                -

            --}}

        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-body">
                        <ul class="nav nav-tabs tickets-tab mt-3" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" id="open-tab"
                            data-toggle="tab" href="#open-ticket" role="tab" aria-controls="open-ticket"
                            aria-selected="true"> Info Produto {{--<div class="badge">13</div> --}}
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="pending-tab"
                            data-toggle="tab" href="#pending-ticket" role="tab" aria-controls="pending-ticket"
                            aria-selected="false"> Mais Informações {{--<div class="badge">13</div> --}}
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="on-hold-tab"
                            data-toggle="tab" href="#on-hold-ticket" role="tab" aria-controls="on-hold-ticket"
                            aria-selected="false"> Avançado {{--<div class="badge">13</div> --}}
                            </a>
                        </li>
                        </ul>

                        <style>
                            input{font-size: 1.2rem!important;}
                            .input-title{color:black!important;}
                            .btn-submit{width:100%;color:white!important;}
                        </style>

                        <div class="tab-content tickets-tab-content">
                            <div class="tab-pane fade show active" id="open-ticket" role="tabpanel" aria-labelledby="open-tab">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="drop-zone">
                                            <span class="drop-zone__prompt">Carregar<br>Imagem</span>
                                            <input name="product-image" type="file" class="drop-zone__input">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label class="input-title">Status</label>
                                            <select class="form-control">
                                              <option>Ativo</option>
                                              <option>Indisponivel</option>
                                              <option>Inativo</option>
                                              <option>Sem estoque</option>
                                            </select>
                                          </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label class="input-title">Nome do produto</label>
                                            <input type="text" class="form-control form-control-lg" />
                                      </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label class="input-title">Categoria do produto</label>
                                            <select class="form-control">
                                              <option>Cerveja</option>
                                              <option>Refrigerante</option>
                                              <option>Tempero</option>
                                              <option>Tabacaria</option>
                                            </select>
                                          </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label class="input-title">Preço de venda</label>
                                            <input class="form-control" id="exampleTextarea1" />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label class="input-title">Tags</label>
                                            <input name="tags" id="tags" value="" />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label class="input-title">Descrição</label>
                                            <textarea class="form-control" id="exampleTextarea1" rows="3"></textarea>
                                        </div>
                                    </div>
                                    <div class="d-flex col-md-6 align-items-end justify-content-end">
                                        <button class="btn btn-primary btn-submit">Salvar</button>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="pending-ticket" role="tabpanel" aria-labelledby="pending-tab">
                                <div class="form-group">
                                    <label>Large input</label>
                                    <input type="text" class="form-control form-control-lg" placeholder="Username" aria-label="Username">
                                  </div>
                            </div>
                            <div class="tab-pane fade" id="on-hold-ticket" role="tabpanel" aria-labelledby="on-hold-tab">
                                <h1>advanced information</h1>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    </main>

@endsection
