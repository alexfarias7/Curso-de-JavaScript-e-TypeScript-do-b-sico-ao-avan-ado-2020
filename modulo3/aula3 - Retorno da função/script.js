//retorno
//return
//retorna um valor
//termina a função
 function soma(a,b){
     return a+b
 }
 console.log(soma(2,5))

 let s1 = soma(2,5)
 console.log(s1)

 //alert('ola mundo')
 console.log(soma(5,2))

/*  document.addEventListener('click', function(){
     document.body.style.backgroundColor='red';//não retorna a nada , mas modifica um elemneno
 })

 // *///temos funções que retornam o  valor e que não retorna o valor

 function criaPessoa (nome, sobrenome){
return{nome, sobrenome}
 }
 const p1= criaPessoa('joão', 'oliveira')
console.log(p1)
console.log(typeof p1)
const p2={
    nome:'joão',
    sobrenome:'oliveira'

}
console.log(p2)

function falaFrase (comeco){
    function falaResto(resto){
        return ` ${comeco}  ${resto}`
    }
    return falaResto
}

const olamundo = falaFrase('olá')
console.log(olamundo('mundo'))

console.log('---------')
/* function duplica(n){
    return n*2
}
function triplica(n){
    return n*3
}
function quadriplica(n){
    return n*4
} */
/* function criaMultiplicador(multiplicador){
    //multiplicador
    function multiplicacao(n){
        return n*multiplicador
    }
    return multiplicacao;
}
 */
//forma abrreviada

function criaMultiplicador(multiplicador){
    //multiplicadir
    return function (n){
        return n*multiplicador;
    }
}

const duplica = criaMultiplicador(2)
const triplica = criaMultiplicador(3)
const quadriplica = criaMultiplicador(4)
console.log(duplica(2), triplica(2), quadriplica(2))
