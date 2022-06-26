function somaNumeros(arr) {
    return arr.reduce(function(prev, current) {
        return prev + current;
    });
}



const lista = [
    {
        name: 'sabao em po',
        preco: 30
    },
    {
        name: 'cereal',
        preco: 12
    },
    {
        name: 'toalha',
        preco: 30
    },
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista){
    return lista.reduce(function(prev, current, index) {
        console.log("rodada " + index +1);
        console.log({current});
        console.log({prev});
        return prev - current.preco;
    }, saldoDisponivel);
}




console.log(calculaSaldo(saldoDisponivel, lista));