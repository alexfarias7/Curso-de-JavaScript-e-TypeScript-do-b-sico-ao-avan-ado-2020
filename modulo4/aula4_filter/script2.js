// 1° filtro: Retornar as pessoas que pousuem 5 ou mais letras do nome
// 2° filtro: Retormar as pessoas com mais de 50 anos
// 3° filtro : Retornar  as pessoar cujo o nome termine com a letra A

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

const nomeCincoLetrasLonga = pessoas.filter( function(obj){
    return obj.nome.length>=5

})

const nomeCincoLetrasCurta = pessoas.filter(tamanho=>tamanho.nome.length>=5)
const pessoasCiquentaAnos= pessoas.filter(anos=>anos.idade>50)
const nomeTerminaA = pessoas.filter(obj=>{
    return obj.nome.toLowerCase().endsWith('a');
})
console.log(nomeCincoLetrasLonga)
console.log('-------------------')
console.log(nomeCincoLetrasCurta)
console.log('-------------------')
console.log(pessoasCiquentaAnos)
console.log('-------------------')
// a FUNÇÃO FILTER NÃO AÇTERA O ELEMENTO