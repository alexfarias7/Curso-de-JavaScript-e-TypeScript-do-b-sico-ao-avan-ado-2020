//todo indice é idexado
//valores por referencia
const nomes = [ 'eduardo', 'maria', 'joão']
nomes[2]= 'rafael'
console.log(nomes)
console.log('---------------')
//podemos deletar sem remover o indice
//funciona strins , objetos , funções e números
delete nomes[2]
console.log(nomes)
console.log('---------------')

const nomes2 = new Array ('eduardo','maria','fernando' )//array literal=> criado usando o construtor do array
console.log(nomes2)
console.log('---------------')

const novos = nomes
novos.pop()
console.log(nomes)
console.log('---------------')

const copia = [...nomes]// copia no array nome 
                          //não altera o array nomes
copia.pop();
console.log(nomes)
console.log(copia)
console.log('---------------')

const removido = nomes2.pop()//trabalha do final d array
nomes2.push('zeca', 'kleber')// adicina um elemnto do final do array
nomes2.shift()// remove o elemnto incial, e desloca os indices restantes do array
nomes2.unshift('joão')// adiciona um elemnto do inico do array
console.log(nomes2, removido)// para ver o elemento removido
console.log('---------------')

const fatiado = nomes2. slice(1,3)// fatia os elemntos
                            // o indice final não é incluido 
console.log(fatiado)// aparece os elemntos com idces 1,2 
const nomes3 = ['maria', 'fernana', 'pedro', 'paulo', 'josé']
const fatiado2= nomes3.slice(1,-2)//remove o elemento com indice 1 e o ultimo elemento já que conta ao contrario , quando pe indice negativo
console.log('---------------')
console.log(nomes3)
console.log(fatiado2)

const nome ='rafael silva costa'//string
const nomeSeparado = nome.split(' ')// SEPARA OS ELEMENTOS
console.log(nomeSeparado)


console.log('---------------')
const nomeDeNovo= [ 'rafael', 'silva', 'costa' ]// para o array virar uma string
const nome2 = nomeDeNovo.join(' ')//transformar um array em uma string
console.log(nome2)
