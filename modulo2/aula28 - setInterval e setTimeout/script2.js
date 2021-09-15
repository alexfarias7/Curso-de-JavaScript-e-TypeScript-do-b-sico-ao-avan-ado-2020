function mostraHora(){
    let data = new Date();
    return data.toLocaleTimeString('pr-BR', {
        hour12:false
    })
}
mostraHora()
console.log(mostraHora())



const timer = setInterval(function(){
    console.log(mostraHora())
}, 1000)//vai consficaurar um intervalo de tenmpo

setTimeout(function () {
    clearInterval(timer)
}, 3000)


console.log('------')


setTimeout(function(){
  console.log('parou')  
}, 3000)