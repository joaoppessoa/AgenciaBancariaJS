class Cliente {
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    _saldo = 0;

    sacar(valor){
        if(valor  <= this._saldo){
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if(valor <= 0){
            return;
        }

        this._saldo += valor;
    }
}

const cliente1 = new Cliente();
cliente1.nome = "João Paulo";
cliente1.cpf  = "101.699.734-50";

const cliente2 = new Cliente();
cliente2.nome = "Débora";
cliente2.cpf  = "101.699.885-50";

const contaCorrenteCliente1 = new ContaCorrente();
contaCorrenteCliente1.agencia = 1001;

contaCorrenteCliente1.depositar(100);
const valorSacadoCliente1 = contaCorrenteCliente1.sacar(50);
console.log(valorSacadoCliente1);
console.log(contaCorrenteCliente1);

const contaCorrenteCliente2 = new ContaCorrente();
contaCorrenteCliente2.agencia = 1001;
contaCorrenteCliente2.saldo = 0;

console.log(cliente1);
console.log(cliente2);