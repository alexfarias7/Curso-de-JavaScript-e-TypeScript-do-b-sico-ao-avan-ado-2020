const h1 = document.querySelector('.container h1')
h1.innerHTML =' teste'
const data = new Date()

 function getNomeMes(numeroMes) {
   const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maior', 'junho',  'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
   return meses[numeroMes]
 }

function getdiaSemanatexto(diasemana){
    const diasSemana= ['domingo','segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sabado'];

    return diasSemana[diasemana]
    
}


/*function getdiaSemanatexto(diasemana) {
    let diasemanatexto;
    switch (diasemana) {
        case 0:
            diasemanatexto = 'domingo'
            return diasemanatexto
          
        case 1:
            diasemanatexto = 'segunda-feira'
            return diasemanatexto
        case 2:
            diasemanatexto = 'terça-feira'
            return diasemanatexto
        case 3:
            diasemanatexto = 'quarta-feira'
            return diasemanatexto
        case 4:
            diasemanatexto = 'quinta-feira'
            return diasemanatexto
        case 5:
            diasemanatexto = 'sexta -feira'
            return diasemanatexto
        case 6:
            diasemanatexto = 'sabado'
            return diasemanatexto
        default:
            diasemanatexto = "DIA INVALIDO"
            return diasemanatexto
    }

}


function getNomeMes(numeroMes) {
    let nomeMes
    switch (numeroMes) {
        case 0:
            nomeMes = 'Janeiro'
            return nomeMes
        case 1:
            nomeMes = 'Fevereiro'
            return nomeMes
        case 2:
            nomeMes = 'março'
            return nomeMes
        case 3:
            nomeMes = 'Abril'
            return nomeMes
        case 4:
            nomeMes = 'Maio'
            return nomeMes
        case 5:
            nomeMes = 'Junho'
            return nomeMes
        case 6:
            nomeMes = 'Julho'
            return nomeMes
        case 7:
            nomeMes = 'Agosto'
            return nomeMes
        case 8:
            nomeMes = 'Setembro'
            return nomeMes
        case 9:
            nomeMes = 'Outubro'
            return nomeMes
        case 10:
            nomeMes = 'Novembro'
            return nomeMes
          
        case 11:
            nomeMes = 'Dezembro'
            return nomeMes
          

        default:
            nomeMes = 'Mês Inválido'
            return nomeMes
          

    }

}
*/
function criaDate (data){
    const diasemana = data.getDay();
    const numeroMes = data.getMonth()

    const nomeDia = getdiaSemanatexto(diasemana)
    const nomeMes = getNomeMes(numeroMes)

    return (
        `${nomeDia}, ${data.getDate()} de ${nomeMes}`)+
        ` de ${data.getFullYear()}`+
        ` ${zeroEsquerda(data.getHours())} : ${zeroEsquerda(data.getMinutes())}`

}


function zeroEsquerda (num){
    return num >= 10 ?num: `0${num}`
}



h1.innerHTML = criaDate(data)
 

//const h1 = document.querySelector('.container h1');

//const data = new Date();

//h1.innerHTML = data.toLocaleDateString('pt-BR', {dateStyle:'full' ,timeStyle:'full'})
//h1.innerHTML = data.toLocaleDateString('pt-BR', {dateStyle:'full', ////timeStyle: 'short' } 

 