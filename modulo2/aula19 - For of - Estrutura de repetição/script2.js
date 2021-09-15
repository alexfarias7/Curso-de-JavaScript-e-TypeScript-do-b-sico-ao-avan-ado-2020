// FOR IN => ler os indices ou chaves do objeto
const frutas = ['uva', 'pera','banana','laranja']
/* 
for(let i=0;  i<frutas.length; i++){
    console.log(frutas[i])
} */

/* for (let  indice in frutas){
    console.log(frutas[indice])
} */

const pessoa ={
    nome:'Pedro',
    sobrenome:'Costa',
    idade :30
}
 for (let key in pessoa){
     console.log(key , pessoa[key])
 }
 console.log(pessoa['nome'])