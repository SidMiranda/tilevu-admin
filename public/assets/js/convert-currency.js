function convertToBRL(cents){
    return (cents / 100).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
}

function convertToCentavos(real){
    return real.replace('R$', '').replace('.', '').replace(',', '');
}
