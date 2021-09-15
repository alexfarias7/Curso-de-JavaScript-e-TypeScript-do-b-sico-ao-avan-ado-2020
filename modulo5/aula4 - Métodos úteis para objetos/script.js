

const produto ={nome:'CANECA', PRECO:20};
const outroProduto = {
    ...produto,
    material:  'madeira'// podeser adicionado outra chav do spread operator
}


produto.nome = 'cadeira'

outroProduto.nome = 'mesa'
outroProduto.PRECO= 35

console.log(produto)
console.log(outroProduto)