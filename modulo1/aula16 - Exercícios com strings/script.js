const nome = prompt('Digite o seu nome completo: ');
document.body.innerHTML=` O seu nome é <strong>${nome}</strong><br>`
console.log(nome)
document.body.innerHTML+= `seu nome tem <strong>${nome.length}</strong> letras</br>`
document.body.innerHTML += `A segunda letra do seu nome é : <strong>${nome[1]}</strong><br>`
document.body.innerHTML += `Qual o pimeiro indice da letra E no seu nome? <strong>${nome.indexOf('e')}</strong><br>`
document.body.innerHTML += `Qual é o ultimo indice da letra a do seu  nome? <strong>${nome.lastIndexOf('a')}</strong><br>`
document.body.innerHTML += `As últimas 3 letras do seu nome são ?<strong> ${nome.slice(-3)}</strong><br>`
document.body.innerHTML += `as palavras do seu nome são? <strong>${nome.split(" ")}</strong><br>`
document.body.innerHTML += `seu nome com letras minusculas: <strong>${nome.toLowerCase()}</strong><br>`
document.body.innerHTML += `seu nome com letras maisculas :  <strong>${nome.toUpperCase()}</strong><br>`
/*window.document.body.innerHTML= ('ALGUMA FRASE<br>')   += concatena mais de um elemento
window.document.body.innerHTML+= ('ALGUMA FRASE<br>')
window.document.body.innerHTML+= ('ALGUMA FRASE<br>')*/
