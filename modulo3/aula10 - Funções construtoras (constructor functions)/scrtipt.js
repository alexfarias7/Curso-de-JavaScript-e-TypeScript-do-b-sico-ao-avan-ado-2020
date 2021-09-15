//Funções constutoras=> constroi um objetos
//conbstrutora-> precisa sempre iniciaR o nome com letras maiusculas =>Pessoa(new)
//são um molde para gerar novos objetos
//cria atributos privados

function Pessoa(nome, sobrenome){
    //privadas
    const ID = 123;

    const metodoInterno= function(){

    };
    
    //o coprpo dessa função já vai ser o objeto criado
    //atributos ou metodos publicos
    this.nome=nome;
    this.sobrenome=sobrenome;

    this.metodo = function(){
        console.log( `${this.nome} é um metodo`)
    }
}

const p1 = new Pessoa( 'maria', 'costa')// é necessário usar a palavra new
const p2= new Pessoa('pedro', 'costa')
//NEW=> CRIA um objeto vazio, faz o this aponta para o obejto utilizado e retorna o objeto utilizado
//com isso não precisa USAR RETURN

console.log(p1)
console.log(p2)
p1.metodo()