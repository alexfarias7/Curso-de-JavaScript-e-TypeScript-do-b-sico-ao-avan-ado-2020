

function aleatorio(min = 0, max = 3) {
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

            return
        }, tempo);
    })
}
/* espera(" fase 1", aleatorio(0,3))
.then(valor =>{
    console.log(valor);
    return espera('fase 2', aleatorio())

}).then(fase=>{
    console.log(fase);
    return espera('fase 3 ' , aleatorio())
})
.then(fase=>{
    console.log(fase)
})
.catch(e => console.log(e)) */

//ASYNC

async function executa() {
    try {
        const fase1 =  espera('fase 1 ', 1000)
        console.log(fase1);
        setTimeout( function(){
            console.log('essa promisse estava pendente ', fase1);
        }, 1000)
        const fase2 = await espera('fase 2', aleatorio())
        console.log(fase2)
        const fase3 = await espera('fase 3 ', aleatorio())
        console.log(fase3)
        console.log(' terminamos na fase : ', fase3)
    } catch (e) {
        console.log(e)
    }


}
//executa()
const testr2 = espera('ola', 3000);
console.log(testr2)

//pendente- quando a promisse ta sendo executada e aindda não retornou aoo valor
//fullfilled - representação dela resolvida
/// rejected - uma promisse rejeitada