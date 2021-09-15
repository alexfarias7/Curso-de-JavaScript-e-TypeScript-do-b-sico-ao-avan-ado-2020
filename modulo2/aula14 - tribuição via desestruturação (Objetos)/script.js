var sobrenome
const verdadeira = true

//let nome = 'luiz'//não pode redeclarar a variavel let
// LET tem escopo de bloco]
//Var só tem escopo de função

//var nome = 'luiz'//pode ser redeclarada
//criando
/*   var nome2 = 'pedro'//criando


   if (verdadeira) {
       let nome = 'rafael'//criando
       var nome2 = 'rogerio'//redeclarando

       //console.log(nome,nome2)

       if (verdadeira) {
           let nome = 'outra coisa'
           var nome2 = 'julio'//redeclarad0

       }
   }

   console.log(nome, nome2)*/

/*function falaOi() {

    if (verdadeira) {

        let nome = 'paulo'//não pode usar uma variavel LET fora do bloco    
        var sobrenome = 'silva'
        console.log(sobrenome)
    }
    console.log(sobrenome)
}

falaOi()*/
sobrenome='costa'//elevação ou Hoisting, eleva a declaração das vvariaveis
console.log(sobrenome)

console.log(sobrenome2)
let sobrenome2 = 'silva'//não acontece o hoisting com o let
