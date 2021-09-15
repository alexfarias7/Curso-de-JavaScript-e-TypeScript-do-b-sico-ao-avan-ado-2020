//funções geradoras
//tem um recurso de pausar o codigo em determinado local

function* geradora1() {//sempre usar um asterisco em função geradora

    //codigo qualquer
    yield 'Valor 1'// utilizar yeld em vez de return
    //codigo qualquer
    yield 'Valor 2'// utilizar yeld em vez de return
    //codigo qualquer
    yield 'Valor 3'// utilizar yeld em vez de return
    // sempre que chamar o next do objeto solicitado ele vai retyornar um dos valores
}

const g1 = geradora1();
/* console.log(g1.next().value);//ára ver op valor da função geradora colcar .next
//done=> para ver o resultado do s valoalors
console.log(g1.next().value);
console.log(g1.next());
console.log(g1.next()) */

console.log('---------------')
// iterar o valor
/* for( let valor of g1 ) console.log(valor) */
/* function* geradora2 (){// gerador infinito
    let i=0;
    while (true){
        yield i;
        i++
    }
}
  const g2= geradora2()
  console.log(g2.next().value)
  console.log(g2.next().value)
  console.log(g2.next().value)
  console.log(g2.next().value)
  console.log(g2.next().value)
  console.log(g2.next().value)
  console.log(g2.next().value)
  console.log(g2.next().value)
  console.log(g2.next().value)
  console.log(g2.next().value)
  console.log(g2.next().value) */

function* geradora3() {//geradorra dque delga tarefa
    yield 0;
    yield 1;
    yield 2;
    yield 3;
}

function* geradora4() {
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;

}
const g4 = geradora4()
for (let valor of g4) {
    console.log(valor)
}

function* geradora5() {
    yield function () {
        console.log('vim do y1')
    };

/*     return function(){ // CUIADO!SE USAR A O RETURN TERMINA A FUNÇÃO
        console.log('VIM DO RETURN')
    }
 */
    yield function () {
        console.log('vim do y2')
    }
}
const g5 = geradora5()

const func1 = g5.next().value;
const func2 = g5.next().value
func1()
func2()
