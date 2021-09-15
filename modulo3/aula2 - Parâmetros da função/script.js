// a função definica com a plavra function  tem a variavel arguments que sustenta argumentos enviados
function funcao(a, b=3, c =4, e ,f,g,h ,i, j ,k ,l ,m, ){
    let total = 0;
    for ( let argumentos of arguments){
      total +=argumentos

    }
    console.log(total, a, b, c)
    console.log('--------')

    console.log(total )
    console.log('--------')

    console.log( a, b, c , e ,f,g,h ,i, j ,k ,l ,m,)
    console.log('--------')

    b=b||0
    console.log(a+b+c)
    console.log('--------')


    console.log('oi')
    console.log('--------')
    console.log(arguments[3])// A VARIAVEL ARGIMENTS SUSTENTA TODOS OS AGRMENTOS ENVIADOS
    //SOMENTE COM A PALAVRA FUNCTION
    console.log('--------')
}
//funcao('VALOR', 1,2,3)
//funcao (1,2,3,4,5,6,7,8,9,10)//argumentos s~]ao os valores enviados para os parametros
funcao(2,undefined,10)//para pular um valor de um parametro colocar undeefined