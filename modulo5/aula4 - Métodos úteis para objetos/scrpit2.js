const produto ={nome:'CANECA', PRECO:20};
const outroProduto = Object.assign({}, produto, {material:'porcelana'});// copa o objeto, so que com o Objkect.assin
const copo = {nome: produto.nome, preco: produto.PRECO}
//outroProduto.material = 'maderira'
Object.freeze(produto)// para não alterar o objeto
produto.nome= 'cadeira'
console.log(produto)
console.log(copo)
console.log(outroProduto)

console.log(Object.keys(produto))// mostra as chaves do objeto