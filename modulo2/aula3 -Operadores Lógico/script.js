console.log('luiz' && true && "maria")// retorna a ultima expressão, wuando tdos os valores saõ true
console.log('luiz' && true && NaN)// retorna a expressão falsa

/*
FALSY// são valores que são avaliados falsos quando necessários 
false
0
"" "" '' ``
null/undefined
Nan

// os valores difentes desses elemtos são valiados TRUE

*/

console.log('LUIZ' && 0 && 'maria')
console.log('LUIZ' && '' && 'maria')
console.log('LUIZ' && null && 'maria')

function falaoi() {
    return 'ola'
}

const vaiExecutar = 'joão'
console.log(vaiExecutar && falaoi())

console.log(0||false||null||'pedro')// precisa uma expressao prara retornau um valor verdadeio
// retornou o primeiro verdadeiro

const corUsuario = null
const corPadrão =corUsuario||'red'
console.log(corPadrão)


const a=0
const b=null
const c=null//string==verdadeiro
const d=false
const e=NaN// se todas as expressões foram falsas retorna o valor da ulktima expressão falsa

console.log(a||b||c||d||e)