/*
OPERADORES LOGICOS
 && => AND => E // Todas as expressões pra retornarem TRUE
 || => OR =>OU // só precisa de uma expressão para retornar TRUE
 ! => NOT => NÃO//ele inverte(NEGA) uma expressão
*/

const expressaoAnd = true&& true && true && false
const expressaoOr = true || false||false


console.log(expressaoAnd)
console.log( expressaoOr)

const usuario  = 'luiz'// form que o usuario digitou 
const senha = '254755'// form que o usuario digitou

const vaiLogar = usuario ==='luiz' && senha ==='254785'
console.log(vaiLogar)

console.log(!false)
console.log(!!false)// inverteu os valores duas vezes
