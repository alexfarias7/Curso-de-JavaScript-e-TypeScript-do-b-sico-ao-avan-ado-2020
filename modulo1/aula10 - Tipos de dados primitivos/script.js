const nome = 'Luiz'//string
const nome1 = "luiz"//string
const nome2 = `Luiz`//string

const num1 = 10//number
const num2 = 11.85//number

let nomeAluno//undefined=>não aponta para local nenhum na memoria
             // variavel não inializada

let sobrenomeAluno = null//utiliza-se quando se quer desconfigurar uma variavel
                         //nulo=>não aponta pra nenhum local da memória


const aprovado = true //booleano
                      //só pode ser dois valores:true ou false
                      //valor lógico


console.log(typeof nome2, nome2)
console.log(typeof num1, num1)
console.log(typeof nomeAluno, nomeAluno)
console.log(typeof sobrenomeAluno, sobrenomeAluno)//null é um obheto
console.log(typeof aprovado,aprovado)

const a = [1,2,3]
const b = a
 console.log(a,b)

 b.push(4)
 console.log(a,b)

 let numero1 = 3
 let numero2 = numero1

 console.log(numero1, numero2)//3,3
  numero1= 5// não modifica o numero2
 console.log(numero1,numero2)//5,3

numero2=numero1//é preciso fazer outra operação para aletrar numero2
 console.log(numero1,numero2)