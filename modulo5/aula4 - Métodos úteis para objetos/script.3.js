const produto ={nome:'CANECA', PRECO:20, material:'vidro'};
Object.defineProperty( produto,'nome',{
    writable:false,
    configurable:false,
    value: 'copo'
})
delete produto.nome
console.log(produto)
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))// descreve as propieddaes das chaves do objeto

console.log(Object.values(produto))// retorna ao valor do objeto
console.log(Object.entries(produto))//retorna a chave   eo valor do objeto

/* for (let entry of Object.entries(produto)){
    console.log(entry)
} */

/* for (let [chave, valor] of Object.entries(produto)){
    console.log(chave, valor)
} */

for ( let valor of Object.entries(produto)){
    console.log(valor[0], valor[1])
}