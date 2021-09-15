// A função map => altera os valores do array

//dobre os valores 
 const numeros=[5,10,15,20,25,30,35,40]
    const numerosNormal = numeros.map(function(valor, indice , array){
       // console.log(valor, indice, array);
        // retorna o valor com  uma quantia diferente
        return `Valor => ${valor}`
    });

    const numerosDobro = numeros.map(valor=> `valor => ${valor*2}`)
    console.log(numerosNormal)
    console.log('----------------')
    console.log(numerosDobro)