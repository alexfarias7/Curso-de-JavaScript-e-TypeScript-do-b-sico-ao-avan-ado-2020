//POLIMORFISMO
// é fazer medodos se comportarem de maneiras diferentes em subclasses(filhaS DE classe||funÇÃO CONSTRUTORA)


//superclasse
function Conta(agencia, conta ,saldo){
this.agencia = agencia;
this.conta = conta;
this.saldo = saldo
}

Conta.prototype.sacar = function(valor){
 if(this.saldo<= valor){
  console.log(`Saldo insuficiente:Seu saldo é R$ ${this.saldo}`)
     return
 }
 this.saldo-=valor
 this.verSaldo()
};

Conta.prototype.depositar = function (valor){
this.saldo +=valor
this, this.verSaldo()
};

Conta.prototype.verSaldo = function (){
console.log(
    `Ag/conta: ${this.agencia}/${this.conta}` +
    ` | Saldo: R$${this.saldo.toFixed(2)}`)
}

function ContaCorrente(agencia, conta, saldo , limite){
    Conta.call(this, agencia,conta, saldo);
    this.limite = limite;
}
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor) {
    if(valor>  (this.saldo + this.limite)) {
     console.log(`Saldo insuficiente:Seu saldo é R$ ${this.saldo}`)
        return
    }
    this.saldo-=valor
    this.verSaldo()
   };


   function ContaPoupanca(agencia, conta, saldo ){
    Conta.call(this, agencia,conta, saldo);
}
ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;
   

const conta10 = new Conta(11,22,10)
conta10.verSaldo()
conta10.depositar(150)
conta10.sacar(100)
conta10.sacar(100)

console.log('----------------')
const ContaCorrente10 =  new ContaCorrente(11,12,0,100)
ContaCorrente10.verSaldo()
ContaCorrente10.depositar(100)
ContaCorrente10.sacar(150)
ContaCorrente10.sacar(150)


console.log('------------------')
const ContaPoupanca10 = new ContaPoupanca(11,12, 0)
ContaPoupanca10.verSaldo()
ContaPoupanca10.depositar(50)
ContaPoupanca10.sacar(10)

