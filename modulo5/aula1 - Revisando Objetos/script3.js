// factory function
//cria algo
/* function criaPessoa(nome,sobrenome){
    return{
        nome,
        sobrenome,
        get nomeCompleto() {// PROTEGE O OBJEYTO INTERNO
                            //´um metodo que finge ser pripriedade
            return` ${this.nome} ${this.sobrenome}`
        }
    };
}

const p1 = criaPessoa('PAULO' ,'PEREIRA')
console.log(p1.nomeCompleto)

 */
// constutor funvction
//utiliza a palçavra new
//COMEÇA SEMPRE COM LETRA MAISCULA

//construtor é a função que cria o onbjeto
function Pessoa(nome, sobrenome){
    this.nome=nome;
    this.sobrenome= sobrenome

   // Object.freeze(this)// trava o this e nenhum objeto na função pode ser alterada
    //return this=> vai esta implicitamante
    // tambem nãpo criar metodos  depoiis do freeze do objeto
}
//new => vai criar um objeto vazio {}
//<=vai usar a palavra this dentro do objeto, on this varia de acordo com quem chama
//=> retorna ao this


//p1 = (endereçodememoria)=>'valor'
//p1.endereçodememoria = {nome: 'outro valor'}// ou seja modifiquei o valor apontado do endereçodememoria
//p1 = ()
const p1 = new Pessoa('rafael', 'freitas')//é um objeto

p1.nome='outra valor'// aleterei o valor do valor
const p2 = new Pessoa ('maria', 'shirley')
p1.fala= function(){ console.log('oi');}
console.log(p1)
p1.fala()
console.log(p2)
Object.freeze(p2); //trava o obejto para não açterar nem os valores e as chaves
//p1='outra coia'//não pde fazer pois aletra a variaveç
//object,.freeze funcion atb com array