class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false
    }

    ligar() {
        if (this.ligado) {
            console.log(`${this.nome} tá ligado`)
            return
        }
        this.ligado=true
    }
    desligar() {
        if (!this.ligado) {
            console.log(`${this.nome}  desligado`)
            return
        }
        this.ligado=false

    }
}

class Smartphone extends DispositivoEletronico{// vai herdar os metodos do dispoitivoe eletronico
constructor(nome, cor, modelo){
    super(nome); // vai chamar o construvtpt da classe pai
    this.cor = cor
    this.modelo = modelo
}
}
class Tablet extends DispositivoEletronico{
    constructor(nome, temWIFI){
        super(nome);
        this.wifi = temWIFI
    }
    ligar(){
        console.log('alteoru o metodo ligar')
    }
    falaoi(){
        console.log('oi')
    }
}
// a gherança de cima para baixo
// os pais não hedam nada , quem diria
// aS CLASSES IRMAS PODE TER PROPIEDADS ESESCIFICAS
const s1 = new Smartphone ('motog', 'azul', 's10')
s1.ligar()
s1.ligar()
console.log(s1)


const t1 = new Tablet('ipad', true)
t1.ligar();
t1.ligar();
t1.falaoi()


