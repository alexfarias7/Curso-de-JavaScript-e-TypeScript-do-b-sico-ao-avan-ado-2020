const conta = function conta (operador, acumulador,... numeros){//rest operator
                                                  // envia todos os parametros restanmtes
                                                  // rest operator sempre deve ser o ultimo parametro
    console.log(operador, acumulador, numeros)

    for(let valor of numeros){
        console.log(valor);
       if (operador==='+') acumulador +=valor;
       if (operador==='-') acumulador -=valor;
       if (operador==='/') acumulador /=valor;
       if (operador==='*') acumulador *=valor;

    }
    console.log(acumulador )

};
conta('+', 1,20,30,40,50)

console.log('--------')

const conta2 = function conta (operador, acumulador,... numeros){
console.log(arguments)
}
conta2('+', 1,20,30,40,50)
console.log('--------')

 const conta3 = (...args)=>{
console.log(args)
}
conta3('+', 1,20,30,40,50)
