const numeros =[1,2,3,4,5,6,7,8,9,10,11,12];

//for (let i of numeros){

//for (let i in numeros){
  //  let ind = numeros[i]
for (let i=0; i<numeros.length; i++){
    let ind = numeros[i]
    if (ind===2|| i===5){//condição estabelecida
        console.log('pulei  o numero 2 e 5')
        continue;//pula uma interação pedida
                // exeutar o continue antes da ação
    }

    if(ind ===3){
        console.log('pulei o numero 3')
        continue;
    
    }
 console.log(i);//ação

    if (ind===7){
       console.log('7 encontado, saindo...')
        break;
    }


}

//continue  continua para a proxima interação
// o break para o laço de repetição