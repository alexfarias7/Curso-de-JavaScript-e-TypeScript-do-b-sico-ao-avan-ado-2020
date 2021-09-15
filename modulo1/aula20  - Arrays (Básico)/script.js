let  numero = Number(prompt(' Digite um numero:'))

document.getElementById("numero-titulo").innerHTML=`${numero}<br>`

document.getElementById('texto').innerHTML =`<p>Raiz quadrada : ${Math.sqrt(numero)}</p>`
document.getElementById('texto').innerHTML +=`<p> ${numero} é inteiro? ${Number.isInteger(numero)}</p>`
document.getElementById('texto').innerHTML += `<p>É NaN ? ${Number.isNaN(numero)}</p>`
document.getElementById('texto').innerHTML += `<p> arredondado para baixo: ${Math.floor(numero)}`
document.getElementById('texto').innerHTML += `<p> arredondado para cima: ${Math.ceil(numero)}`
document.getElementById('texto').innerHTML += `<p> Com duas casas decimais : 852
${numero.toFixed(2)}`