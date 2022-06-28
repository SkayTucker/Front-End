function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${
        this.idade + anos
    } anos de idade.` + "\n";
 
}
const pessoa1 = {
    nome: 'Maria',
    idade: 30,
};

const pessoa2 = {
    nome: 'Carla',
    idade: 27,
};

const filha = {
    nome: 'Ayla',
    idade: 2,
    raca: 'Criança Destruidora',
};

console.log(calculaIdade.call(pessoa2, 1));
console.log(calculaIdade.apply(filha, [10]));//colchetes