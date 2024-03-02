@extends('layouts.panel')

@section('content')

    <main class="content-wrapper">
        <h1 id="timestamp"></h1>

        <script>
            function atualizarTimestamp() {
                var dataAtual = new Date();
                var timestamp = dataAtual.getTime();

                var h1 = document.getElementById('timestamp');

                valor = h1.innerText;

                h1.innerHTML = timestamp.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

            }

            atualizarTimestamp();

            setInterval(atualizarTimestamp, 1000);
        </script>

    </main>


@endsection
