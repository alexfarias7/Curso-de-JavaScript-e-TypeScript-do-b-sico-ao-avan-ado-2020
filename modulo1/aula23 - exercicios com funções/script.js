/*const array =[1,22,3]
array.push(4)
array[0]=  'luiz'
console.log(array)*/

const pessoa ={// no objeto utiliza-se chaves{}
    nome: 'Rafael',
    sobrenome:'Silva',
    idade:25
}
console.log(pessoa.nome)
console.log(pessoa.sobrenome)
console.log(pessoa.idade)

function criaPessoa (nome, sobrenome, idade){//parametro
    return{
        nome:nome,
        sobrenome:sobrenome,
        idade:idade,
    };
}
const pessoa1 = criaPessoa('Luiz', 'Silva', 25)//argumento=>é o valor que vai ser passado para o parametro
const pessoa6 = criaPessoa('Raimundo', 'Bezerra', 21)
const pessoa2 = criaPessoa('Paulo', 'CostA', 28)
const pessoa3 = criaPessoa('Pedro', 'Freaitas', 29)
const pessoa4= criaPessoa('Gabriel', 'Freira', 22)
const pessoa5= criaPessoa('Arthur', 'Neto', 23)
console.log(pessoa.nome)
console.log(pessoa1.nome)
console.log(pessoa2.nome)
console.log(pessoa3.nome)
console.log(pessoa4.nome)
console.log(pessoa5.nome)

function criaPessoa2 (nome, sobrenome, idade){
    return {
        nome,sobrenome, idade//o javascript que o valor é o mesmo do parametro
    }
}
const pessoa11= criaPessoa2('miguel', 'junior', 85)
console.log(pessoa11.nome, pessoa11.sobrenome, pessoa11.idade)

const pessoa12 ={
    nome:'Rafael',
    sobrenome: 'silva',
    idade :25,

    chamar() {
        console.log(`${this.nome} ${this.sobrenome} esta dizendo ola`)//this=> referencia o objeto chamado no contexto acima
        console.log(this.idade)
    },

    incrementaIdade(){
        this.idade++
    }
};

pessoa12.chamar();
pessoa12.incrementaIdade()
pessoa12.chamar()
pessoa12.incrementaIdade()
pessoa12.chamar();