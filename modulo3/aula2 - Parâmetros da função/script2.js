function funcao ({nome, sobrenome, idade}){// esta acontecendo a desesrttualização e retirando as variaveis

    console.log(nome,sobrenome, idade)
    let obj = ({nome:'rafel', sobrenome:'Motta', idade: 25})
}
funcao({nome:'rafel', sobrenome:'Motta', idade: 25});//enviado um objeto literal como argumetro na função
let obj = ({nome:'rafel', sobrenome:'Motta', idade: 25})
funcao(obj);




 function funcao2 ([valor1, valor2, valor3]) {
     console.log(valor1,valor2, valor3)

}
funcao2(['rafael', 'costa','25'])