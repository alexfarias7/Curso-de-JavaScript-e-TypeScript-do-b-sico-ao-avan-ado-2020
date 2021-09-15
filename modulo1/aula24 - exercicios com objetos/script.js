// Primitivos (ímutaves) - não se pode mudar o valor:
// string,number, boolen, undefined, null (nigint , symbol)
//valores copiados

let nome ='luiz'
nome ='otavio'
console.log(nome)
console.log(nome[0])
nome[0]='r'//não altera a letra pois é uma string
console.log(nome[0], nome)

let a='A'
let b=a// copia
console.log(a,b)

a = 'C'
console.log(a,b)// o valor de b não altera
// O s valores primitivos são cpiados quando passam a atribuição

//referencia (mutavel) - altera os valores
// array ,object , function
//passados por rederencia

let varA = [1,2,3]
let varB= varA// varB vai aponta para o mesmo valor de varA da memória

console.log(varA,varB)

varA.push(4)// adiciona o valor de A e B
console.log(varA, varB)


varB.pop()// remove o valor de VAR a E varB
console.log(varA, varB)

let varC = varB
console.log(varA , varC)

varA.push('LUIZ')
console.log(varC)

varD = [...varA]//COPIA o valor de A

varB.pop()
console.log(varD)

const pessoa ={
    nome:'paulo',
    sobrenome:'freitas',
}

const  pessoab = pessoa

pessoa.nome='pedro'

console.log(pessoab)

let pessoaC= pessoa
 pessoaC={...pessoa}
pessoa.nome= 'paulo'
console.log(pessoa)
console.log(pessoaC)

