function mostrahora(){
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12:false
    })
}
console.log(mostrahora())

/* function funçãodointerval(){
    console.log(mostrahora())
} */
const timer = setInterval(function (){
    console.log(mostrahora())
}, 1000);


setTimeout(function(){
clearInterval(timer);
}, 3000);
setTimeout(function(){
console.log('olá mundo')
}, 3000)