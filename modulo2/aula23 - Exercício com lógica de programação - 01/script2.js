const numeros = [1,2,3,4,5,6,7,8,9,10];
let i=0

//while ( i< numeros.length){
    do{
    let ind = numeros[i];


if (ind===2|| i===5){//condição estabelecida
    console.log('pulei  o numero 2 e 5')
    i++;
    continue;//pula uma interação pedida
            // exeutar o continue antes da ação
}

if(ind ===3){
    console.log('pulei o numero 3') 
    i++;
    continue;

}
console.log(i);//ação

if (ind===7){
   console.log('7 encontado, saindo...')
   i++;
    break;
}


i++;
}while ( i< numeros.length)
