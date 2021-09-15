const pessoa ={
 nome:'luiz',
 sobrenome :'miranda',
 idade:30,
 endereço:{
//rua:'avenida brasil',
     numero:320
 },

}

//const nome = pessoa.nome

/* const {nome:teste= 'rafael', sobrenome, idade}=pessoa//atribuição via  desestruturação
console.log(teste, sobrenome, idade) */

//const {nome,sobrenome,endereço}=pessoa
/* const {endereço:{rua, numero}, endereço}=pessoa
console.log(rua, numero, endereço) */
/* const {endereço:{rua:r= 'outra rua', numero}, endereço}=pessoa
console.log(r, numero, endereço) */
const {nome,sobrenome, ...resto}=pessoa
console.log(nome , sobrenome, resto) 