//IEEE 754-2008

let num1= 1500//number
let num2 =2.55//number
console.log(num1+num2)
console.log(num1.toString()+num2)//transforma o numero para string temporariamente
//num1= num1.toString(2) representação binária
num1=num1.toString()// transformar para uma string 
num2=String(num2)// transformar para uma string 
console.log (typeof(num1), typeof(num2))
//console.log(num2.toFixed(2))// mostra somente duas casas decimais
console.log(Number.isInteger(num2))//para saber se o número é inteiro

let temp = num1*"olá"
console.log(Number.isNaN(temp))//retorna verdadeiro caso a conta seja invalida

let num3=0.2
let num4=0.3

num3 += num4// num3= num3+num4
num3 += num4
num3 += num4
num3 += num4
num3 += num4

//num3 = ((num3*100)+(num4*100))/100

num3 =parseFloat(num3.toFixed(2))
console.log(num3)
console.log(Number.isInteger(num3))// para saber se o numero pe inteiro