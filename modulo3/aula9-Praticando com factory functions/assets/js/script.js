  
function criaCalculadora() {
    return {
      display: document.querySelector('.display'),
      btnClear: document.querySelector('btn-clear'),


      inicia() {
        this.cliqueBotoes();
        this.pressionaEnter();

      },
      pressionaEnter(){
            this.display.addEventListener('keyup', e=>{
                if(e.keyCode===13){
                    this.realizaConta()
                }
            })
      },

      clearDisplay(){
          this.display.value="";
      },

      apagarUM(){
            this.display.value=this.display.value.slice(0, -1);
      },

      realizaConta(){
        let conta = this.display.value;
        try{
            conta=eval(conta);
            if(!conta){
                alert('conta inválida');
                return
            }
            this.display.value=String(conta);
        }catch(e){
            alert('conta inválida');
            return
        }
      },





      cliqueBotoes() {
        //this-> calculadora
        document.addEventListener('click',  e => {// ao usar ao function o this vai ser travado em quem criou o ulemento
            const el = e.target;
            console.log(this)


            if (el.classList.contains('btn-num')) {
                this.btnParaDisplay(el.innerText);
              }
            
            if (el.classList.contains('btn-clear')){
                this.clearDisplay()
            }
            if(el.classList.contains('btn-del')){
                this.apagarUM();
            }
            if(el.classList.contains('btn-eq')){
                this.realizaConta();
            }
      
        }/* .bind(this) */);// usando this da caçlculadorta
        // sempre que quiser referenciar a chave de um objeto é necesari a palavra this
    },

    btnParaDisplay(valor) {
        this.display.value += valor;
      }
  


};
}
const calculadora = criaCalculadora();
calculadora.inicia();