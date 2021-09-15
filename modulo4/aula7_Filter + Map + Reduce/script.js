// retorne a soma do dobro de todos os pares:
// 1-filtrar os pares 
//2- dobra os valores
//3- reduzir tudo

const numeros = [ 5,10,15,20,25,30,35,40,45,50]

/* 
// filtrar os pares 
const retornaPar = numeros.filter(valor=> valor%2===0)
//dobra os valores
const dobraValor = retornaPar.map(valor=> valor*2)
//soma o valor
const somaNum= dobraValor.reduce((ac, valor)=> ac+valor)
console.log(somaNum)
console.log(dobraValor)

 */

//forma limpa e reduzida
const valorNum = numeros
.filter((valor)=>valor %2===0)
.map(valor=>valor*2)
.reduce((ac, valor)=>ac+valor)
console.log(valorNum)