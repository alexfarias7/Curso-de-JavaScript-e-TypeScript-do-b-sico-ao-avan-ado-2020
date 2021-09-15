//classe == função construtora

class Pessoa{
    constructor(nome, sobrenome){
        this.nome =nome;
        this.sobrenome= sobrenome;
    }
    falar(){
        console.log(`${this.nome} está falando`)
    }
    comer(){
        console.log(`${this.nome} está comendo`)
    }
    beber(){
        console.log(`${this.nome} está bebendo`)
    }
}
// COMPARAÇÃO FUNÇÃO CONSTRUTORA
    function Pessoa2(nome, sobrenome){
        this.nome =nome;
        this.sobrenome= sobrenome;
    }
    Pessoa2.prototype.falar = function(){
        console.log(`${this.nome} esta falando`)
    }
    Pessoa2.prototype.comer = function(){
        console.log(`${this.nome} esta comeemdo`)
    }
    Pessoa2.prototype.beber = function(){
        console.log(`${this.nome} esta bebendo`)
    }


// instaciar => é criar um objeto a partir da classe
const p1 = new Pessoa('rafael', 'costa')
const p2 = new Pessoa('maria', 'silva')
const p3 = new Pessoa('carlos', 'freitas')
const p4 = new Pessoa2('rafael', 'costa')
console.log(p1)
//console.log(p2)
console.log(p4)

console.log(p1.falar())