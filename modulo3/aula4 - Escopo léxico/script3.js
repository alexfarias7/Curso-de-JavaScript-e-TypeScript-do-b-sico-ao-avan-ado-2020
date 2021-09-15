const  nome ='rafael'
function falaNome(){
    console.log(nome)
}
falaNome()

//escopo lexico=> são funções aninhadas estão sujeitas a buscar variaveis em um escopo acima 

function usaFalaNome(){
    falaNome();
}
usafalanome();