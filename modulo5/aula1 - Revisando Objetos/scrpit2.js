const pessoa1 = new Object();
pessoa1.nome='luiz'
pessoa1.sobrenome= ' costa'
pessoa1.idade =40;
pessoa1.falaNome = function(){
   return (`${this.nome} esta falando`)
}
pessoa1.getDataNascimento= function (){// arrow functiuoons não sã adequadas para metodos
    const dataAtual= new Date;// construtor da data
   

    return dataAtual.getFullYear() - this.idade;
}
console.log(pessoa1.getDataNascimento())
console.log('---------------')
// para ver as chaves
 for (let chave in pessoa1){
     console.log(chave)
 }
 // para acessar os valores 
 console.log('---------------')
 for (let valor in pessoa1){
    console.log(pessoa1[valor])
}