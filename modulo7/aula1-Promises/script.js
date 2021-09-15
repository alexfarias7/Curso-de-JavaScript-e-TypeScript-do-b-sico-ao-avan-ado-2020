//PROMISSES=>

function aleatorio(min, max) {
    min *= 1000;
    max *= 1000;

    return Math.floor(Math.random() * (max - min) + min);
}

function espera(msg, tempo, cb) {
    return new Promise((resolve, reject) => {
        if(typeof msg !=="string") reject('bad value')

        setTimeout(() => {

            /*   if (cb) cb(); */
            resolve(msg);
        }, tempo);
    })



}
espera('frase 1', aleatorio(1, 3))
    .then(respota => {
        console.log(respota);
        return espera(22222, aleatorio(1, 3));
    })
    .then(respota => {
        console.log(respota);
        return espera('frase 3 ', aleatorio(1, 3));
    })
    .then(respota=>{
        console.log(respota)
    }).then(()=>{
        console.log('acabou!')
    }).catch(e=>{
        console.log('erro', e)
    })
    console.log('vai ser exibido antes')

/* espera('frase1', aleatorio(1,3), function(){
    espera('frase2', aleatorio(1,3), function(){
        espera('frase3', aleatorio(1,3));
    }  )
})
 */
