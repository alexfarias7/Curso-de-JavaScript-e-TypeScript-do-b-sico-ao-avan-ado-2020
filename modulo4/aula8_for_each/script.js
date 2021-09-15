// o FOR EACH SÓ ESTA DIPONIVEL DENTRO DE ARRAYS

const num = [10,20,30,40,50,60,70,80,90,100]
// para FOR OF
 for (let valor of num){
     console.log(valor)
 }
 console.log('----------------')

 // usando FOR EACH
 num.forEach(function(valor, indice, array){//sempre vai ter tres paramestros cujos os valores são : valor , indice e o array
console.log(` o valor ${valor} tem o indice ${indice} e vem do array: [${array}]`)
 })
 console.log('----------------')
 num.forEach(valor=>console.log(valor))// pode ser reduzida em uma linha

 console.log('----------------')
 let total=0
 num.forEach(valor=>{
    
     total +=valor
 })
 console.log(total)
 //so vai fazer iinteração para array