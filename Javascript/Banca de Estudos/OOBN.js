class ContaBancaria {
    constructor(agencia, numero, tipo, saldo){//parâmetros aqui 
     this.agencia = agencia;
     this.numero = numero;
     this.tipo = tipo;
     this._saldo = 0;
    }

    get saldo(){
        return this._saldo;
    }

    set saldo (valor) {
        this._saldo = valor;
    }

    sacar(valor) {
        if(valor > this._saldo) {
            return "Operação negada"
        }
        this.saldo = this._saldo - valor;

        return this._saldo;
    }

    depositar(valor) {
        this.saldo = this._saldo + valor;

        return this._saldo;

    }
}


class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, cartaoCredito){//parâmetros aqui
    super(agencia, numero);
    this.tipo = 'corrente';
    this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito(){
        return this._cartaoCredito;
    }

    set cartaoCredito(valor){
        return this._cartaoCredito
    }
}

class ContaPoupanca extends ContaBancaria{
    constructor(agencia, numero){//parâmetros aqui
    super(agencia, numero);
    this.tipo = 'Poupança';
    }
}

class ContaUniversitaria extends ContaBancaria{
    constructor(agencia, numero){//parâmetros aqui
    super(agencia, numero);
    this.tipo = 'Universitária';
    }

    sacar(valor) {
        if(valor > 500) {
            return "Operação negada!"
        }
        
        this._saldo = this._saldo - valor;
    }
}