//Funções imediatas || Funções Autoinvocadas
//IIFE- IMEDIATELU INVOKED FUNCTION EXPRESSION
/* function Teste(){
    console.log('olá')
}
Teste */
( function(idade, peso , altura ){// ta fora do escopo global
  /*   const nome = 'roberto'
    console.log('olá')
    console.log(nome) */
    const sobrenome = 'Silva'
    function criaNome(nome){
        return `${nome} ${sobrenome}`
    }
    function falaNome(){
        console.log( criaNome('Zeca'))
    }
    
    falaNome()
    console.log(idade, peso, altura)

}) (25,80, 1.80);
// para criar uma função autoinvocada é preciso envolver  a função com parentes
//para chamar a função não precisa da palavra function

const nome = 'pedro'