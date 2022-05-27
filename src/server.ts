let saldoE = 0

class Conta {
    numero: number;
    saldo: number;
    nome: string;

    constructor(numero: number, saldo: number, nome : string){
        this.numero = numero;
        this.saldo = saldo;
        this.nome = nome;
    }

    getSaldo() : number{
        return this.saldo
    }
}

class Corrente extends Conta{

    constructor(numero: number, saldo: number, nome: string, public limite: number){
        super(numero, saldo, nome)
    }

    depositar(valor : number){
        this.saldo += valor

        if(valor <= 0){
            console.log(`Erro ensira novamente o valor que deseja depositar`)
        }else{
            console.log(`Você depositou ${valor}`)
        }
    }
    
    sacar(valor : number){
        saldoE = this.saldo + this.limite;

        if (valor <= 0){
            console.log(`Erro ensira novamente o valor que deseja sacar`)
        }else if(valor <= saldoE){
            console.log(`Você realizou um saquer de ${valor}, seu novo saldo é ${saldoE - valor}`)
        }else if(valor > saldoE){
            console.log(`Não é possivel realizar o saque acima do seu saldo junto com o limite de credito`)
        }else{
            console.log(`Erro ensira novamente o valor que deseja sacar`)
        }
    }

}

const conta = new Corrente(8080, 300, 'Breno', 1000)

conta.depositar(100)

conta.sacar(500)