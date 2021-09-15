const h1 = document.querySelector('.container h1')
const data = new Date()

function getNomeMes(numeromes){
    const meses=['janeiro','fevereiro','março','maio','abril', 'junho','julho','agosto', 'setembro', 'outubro', 'novembro','dezembro'
    ];
    return meses[numeromes]
}

function getDiaSemanaTexto(diasemana){
    const diasSemana =[
        'domingo','segunda','terça','quarta','quinta','sexta','sabado'
    ]
    return diasSemana[diasemana]
}
function zeroEsquerda(num){
    return num>=10?num: `0${num}`;
}

function criarData(data){
    const diasemana=data.getDay();
    const numeromes= data.getMonth();

    const nomeDia = getDiaSemanaTexto(diasemana)
    const nomeMes = getNomeMes(numeromes)

    return(
        `${nomeDia}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()} ` +
        `${zeroEsquerda(data.getHours())}:${zeroEsquerda(data.getMinutes())}:${zeroEsquerda(data.getSeconds())}`
    )
 


}

h1.innerHTML= criarData(data);
