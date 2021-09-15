const _velocidade = Symbol('velocidade');
// SYMBOL SEMPRE VAI SER DIFERENTE DO OUTRO

class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0;
    }
    set velocidade(valor) {
        console.log('setter')
        if (typeof valor !== 'number') return
        if (valor > 100 || valor <= 0) return
            this[_velocidade]=valor
    }
    get velocidade() {
        console.log('getter')
        return this[_velocidade]
    }

    acerelar() {
        if (this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }

    freiar() {
        if (this[_velocidade] <= 0) return;
        this[_velocidade]--
    }
}

const c1 = new Carro('fusca')

/* for (let i = 0; i = 3; i++) {
   // c1.acerelar()
}; */
/* c1.velocidade = 2000 */
//console.log(c1.velocidade)
//console.log(c1.velocidade)
c1.velocidade =99