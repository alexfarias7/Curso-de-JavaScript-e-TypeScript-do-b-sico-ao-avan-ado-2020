/*window.alert('Com a nossa menssagem')
alert('atalho')
window.confirm('apagar?')
confirm('Deseja realemte apagar?')
window.prompt('Digite o seu nome')
prompt('atalhjo: digite o  nome?')

const confirma=confirm('deseja realmenta pagar?')
console.log(confirma)*/

let num1= prompt( 'digite um numero:')// tudo que é retornado pelo metodo prompt pe string
let num2 = prompt('digite outro numero:')
let numero1 = Number(num1)
let numero2= Number(num2)
let resultado =numero1+numero2
let res = alert(`o resultado da soma foi ${resultado}`)
//são metodos, pois as funções eão dentro do objeto window
// se estiver fora do objeto são chamado de função