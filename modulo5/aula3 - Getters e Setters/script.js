//  geters e setters
//getter => obtem o valor, pega e exibi o valor
//setter => configura ou setar o valor
function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado =  estoque;

    Object.defineProperty( this, 'estoque',{
        enumerable:true,
     //   value:estoque,
       // writable:true,
        configurable:true,

        get:function(){
            return estoquePrivado
        },
        set:function(valor){
            //console.log(valor)
            if (typeof valor !=='number'){
            throw new TypeError('erro')
            }
            estoquePrivado=valor
        }

         
    })
}


function criaProduto(nome){
    return{
        get nome(){
            return nome
        },
        set nome(valor){
            valor= valor.replace('coisa', ''),
            nome=valor
        }
    }
}
const p1 = new Produto('camisa', 20, 3)
//p1.estoque= 'o valor modificado'
//p1.estoque = 'hjgklç'
   // console.log(Object.keys(p1));

/*     for (let chave in p1){
        console.log(chave)
    } */
    console.log(p1)
    console.log(p1.estoque)


    
    const p2 =criaProduto('camisa');
    p2.nome= 'oura coisa'
    console.log(p2)
    console.log(p2.nome)