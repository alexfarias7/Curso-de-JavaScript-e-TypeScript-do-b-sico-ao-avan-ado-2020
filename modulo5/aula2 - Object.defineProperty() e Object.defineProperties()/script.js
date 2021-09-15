//definePropety ->defini umas propriedade
//definePropeties => define varias propriedades

function Produto(nome, preco, estoque) {
    this.nome1 = nome,
        this.preco = preco,
        //this.estoque1 = estoque


        Object.defineProperty(this, 'estoque1', {
            enumerable: true,//moostra a chave
            value: estoque,//valor
            writable: false,//para não aLTERAR O VALEOR DO BJETO
            configurable: false,//configuravel
        })
    /*    Object.defineProperty(this, 'estoque1', {
        enumerable: true,//moostra a chave
        value:estoque,//valor
        writable:true,//para não aLTERAR O VALEOR DO BJETO
        configurable:false//configuravel
     })
     */

    Object.defineProperties(this, {
        nome: {
            enumerable: true,//moostra a chave
            value: nome,//valor
            writable: true,//para não aLTERAR O VALEOR DO BJETO
            configurable: true,//configuravel
        },
        preco: {
            enumerable: true,//moostra a chave
            value: preco,//valor
            writable: true,//para não aLTERAR O VALEOR DO BJETO
            configurable: true,//configuravel
        }

    })

}
const p1 = new Produto('camisa', 20, 3)
p1.estoque1 = 520
delete p1.estoque1
console.log(p1)
console.log(Object.keys(p1))// mostra as achaves
console.log(p1.nome1, p1.preco)

for (let chave in p1) {
    console.log(chave)
}