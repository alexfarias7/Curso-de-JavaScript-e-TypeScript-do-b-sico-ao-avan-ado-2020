const numero =10
// se p if for verddadeiro ,fazer o cpodifo do is
// se o else for verdadeiro fazer o bloco de chaves do else
if (numero>=0 && numero<=5){
    console.log( `sim, o numero ${numero} está entre 0 e 5`)
} else if (numero>=6 && numero<=8){
    console.log(`o numero ${numero} está entre 6 e 8`)
}else if (10===10){//verdadeiro
    console.log('literal')
} 
else if ( numero >=9 && numero <=11 ){//verdadeiro
                                    // a condição do bloco if vai retornar a primeira condição que for verdadeira
    console.log(` o numero ${numero} está entre 9 e 11 `)
}
else{
    console.log(`o numero ${numero} não esta entre 0 e 11`)
}

if (10===10){// para checar outra condição verdadeira é melhr azer outro if
    
    console.log('outro if')
}
console.log( 'aqui vai o resto do código')