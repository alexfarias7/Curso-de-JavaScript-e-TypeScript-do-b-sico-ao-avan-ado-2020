 function aleatorio(min, max) {
    min *= 1000;
    max *= 1000;

    return Math.floor(Math.random() * (max - min) + min);
}

function espera(msg, tempo, cb) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
        if (typeof msg !== "string") {
            reject('erro!');
            return;
        };
            
            resolve(msg.toUpperCase() + ' - passei na promisse')
             //if (cb) c
            //b()
            resolve(msg);
        }, tempo);
    })
}
//promisse.all
const promises = [
    //'primeiro valor',
    espera(1000, aleatorio(1,3)),    
    espera(' promisse 1', aleatorio(1,3)),
    espera(' promisse 2', aleatorio(1,3)),
    espera('promisse 3', aleatorio(1,3)),

    //'outro valor'
];
 Promise.all(promises)
    .then((valor) => {
        console.log(valor)
    })
    .catch((erro) => {
        console.log(erro)
    }) 
 
    //promisse.race=> vai entregar o primeiro valor
    //vai continuar entregando todas as promessas



/*     
    Promise.race(promises)
    .then((valor) => {
        console.log(valor)
    })
    .catch((erro) => {
        console.log(erro)
    })
 */
    //promisse.resolve
    //retorna uma promessa resolvida
     
 /*    function baixapagina(){
        const emCache = false;
        if (emCache){
            return Promise.resolve('pagina em cache');
        }else{
            return espera('baixei a pagina', 3000)
        }
    }

  
    baixapagina()
    .then(dadosPagina => {
      console.log(dadosPagina);
    })
    .catch(e => console.log('ERRO', e)); */

    //promisse.reject => vai retornar ao erro
    function baixapagina(){
        const emCache = true;
        if (emCache){
            return Promise.reject('pagina em cache');
        }else{
            return espera('baixei a pagina', 3000)
        }
    }

  
    baixapagina()
    .then(dadosPagina => {
      console.log(dadosPagina);
    })
    .catch(e => console.log('ERRO', e));