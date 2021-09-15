//capturaR  o evento do submit do formulario
const form = document.querySelector('#formulario')
form.addEventListener('submit', function (evento) {// Adiciona um evento que paara o submit
    evento.preventDefault();//prevenir o evento
    const inputPeso = evento.target.querySelector("#peso");
    const inputAltura = evento.target.querySelector('#altura')

    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)

    if (!peso) {
        setResultado('Peso inválido', false);
        return;
    }

    if (!altura) {
        setResultado('Altura inválida', false);
        return;
    }

    const imc = getIMC(peso, altura)
    const escalaIMC = getEscalaIMC(imc)

    const msg =`Seu IMC é ${imc}.<br> 
    A sua situação : ${escalaIMC}`;
    
    setResultado(msg, true)


})

//calcula a escala do imc
function getEscalaIMC (imc){
    const escala = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
    'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if(imc>=39.9) return escala[5];
    if(imc>=34.9) return escala[4];
    if(imc>=29.9) return escala[3];
    if(imc>=24.9) return escala[2];
    if(imc>=18.5) return escala[1];
    if(imc<18.5) return escala[0];

}

//função para calcular o imc
function getIMC(peso, altura) {
    const imc = peso / altura ** 2
    return imc.toFixed(2)

}


//função de criarparagrafos
function criaP() {
    const p = document.createElement('p');
    return p;


}

//função adicionar uma mensagem em html da div resultado
function setResultado(msg, isValid) {
    const resultado = document.querySelector('#res')//captura o resultado
    resultado.innerHTML = "";

    const p = criaP();
    
    if(isValid) {
        p.classList.add('paragrafo-resultado')
    }else{
        p.classList.add('bad')
    }


    p.innerHTML = msg
    resultado.appendChild(p)

}