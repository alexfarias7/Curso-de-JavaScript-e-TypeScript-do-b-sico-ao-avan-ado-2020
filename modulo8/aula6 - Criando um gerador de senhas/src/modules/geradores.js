const rand=(min, max)=>Math.floor(Math.random()*(max-min)+min)
const geraMaiuscula =()=>String.fromCharCode(rand(65, 91)) ;
const geraMisnucula =()=>String.fromCharCode(rand(97, 123)) ;
const geraNumero =()=>String.fromCharCode(rand(48,58))
const Simbolos = '!@#$%&*_=+?[]{}()£¢¬§*-';
const geraSimbolo =()=>Simbolos[rand(0, Simbolos.length)];


export default function geraSenha( quantidade, maiuscula, minusculas, numeros, simbolos){
    const senhaArray=[];
    const qtd = Number(quantidade);

    for( let i=0;i<=qtd; i++){
        maiuscula && senhaArray.push(geraMaiuscula());
        minusculas && senhaArray.push(geraMisnucula());
        numeros &&  senhaArray.push(geraNumero());
        simbolos && senhaArray.push(geraSimbolo());
    }
    return senhaArray.join('').slice(0, qtd)
}
