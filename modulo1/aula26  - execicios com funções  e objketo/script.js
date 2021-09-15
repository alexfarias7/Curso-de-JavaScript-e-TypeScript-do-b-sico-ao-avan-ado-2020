function meuEscopo() {

    const form = document.querySelector('.formulario')
    const resultado =document.querySelector('.resultado')
    const pessoas=[];

    /*form.onsubmit= function(evento) {//desta forma todos os ventos vão ter on
        evento.preventDefault()
     alert('OLÁ');
     console.log('foi enviado');
    };
    }*/
    //let contaodor = 1

 
    function recebeEventoForm(evento) {
       evento.preventDefault();
       const nome = form.querySelector('.nome');
       const sobrenome = form.querySelector('.sobrenome');
       const peso = form.querySelector('.peso')
       const altura = form. querySelector('.altura')

       pessoas.push(
           nome.value,
           sobrenome.value,
           peso.value,
           altura.value,
       )
       console.log(pessoas)
       
       console.log(nome.value,sobrenome.value, peso.value, altura.value)//sempre que precisar oo valor do input cocolocar o value
       
       resultado.innerHTML+=`
       <p>${nome.value}<p/>
       <p>${sobrenome.value}<p/>
       <p>${peso.value}<p/>
       <p>${altura.value}<p/>
       `

        //console.log(`form não foi enviado ${contaodor}`)
        //contaodor++
    }


    form.addEventListener('submit', recebeEventoForm);//desta forma não precisa-se do on

}

meuEscopo();