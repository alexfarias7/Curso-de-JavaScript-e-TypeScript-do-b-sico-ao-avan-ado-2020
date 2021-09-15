function relogio(){

function getTimeSecons(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    });

}


const relogio = document.querySelector('.relogio')


let segundos = 0;
let timer;

function iniciaRelogio() {
    timer = setInterval(function () {
        segundos++;
        relogio.innerHTML = getTimeSecons(segundos);

    }, 1000)
}
document.addEventListener('click', function (event) {
    const elemento = event.target

    if (elemento.classList.contains('zerar')) {

        clearInterval(timer);
        relogio.innerHTML = `00:00:00`
        segundos = 0;
        
    relogio.classList.remove('pausado')
    }
    if (elemento.classList.contains('iniciar')) {

    relogio.classList.remove('pausado')
    clearInterval(timer)
    iniciaRelogio()

    }
    if (elemento.classList.contains('pausar')) {

        
    relogio.classList.add(`pausado`)
    clearInterval(timer)
    }
})

    

}

relogio()