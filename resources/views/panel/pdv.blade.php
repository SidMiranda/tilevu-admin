@extends('layouts.pdv')

@section('content')

    <link rel="stylesheet" href="../assets/css/pdv.css">


    <div class="content-wrapper red" style="padding:5px!important;">
        <div class="container-fluid">
        <div class="d-flex flex-column flex-grow-1 justify-content-between pdv-adjust">

            @component('panel.components.pdv-top')
            @endcomponent

            @component('panel.components.pdv-items')
            @endcomponent

            @component('panel.components.pdv-bottom')
            @endcomponent

        </div>
        </div>
    </div>

    <script src="../assets/js/pdv.js"></script>
@endsection
