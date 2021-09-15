function Produto (nome, preco){
    this.nome = nome;
    this.preco = preco
}

// é melhor colocar os metodos fora da função construtora

Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco* (percentual/100));

};

Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco* (percentual/100));

};

const p1 = new Produto ('Camisa' , 25);

const p2 = {
    nome:'copo',
    preco:10
}

Object.setPrototypeOf(p2, Produto.prototype)

p1.desconto(50)
p1.aumento(50)

p2.aumento(47)

const p3 = Object.create(Produto.prototype, {
    nome:{
        writable:true,
        configurable:true,
        enumerable:true,
        value: 'caneca'
    },
    preco:{

        writable:true,
        configurable:true,
        enumerable:true,
        value: 20,
    },
});


//p3.preco = 120;
p3.aumento(20)
console.log(p1)
console.log(p2)
console.log(p3)
