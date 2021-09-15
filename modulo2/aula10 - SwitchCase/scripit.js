
/*const quatrohoras = 60*60*4*1000;
const  umDIA = 60*60*24*1000;*/
const data = new Date(2020, 3,20,15,14) // ano .mes , dia , hora , minuto ,sgundo ,milisegundo
// A função Date é uma função construtora
console.log(data.toString())// mes:  0-11

//const data2 = new Date('2019-04-20 20:15:55')// data via string
const data2 = new Date(1629582222202)
console.log('DIA', data2.getDate())
console.log('mes', data2.getMonth()+1)//mes comeca o zero
console.log('ano', data2.getFullYear())
console.log('hora', data2.getHours())
console.log('minuto', data2.getMinutes())
console.log('milisegundo', data2.getMilliseconds())// 0-domingo, 6 -sabado
console.log('dia da semnana', data2.getDay())
console.log(data.toString())

console.log(Date.now())

function zeroEsquerda (num){
    return num >= 10 ?num: `0${num}`
}




function formataData (data3) {
    const dia = zeroEsquerda (data3.getDate());
    const mes =zeroEsquerda ( data3.getMonth()+1);
    const ano =zeroEsquerda ( data3.getFullYear());
    const hora = zeroEsquerda( data3.getHours());
    const minuto = zeroEsquerda (data3.getMinutes());
    const segundo = zeroEsquerda (data3.getSeconds());
    const milisegundo =zeroEsquerda(data3.getMilliseconds());

    return `${dia} / ${mes} / ${ano}     ${hora}/ ${minuto}/ ${segundo}/ ${milisegundo}`

   // console.log(data3)
}
const data3 = new Date();
const dataBrasil = formataData(data3)
console.log(dataBrasil)
