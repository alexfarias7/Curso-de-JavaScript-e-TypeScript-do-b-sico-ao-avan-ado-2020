//               0       1|-4     2|-3          3|-2    4|-1
const nomes = ['maria', 'joão', 'eduardo', 'fernando', 'zeca']

//const removidos = nomes.splice(-2,1)// remmove o ultimo elemento , e escolhedo so rember um  elemento
//const removidos = nomes.splice(-2,Number.MAX_VALUE)// remove até o fim do array
// pode remover mais de um elemnto
/* const removidos = nomes.splice(2,0,'luiz')// para não remover nenhum elememnto
                                            //adiciona um elemneto do indice pedido */
//const removidos = nomes.splice(3,2,'luiz','pedro')troca o elemento                                     
/* const removidos = nomes.splice(-1,1 )//simula o pop                                     */
//const removidos= nomes.splice(0,-1)//SIMULA O shifit
//nomes.splice(nomes.length, 0, 'pedro', 'arthur')//SIMULA O PUSH
const removidos= nomes.splice(3,0, 'pedro')//SIMULA O unshifit
/**const removidos= nomes.splice(0,-1)//SIMULA O shifit
const removidos= nomes.splice(0,-1)//SIMULA O shifit */
//console.log(nomes ,removidos)
console.log(nomes)