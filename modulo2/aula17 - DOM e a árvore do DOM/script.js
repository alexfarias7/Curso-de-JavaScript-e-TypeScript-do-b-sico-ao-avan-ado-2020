//i=index]

/* for(let i =5; i<=20; i+=2){
  console.log(`linha ${i}`)
} */
/* for(let i =40; i>=20; i-=2){
  console.log(`linha ${i}`)
} */

for( let i = 0; i<=12; i++){
    const par = i% 2 === 0 ?'par':'impar';

    console.log(i,par)
}

const frutas =['maçã', 'pera', 'uva', 'abacate', 'morango'];
console.log(frutas.length)
for (let i=0; i<frutas.length;i++) {
   
    console.log(`inddice ${i} : `, frutas[i])
}