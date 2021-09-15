//filter - vai filtrar o array
// sempre retorna um arra  com a mesma quatida de elementos ou menos
//retorna os numeros maiores que  10
const numeros = [5, 50, 80, 8, 7, 11, 15, 25, 27, 3, 4, 3]
function callbackFilter(valor){ /* indice, array * // não estão sendo usado/) {
//quando tiver a condição, retorne a condição e não verdadiro ou falso
/*   if (valor > 10) {
    return true;
  } else {
    return false
  }
}
 */
return valor>10;
}
const numFiltrados = numeros.filter(callbackFilter)
// pode ser usado tambem uma função anonima
const  numFiltrados2 = numeros.filter(function(valor){
return valor>10
})
// pode ser usado tb arraow fuction
const numerosFiltrados3 = numeros.filter((valor, indice, array)=>{
console.log(valor, indice, array);
return valor>10}
)
// forma resumida
const numerosFiltrados4 = numeros.filter(valor=> valor>10)// quando a função tem somente uma linha o retorno é implicito
console.log(numFiltrados)
console.log(numFiltrados2)
console.log(numerosFiltrados3)
console.log(numerosFiltrados4)
