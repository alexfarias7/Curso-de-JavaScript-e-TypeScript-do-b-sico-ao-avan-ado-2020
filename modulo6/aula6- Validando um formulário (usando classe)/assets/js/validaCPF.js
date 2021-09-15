//705.484.450-52
// 070.987.720-03
class ValidaCPF {
    constructor(cpfenviado) {
        Object.defineProperty(this, 'cpflimpo', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfenviado.replace(/\D+/g, '')
        });
    }
    eSequencia() {
        return this.cpflimpo.charAt(0).repeat(this.cpflimpo.length) === this.cpflimpo;
    }
    geraNovoCpf() {
        const cpfParcial = this.cpflimpo.slice(0, -2);
        const digitoum = ValidaCPF.geraDigito(cpfParcial);
        const  digitoDois = ValidaCPF.geraDigito(cpfParcial+digitoum)
        this.novoCPF = cpfParcial+digitoum+digitoDois
    }

    valida() {
        if (!this.cpflimpo) return false;
        if (typeof this.cpflimpo !== "string") return false;
        if (this.cpflimpo.length !== 11) return false;
        if (this.eSequencia()) return false;
        this.geraNovoCpf()
       // console.log(this.novoCPF)

        return this.novoCPF === this.cpflimpo;
    }
   static geraDigito(cpfParcial) {
        let total = 0
        let reverso = cpfParcial.length + 1

        for (let stringNumerica of cpfParcial) {
          //  console.log(stringNumerica, reverso)
            total += reverso * Number(stringNumerica)
            reverso--;
        }
        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0';

    }
}

/* let valCPF = new validaCPF('070.987.720-03')
if (valCPF.valida()){
    console.log('cpf valido')
}else{
    console.log('cpf invalido')
} */


//console.log(valCPF)
//console.log(valCPF.valida())