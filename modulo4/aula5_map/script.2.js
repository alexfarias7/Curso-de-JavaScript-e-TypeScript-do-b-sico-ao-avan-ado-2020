// para cada elemento :
// retorne apenas uma string com o nome da pssea;
// remova apnas a chave 'nome' do objeto
// adicione uma chav id do obje to

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

    const stringPessoa = pessoas.map(string=>string.nome)
    const idadePessoa = pessoas.map(obj=>({ idade:obj.idade}))
/*     const idPessoa=  pessoas.map((obj, indice)=>{//ALTERA O OBJETO ORIGINAL
        obj.chaveID = (indice+1)*1000;
        return obj
    }) */

    const idPessoa = pessoas.map((obj, indice)=>{
        const newObJ = {...obj};
        newObJ.ChaveId = (indice+1)*1000
        return newObJ
    })
    console.log(stringPessoa)
    console.log('---------------')
    console.log(idadePessoa)
    console.log('---------------')
    //console.log(idPessoa)
    console.log(idPessoa)
    //altera os valores e do tamanhao do awway original