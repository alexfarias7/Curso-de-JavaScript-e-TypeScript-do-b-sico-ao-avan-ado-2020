//mixin


const falar ={
       falar() {
        console.log(`${this.nome} esta falando`)
    }, 
}

const comer = {
    comer() {
        console.log(`${this.nome} esta comendo`)
    },
}

const beber ={
    beber() {
        console.log(`${this.nome} esta bebendo`)
    },
}

const pessoaPrototype = {...falar, ...comer, ...beber}
//Object.assign({}, falar, comer, beber)
function criaPessoa(nome, sobrenome) {

    return Object.create(pessoaPrototype, {
        nome: { value: nome },
        sobrenome: { value: sobrenome }
    })
}

const p1 = criaPessoa('JOÃO', 'FREITAS')
const p2 = criaPessoa('maria', 'costa')
console.log(p1)
p1.beber()
console.log(p2)
p2.falar()