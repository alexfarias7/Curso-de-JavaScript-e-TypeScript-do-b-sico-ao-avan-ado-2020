function saudaçao (nome){
// ´so pode acessar esses elemntos dentro da função

return `bom dia  ${nome}`

}

saudaçao('Pedro')// chama e executa a função
saudaçao('Maria')
saudaçao('Rafael')

const variavel = saudaçao('Paulo')
console.log(variavel)

function soma (x=1 , y=1){
    const res =x+y
    return res// encerra a função aqui
    console.log('olá mundo')//não sera executadp
}
console.log(soma(5,8));
console.log(soma(5,5));
console.log(soma(9,2));
console.log(soma(6,4));

//console.log(res) => não é possivel acessar
const res = soma(3,5)// cria uma variavel externa
console.log(res)

const res1 = soma()//valores sem paramebttos
console.log(res1)

const res2= soma(4)
console.log(res2)


const raiz = function (n) {
    return n **0.5

};// quando uma variavel recebe uma função precisa terminar comm ponto e vírgula

console.log(raiz(9))
console.log(raiz(25))
console.log(raiz(100))

const raiz2 =(n)=> Math.sqrt(n);//feita pela arrow function
console.log(raiz2(36))
console.log(raiz2(9))
console.log(raiz2(25))