
//if pode ser usado sozinho
//sempre que utilizar o else , precisa de if antes
// o else if pdode ser criados ifinitamnete na checagem
// so se pode ter  um else da checagem
// podemos utiçlizar condições somente o if
const hora = 19;
if ((hora>0)&&(hora<6)){
    console.log('bom MADRUGADA')
    console.log(hora+10)
}else if((hora >=6)&&(hora<12)){
    console.log('bom dia')
}else if ((hora>=12)&&(hora<18)){
    console.log('boa tarde')
}else{
    console.log('boa noite')
}