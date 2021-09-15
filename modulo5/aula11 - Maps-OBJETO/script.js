// MAP - OBJETO

const pessoas =[
    {id:3, nome:'pedro'},
    {id:2, nome:'helen'},
    {id:1, nome:'rafael'},
]

const novasPessoas = new Map();
for (const pessoa of pessoas){
    const {id}=pessoa;
    novasPessoas.set(id, {...pessoa});
}
console.log('-----------------------------------')
console.log(novasPessoas)
console.log('-----------------------------------')
console.log(novasPessoas.get(1))
console.log('-----------------------------------')

for(const pessoa of novasPessoas){
    console.log(pessoa)
}
console.log('-----------------------------------')
for(const [identifier, {id, nome}] of novasPessoas){
    console.log(identifier, id , nome)
}

console.log('-----------------------------------')
for(const pessoa of novasPessoas.keys()){
    console.log(pessoa)
}
console.log('-----------------------------------')
for(const pessoa of novasPessoas.values()){
    console.log(pessoa)
}
console.log('-----------------------------------')
novasPessoas.delete(2)
console.log(novasPessoas)