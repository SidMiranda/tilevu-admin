@extends('layouts.pdv')

@section('content')

    <div class="content-wrapper p-1">
        <div class="container-fluid">
        <div class="d-flex flex-column flex-grow-1 justify-content-between
                    bg-white select-none pdv-adjust">

            @component('panel.components.pdv-top')
            @endcomponent

            @component('panel.components.pdv-items')
            @endcomponent

            @component('panel.components.pdv-bottom')
            @endcomponent

        </div>
        </div>
    </div>

@endsection
