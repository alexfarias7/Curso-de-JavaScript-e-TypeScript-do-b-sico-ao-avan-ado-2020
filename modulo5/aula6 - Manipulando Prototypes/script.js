
// new Object => Object.prototype
const objA = {
    chaveA:'A'
    //_proto_: Object.prototypr
}

const objB ={
  chaveB: 'B'  
  // __proto__ : objA
}
const objC = new Object();
objC.chaveC ='C'

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB)
console.log(objB.chaveA)
console.log(objC.chaveA)

// NÃO É RECOMENDAVEL USAR A PROPRIEDADE _proto_


