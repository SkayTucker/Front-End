function compareNumeros(num1, num2) {
    if(!num1 || !num2) return `Defina 2 Numeros!` // caso os numeros forem nenhum ou zero.
    const primeiraFrase = criaPrimeiraFrase(num1, num2);//recebe esse parametro pra criar entre os valores
    const segundaFrase = criaSegundaFrase(num1, num2);//recebe esse parametro pra criar entre os valores

    return `${primeiraFrase} ${segundaFrase}`; // retorno das funções abaixo

}

function criaPrimeiraFrase(num1, num2){
    let saoiguais = '';//acredito que seja de apoio pra inserir algo dentro
    if(num1 !== num2){ //se forem diferentes um do outro 
        saoiguais = `não`;
    }

    return `os números ${num1} e ${num2} ${saoiguais} são iguais`; //screve entre as variaveis.  todas as variáveis declaradas no return estão dentro dessa function
}

function criaSegundaFrase(num1, num2){
    const soma = num1 + num2; // função de autenticação

    let resultado10 = `menor`;// se for maior que 10 escreve menor
    let resultado20 = `maior`;// se for maior que 20 escreve menor
    const compara10 = soma > 10; // constantes de operação
    const compara20 = soma > 20;// (num1 + num 2 = resoltado) > 20 ou  10 

    if(compara10){
        resultado10 = `maior`;
    }

    if(compara20){
        resultado20 = `maior`;
    } 

    return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.`; //strings entre as variaveis // todas as variáveis declaradas no return estão dentro dessa function
}


console.log(compareNumeros(1,50));

