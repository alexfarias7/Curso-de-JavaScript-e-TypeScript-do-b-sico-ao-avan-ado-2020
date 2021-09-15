
//for in => lê os livros pu chaves d e objeto
/* 
const frutas =['pera','uva' , 'tomate','laranja']

for(let i =0;i<frutas.length; i++){
    console.log(frutas[i])

}
for( let i in frutas){
    console.log(frutas[i])
}

 */
const pessoa ={
    nome:'pedro',
    sobrenome:'costa',
    endereco: 'manaus',
    idade:30
}

for(let ind in pessoa){
    console.log(ind)
}
const chaves ='nome'
console.log(pessoa['endereco'])

for(let chave in pessoa){
    console.log(chave, pessoa[chave])
}