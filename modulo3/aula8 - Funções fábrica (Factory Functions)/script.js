// funções fabricas=> são as funções que retornam a um obheto
//factory function
// é uma função normaçl que retorna a u8um objeto

function criaPessoa(nome, sobrenome, alturap, pesop) {
    return {
        nome,
        sobrenome,
        //getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`

        },

        //setter
        set nomeCompleto(valor) {
            valor = valor.split (" ");
            this.nome = valor.shift()
            this.sobrenome = valor.join(" ");

         console.log(valor)        },

        fala(assunto) {
            return `${this.nome}   está ${assunto}`;// this acessa os objetos da função
            //this sempre vai ser a função que chamou
        },
        peso: alturap,
        altura: pesop,
        //getter=> quando se que só obter o valor
        get imc() {// o imc passa a fingir ser um atributo
            //conseguisse o valor do imc fingindo serr atributo
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }

    };
}
//console.log(criaPessoa('pedro' , 'freitas'))
const p1 = criaPessoa('pedro', 'freitas', 80, 1.80);

console.log(p1.fala('conversando'))
console.log(p1.nome)
console.log(p1.sobrenome)
//console.log(p1.nomeCompleto)
p1.nomeCompleto = 'raimundo silva costa';
console.log(p1.nome)
console.log(p1.sobrenome)
console.log(p1.imc)
console.log("------------")
const p2 = criaPessoa('Maria', 'Eduarda', 65, 1.71)
//console.log(p1.nome)
console.log(p2.imc)
console.log(p2.peso)

console.log(p2.fala('falando sobre programação'))
//quando uma função esta dentro de um objeto é cha\mada de metodo