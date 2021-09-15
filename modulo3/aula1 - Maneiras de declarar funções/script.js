//declaração de função
//FUNCTION HOISTING=> ELEVA as ddeclarações de funções e de variaveis definidas para o todo do javascript

falaOI()// pode ser executada antes de chamar ela
function falaOI(){
    console.log('OI')
}

falaOI()

// FIRTS-ClASS objects ( objetos de primeira classe)=> a função pode ser tratada como dado;
// Expressão de uma  função
//uma constanmte recebe uma função como dado
const Souumdado = function(){//função anonima = função sem nome
    // uma const pode receber uma funçao como daDO
    console.log('sou um dado')
}
Souumdado()//PODE USAR UMA VAIAVEL COMO UMA FUNÇÃO
            // o nome da função se tornou o nome da variavel

function executaFunção(funcao){//variavel dentro da função
    console.log('vou executar o teste')
    funcao()
}
executaFunção(Souumdado)

//ARROR FUNCTIONS

const arrowfunction = ()=>{
    console.log('sou uma arrow function')
}

arrowfunction()

//dentro de umm objeto pode se ter uma função
const obj ={
    falar (){
        console.log('estou falando')
    }
}
obj.falar()