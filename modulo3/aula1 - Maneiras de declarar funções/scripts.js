//DECLARAÇÃO DE FUNÇÃO
//function Hoisting=>eleva as declarações de fuçãoes e as variaveis para o topo do javascript


falaOI();

function falaOI  (){
    console.log('oi')
}//falaOI()

//first class objects(objetos de primeiras classe)
// a função póde ser tratada como dado
//function esppression

const souUmDdado = function (){
    console.log('sou um dado')
}

souUmDdado();//pegou o nome da função anonima

function executaFunção(funcao){

    console.log('vou executar a função sou un dado')
funcao()
}
executaFunção(souUmDdado)

//ARROW FUNCTION
const arrow = ()=>{
    console.log('exemplo de arrow function ')
}
arrow()

//todas as funções são tratadas com objetos de primeira classes

//dentro de objeto
const obj ={
    falar: function(){
        console.log('estou falando')
    }
}
obj.falar();

const obj2 ={
    falar(){
        console.log('estou falando...');
    }
}

obj2.falar()