//eventos são ações dento no navegador



function meuEscopo() {
  const form = document.querySelector('.formulario');
  const resultado = document.querySelector('.resultado')
  const pessoas = []

  /*  form.onsubmit = function(evento){
      evento.preventDefault();
          alert(1)
          console.log('foi enviado')
    };*/


 // let contador = 1


  function recebeEventoForm(evento) {
    evento.preventDefault();

    //console.log(`Form não foi enviado ${contador}`)
   // contador++

   const nome= form.querySelector('.nome')
   const sobrenome = form.querySelector('.sobrenome')
   const peso = form.querySelector('.peso')
   const altura = form.querySelector('.altura')

   pessoas.push({
     nome:nome.value,//chave:valor
     sobrenome: sobrenome.value,
     peso: peso.value,
     altura:altura.value,
   });

   //console.log(nome.value, sobrenome.value, peso.value, altura.value)//sempre que precisar do valor do input utilisar o value
    console.log(pessoas)

    resultado.innerHTML += `
    <p>${nome.value}</p>
    <p>${sobrenome.value}</p>
    <p>${peso.value}</p>
    <p>${altura.value}
    `
  }

  form.addEventListener('submit', recebeEventoForm)

}
meuEscopo();

//IIFE = FUNÇÃO CRIADA E AUTOINVOCADA