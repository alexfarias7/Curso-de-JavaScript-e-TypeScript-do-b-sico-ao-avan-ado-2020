// RETORNE A PESSOA MAIS VELHA

const pessoas = [
    {nome: 'ANA', idade: 65},
    {nome: 'Rafael', idade: 23},
    {nome: 'Maria', idade: 55},
    {nome: 'Paulo', idade: 18},
    {nome: 'Arthur', idade: 31},
    {nome: 'Pedro', idade: 40},
    {nome: 'Bruno', idade: 37},
    {nome: 'Zeca', idade: 85},
    ];

const pessoaMaisVELHA = pessoas.reduce(function(acumulador, valor){
    if (acumulador.idade> valor.idade) return acumulador;
    return valor
})
console.log(pessoaMaisVELHA)