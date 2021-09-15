//705.484.450.-52

// 7x10 0x9 5x8 4x7 8x6 4x5 4x4 5x3 0x2
// 70    0   40  28  48  20  16  15  0 // soma todos os valres  = 237

// 11 -(237%11)= 5(primeiro digito)
// se o digito for maior que 9  vai igual a zero


//7x11 0x10  5x9 4x8  8x7 4x6 4x5 5x4 0x3  5x2 
// 77   0     45  32   56  24  20  20   0   10  = 284
// 11-(284%11) =2 (SEGUNDO DIGITO)
// se o digito for maior que 9  vai igual a zero


// 1° PASSO
// receber o cpf como string
 let cpf = '705.484.450.-52'
 let cpflimpo = cpf.replace(/\D+/g, '')// continua sendo uma string
 console.log(cpflimpo)


// 2°passo converter a string em array
let cpfarray = Array.from(cpflimpo)
console.log(cpfarray)

//3° passo
//transformar em numero e somar o total
let cpfTotal = cpfarray.reduce((ac, valor)=> ac + Number(valor), 0);
console.log(cpfTotal)