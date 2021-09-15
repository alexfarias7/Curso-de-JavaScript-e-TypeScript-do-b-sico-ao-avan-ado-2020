function ValidaCPF(cpfenviado) {
  Object.defineProperty(this, 'cpfLimpo', {
    get: function () {
      return cpfenviado.replace(/\D+/g, '');
    }
  })


}

ValidaCPF.prototype.valida = function () {
  if (typeof this.cpfLimpo === 'undefined') return false;
  if (this.cpfLimpo.length !== 11) return false;
  if (this.isSequencia())  return false;

  const cpfParcial = this.cpfLimpo.slice(0, -2)
  const digitoUm = this.crianumero(cpfParcial)
  const digitoDois = this.crianumero(cpfParcial + digitoUm)

  const novoCPF = cpfParcial + digitoUm + digitoDois
  console.log(novoCPF)

  return  novoCPF === this.cpfLimpo
}

ValidaCPF.prototype.crianumero = function (cpfParcial) {
  const cpfArray = Array.from(cpfParcial)// transformou meus digitos em array
  let regressivo = cpfArray.length + 1
  const total = cpfArray.reduce((ac, val)=>{
    ac+= (regressivo * Number(val))
    regressivo--
    return ac
  },0)
  
  const digito = 11 - (total%11)
  return digito >9?"0" : String(digito)
  
}

ValidaCPF.prototype.isSequencia = function (){
  const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length)
  return sequencia === this.cpfLimpo;
}

const cpf = new ValidaCPF('111.111.111-11')
console.log(cpf.cpfLimpo)
//cpf.valida();
console.log(cpf.valida())

