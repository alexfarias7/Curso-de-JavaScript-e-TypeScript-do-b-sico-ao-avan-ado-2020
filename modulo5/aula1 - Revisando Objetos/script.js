//" " para striug lireral
// []/ array literal
// { } para OBJKJETO LITERAL
// OBJETO É FORMADO POR UM PAR ,CHAVE E VALOR 

const pessoa = {
    nome:'rafael',
    sobrenome: 'costa'
};
console.log(pessoa.nome);// ára acessar a chave nome
console.log(pessoa.sobrenome);// para acessar a chave sobrenome
console.log(pessoa['nome']);// pode ser utilizaso tb anotação de cochetes para acessar as chaves
// é melhor utilizar a anotação de cochete qunando a variavel for diinamica
const chave = 'nome'
const chave1 ='sobrenome'
console.log(pessoa[chave]);
console.log(pessoa[chave1]);
console.log('-----------------------')
// objeto construtor
const pessoa1 = new Object();
pessoa1.nome='luiz'
pessoa1.sobrenome= ' costa'
pessoa1.idade =30
pessoa1.falaNome = function(){
    console.log(`${this.nome} esta falando`)// é necessário colocar a palavra this para chamar o metodo dentro do objeto
}
console.log(pessoa1, pessoa)
console.log('-----------------------')

// para apagar a chave
delete pessoa1.sobrenome
console.log(pessoa1)

//o obejto pode conter metodos
//metodos são funções dntro do objeto que executa ações
// vantagens dos metodos->ter acessoa as ações do objeto dentro na função
 pessoa1.falaNome()
 console.log('-----------------------')