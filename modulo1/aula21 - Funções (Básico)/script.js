const alunos = ['luiz' , 'maria','joão']// as strings são indexadas

const variados = ['luiz' , 'maria','joão', 1, true ,null]// pode ser clocados diversos valores de tipos diferentes
console.log(alunos)
console.log(alunos[2])//para acessar os valores se cooloca o indice

alunos[0]= 'eduardo'
console.log(alunos)

alunos[3]='luiza'
console.log(alunos)
console.log(alunos.length)//mesma maneira 

alunos[alunos.length] = 'pedro'//adiciona no final
console.log(alunos)

alunos.push('otávio')// adiociona um elemnto do final
console.log(alunos)

alunos.unshift('fabio')//adiciona um elemento no começo do array
console.log(alunos)

alunos.pop()//remove um elemento do final do array
console.log(alunos)

const removido = alunos.pop()//captura o elemnto removido
console.log(removido)

alunos.shift()//remove o primeiro elemento de um array
console.log(alunos)

delete alunos[1]
console.log(alunos)// remove o elemto e o indice dele de um aray

console.log(alunos[50])// acessa um valr inexistesnte

alunos.push( 'luiza')
alunos.push( 'ricardo')
console.log(alunos)

console.log(alunos.slice(0, 3))//recorrta um array
console.log(alunos.slice(0,-2))

console.log(typeof alunos)
console.log(alunos instanceof Array)//pergunta se é uma instncia de array