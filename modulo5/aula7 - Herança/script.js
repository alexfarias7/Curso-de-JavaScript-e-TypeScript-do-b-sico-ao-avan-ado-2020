//produto-> aumento, desconto

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function (quantia) {
    this.preco += quantia;
}
Produto.prototype.desconto = function (quantia) {
    this.preco -= quantia;
}

function Camisa(nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor
}

//camiseta.prototype.constructor =Produto
Camisa.prototype = Object.create(Produto.prototype)
Camisa.prototype.constructor = Camisa

Camisa.prototype.aumento = function (percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100))
}


function Caneca(nome, preco, material, estoque ) {
    Produto.call(this, nome, preco);
    this.material = material
    
    Object.defineProperty(this, 'estoque', {
        enumerable:true,
        configurable:false,
       get:function() {
           return estoque;
       },
       set: function(valor){
           if (typeof valor!=='number')return
           estoque=valor
       }
    })
};
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;


const camisa = new Camisa('regata', 50, 'vermelha')
const produto = new Produto('GENERICO ', 50);
const caneca = new Caneca ( 'CANECA', 20, 'VIDRO', 10);
camisa.aumento(100)
caneca.estoque='25'



console.log(camisa)
console.log(caneca)
console.log(caneca.estoque)
console.log(produto)