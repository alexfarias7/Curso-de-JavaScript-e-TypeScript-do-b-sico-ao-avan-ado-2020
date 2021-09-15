class ValidaFormulario {
    constructor() {

        this.formulario = document.querySelector('.formulario')
        this.eventos();
    }
    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        });


    }
    handleSubmit(e) {
        e.preventDefault();
        const camposValidos = this.camposSaoValidos();
        const senhasValidas = this.senhasSaoValidas();

        if(camposValidos && senhasValidas) {
            alert('Formulário enviado.');
            this.formulario.submit();
          }
    }

    senhasSaoValidas(){
let valid = true;
//console.log(valid)
const senha = this.formulario.querySelector('.senha')
const repetirsenha = this.formulario.querySelector('.repetirsenha')

if (senha.value !== repetirsenha.value){
    valid=false;
    this.criaErro(senha, 'As senhas precisam ser iguais')
    this.criaErro(repetirsenha, 'As senhas precisam ser iguais')
}

if (senha.value.length<6||senha.value.length>12){
    valid = false;
    this.criaErro(senha, ' A senha tem que ter entre 6 e 12 caracteres')
    this.criaErro(repetirsenha, ' A senha tem que ter entre 6 e 12 caracteres')
}
    }
    camposSaoValidos() {
        let valid = true;
       // console.log(valid)
        for (let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove()
        }

        for (let campo of this.formulario.querySelectorAll('.validar')) {
            const label = campo.previousElementSibling.innerText;

            if (!campo.value) {
                this.criaErro(campo, `* O campo "${label}" não pode ficar em branco`)
                valid = false
            }
            if (campo.classList.contains('CPF')) {
                if (!this.validaCPF(campo)) valid = false;
            }
            if (campo.classList.contains('usuario')) {
                if (!this.validaUsuario(campo)) valid = false;
            }
        }
        return valid
    }
    validaUsuario(campo) {
        const usuario = campo.value
        let valid = true;
        if (usuario.length > 12 || usuario.length < 3) {
            this.criaErro(campo, 'O Usuário precisa ter entre 3 e 12  caracteres.');
            valid = false
        }
        if (!usuario.match(/^[a-zA-Z0-9]+$/g)) {
            this.criaErro(campo, 'Nome de usuario só pode conter letras ou numeros.');
            valid = false
        }
        return valid

    }

    validaCPF(campo) {
        const cpf = new ValidaCPF(campo.value);

        if (!cpf.valida()) {
            this.criaErro(campo, 'CPF inválido.');
            return false;
        }

        return true;
    }


    criaErro(campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement("afterend", div);
    }
}

const valida = new ValidaFormulario();