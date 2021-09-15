let controle = 0

while (controle<=10) {// checa a condição e depois executa o código
    console.log(controle)
    controle++
    
}
console.log('---------')
/* 
const nome = 'rafael'
let i=0
while ( i<nome.length) {
    console.log(nome[i]);
    i++    ;
} */

function random (min, max){
    const r = Math.random()*(max - min)+ min
    return Math.floor(r)
}
const min =1;
const max =50

let rand = random(min,max)

while (rand !==10) {
    rand= random(min, max);
    console.log(rand);
}
console.log('---------')
//DO WHILE=> faz o código pimeiro e depois execura a condição
do {

    console.log(rand);
}while( rand !==10);