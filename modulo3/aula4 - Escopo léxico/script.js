//escopo lexico

const  nome = 'joão'

function falaNome(){
  //const nome ='pedro'
    console.log(nome)
}

// escopo lexico=>quando a função conhece o local onde ela foi declarada,tudo que estiver declarado dentro dela e o que ta nos vizinhos

function usafalanome(){ 
     const nome = 'otávio'
    falaNome()
}
usafalanome()