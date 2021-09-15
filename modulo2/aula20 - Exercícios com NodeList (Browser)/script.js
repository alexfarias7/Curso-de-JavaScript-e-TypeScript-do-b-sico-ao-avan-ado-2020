const nome = 'Rafael'
const varioNomes = ['Luiz', 'Rafael', 'Pedro'];

// FOR CLASSICO
for (let i =0; i<varioNomes.length; i++){
    console.log(varioNomes[i])
}

console.log("--------")
// FOR IN
for (let i in varioNomes){// retorna ao indice
    console.log(varioNomes[i])
}
/* 
for (let valor of nome){
    console.log(valor)
} */
console.log("--------")

//FOR OF
for(let valor of varioNomes){//retorna ao valor
    console.log(valor);//
    //for of o objeto não é interavel
}

console.log("--------")

varioNomes.forEach(function(valor, indice, array){
    console.log(valor, indice, array)
})

// arrays pode ser usado quualquer FOR
//For clássicos -geralmente com iteraveis (arrays ou strings)
// for in - retorna o indice ou chaves (string , array ou objetos)
//for of - retorna o valor em si (iteraveis, arrays ou strings)

const frutas ={
    maca:'vermelha',
    uva:'roxa'
}

for(let i in frutas){
    console.log(i , frutas[i])
}

/* for(let i of frutas){// não iteravel


} */