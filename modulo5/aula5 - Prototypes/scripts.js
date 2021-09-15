//construtora=> molde (classe)

// O JavaScript é baseado em prototipos para passar propriredades e metodos de um objeto para outro.

// Definição de protótipo=> Protótipo é o termo usado para se referir ao que foi criado pela primeira vez , servindo de modelo ou molde para futuras produções.

// Todos os objetos tem uma referencia interna para um prototipo(_proto_) que vem de propriedades prototype da função que foi usada para cria-lo. quando temtamos acessar um membro de um objeto ,  primeiro o motor do JS vai tentar encontar este membro no proprio objeto e depois a cadeia de prototipos é usada até o topo (null) até encontrar (ou não) tal membro.



function Pessoa (nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    //this.nomeCompleto =()=>'teste:' + this.nome + '  '+ this.sobrenome
}

// instancia =>ação que cria objetos

Pessoa.prototype.falaOi = 'fala oi'

Pessoa.prototype.nomeCompleto = function(){
    return this.nome + '  '+ this.sobrenome
}

//Pessoa.prototype === pessoa1._proto_

const pessoa1 = new Pessoa('Otavio' , 'O');//<= Pessoa = Função construtota
const pessoa2 = new Pessoa('Maria' , 'A');//<= Pessoa = Função construtota
const data = new Date();



console.dir(pessoa1)
console.dir(pessoa2)
console.dir(data)