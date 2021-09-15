//tratamento de erros

/* try{
    console.log(nãoExito)
}catch(ERROR) {
    console.log('nãoExisto não existe')
    console.log(ERROR)
}
 */

function soma (x,y){
    if(typeof x!=='number'|| typeof y!=='number'){
        throw new Error('x e y precisam ser numeros');

    }
    return x+y
}

try{
    console.log(soma(20, 30))
console.log(soma('20', 30))
}catch(error){
   // console.log(error)
   console.log('algo amigavel')
}

