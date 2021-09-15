// Reduz um array em um unico elemento

// some todos os numeros
const numeros=[5,10,15,20,25,30,35,40]
const total = numeros.reduce(function (acumulador, valor , indice, number){
    acumulador+=valor
  //console.log(acumulador, valor) 
  return acumulador 
},0)// se não mandar o valor inicial , o valor do acumulaodr vai ser do primeiro elemnto do array
console.log(total)//

// retornar os array com os valores pares
const retornaPar = numeros.reduce(function(acumulador, valor) {
    if(valor % 2 === 0) acumulador.push(valor);
    return acumulador;
  
  }, [])
console.log(retornaPar);

// retonar um arrayt com o dosro dos valores
const dobraValor = numeros.reduce(function(acumulador, valor){
     acumulador.push(valor*2)
     return acumulador
},[])

console.log(dobraValor)

const somaPar = numeros.reduce(function(acumulador, valor){
 if (valor %2===0){
    acumulador += valor
 }
 return acumulador;
}, 0)
console.log(somaPar)
