const novaTarefa = document.querySelector('.nova-tarefa');

const addTarefa = document.querySelector('.add-tarefa');

const Tarefas = document.querySelector('.tarefas');

function criaLi(){
    const li =document.createElement('li');
    return li
}
novaTarefa.addEventListener('keypress', function(event){
    if(event.keyCode === 13){
    
      if(!novaTarefa.value)return;
      criaTarefa(novaTarefa.value) 

    }

})

function limpaInput(){
    novaTarefa.value='';
    novaTarefa.focus();

}

function criaBotaoApagar(li){
    li.innerText += '  ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'APAGAR'
    li.appendChild(botaoApagar)
    botaoApagar.setAttribute('class', 'apagar')
}

function salvaTarefas(){
    const liTarefas = Tarefas.querySelectorAll('li');
    const listasdeTarefas =[];
    for(let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('APAGAR', '').trim();
        listasdeTarefas.push(tarefaTexto);       
    }
        const tarefasJSON = JSON.stringify(listasdeTarefas);
        localStorage.setItem('tarefas', tarefasJSON)

    
}

function adicionaTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas')
    const listasdeTarefas = JSON.parse(tarefas)

    for (let tarefa of listasdeTarefas){
      criaTarefa(tarefa)  
    }

    console.log(listasdeTarefas)
}

function criaTarefa(textoInput){
    const li = criaLi();
    li.innerText= textoInput;
    Tarefas.appendChild(li)
    limpaInput()
    criaBotaoApagar(li)
    salvaTarefas()
}
adicionaTarefasSalvas()


addTarefa.addEventListener('click', function(){
    if(!novaTarefa.value)return;
    criaTarefa(novaTarefa.value)
})

document.addEventListener('click', function(event){
const el = event.target
if(el.classList.contains('apagar')){
    el.parentElement.remove();
    salvaTarefas()
}

})