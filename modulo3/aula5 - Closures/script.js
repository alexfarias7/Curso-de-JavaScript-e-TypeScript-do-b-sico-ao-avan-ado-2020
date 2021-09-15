//global
//closures - é a habilidade da função em acessar o seu escopo lexico
function retornaFuncao(nome){
   // const nome ='joão'
    return function(){
     return nome;

    }
}

const funcao = retornaFuncao('pedro')
const funcao2 = retornaFuncao('rafael')
console.dir(funcao)
console.dir(funcao2)

console.log(funcao(), funcao2())