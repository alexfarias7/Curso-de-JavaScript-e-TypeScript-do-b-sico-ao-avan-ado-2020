/* let a='A'
let b ='B'
let c = 'C'

const num= [b , c, a];
[a ,b ,c] = num;//atribuição via desestrutulação

console.log(a,b,c) */
//..rest
//...spread
const numeros  = [10,20,30,40,50,60,70,80];

//const primeironumero = numeros[0]

//const [primeironumero, segundonumero, terceironumero,...resto]=numeros

//console.log(primeironumero, segundonumero, terceironumero, ...resto)//...pega o restante dos arrays

//console.log(resto)//pega o restante dos arrays
//const [um, ,  tres,  , cinco, , sete]=numeros;
//console.log(um, tres, cinco);


const num =[
    [1,2,3],//iindice zero(0,1,2)
    [4,5,6],//indice um(0,1,2)
    [7,8,9]//indice dois(0,1,2)
]

//console.log(num[1][2])
//const [,[,,seis]]=num;
const[lista1,lista2, litsta3]= num
console.log(lista2[1])

//console.log(seis)// pela atribuição