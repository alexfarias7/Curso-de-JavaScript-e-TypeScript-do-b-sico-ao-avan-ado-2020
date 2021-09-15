function getdiaSemanatexto(diasemana) {
    let diasemanatexto;
    switch (diasemana) {
        case 0:
            diasemanatexto = 'domingo'
            return diasemanatexto
          
        case 1:
            diasemanatexto = 'segunda'
            return diasemanatexto
        case 2:
            diasemanatexto = 'terça'
            return diasemanatexto
        case 3:
            diasemanatexto = 'quarta'
            return diasemanatexto
        case 4:
            diasemanatexto = 'quinta'
            return diasemanatexto
        case 5:
            diasemanatexto = 'sexta '
            return diasemanatexto
        case 6:
            diasemanatexto = 'sabado'
            return diasemanatexto
        default:
            diasemanatexto = "DIA INVALIDO"
            return diasemanatexto
    }

}

const data = new Date("1998-09-04")
const diasemana = data.getDay()

const diasemanatexto = getdiaSemanatexto(diasemana)

console.log(diasemanatexto)




/*if (diasemana === 0) {
    diasemanatexto = 'domingo'
} else if (diasemana === 1) {
    diasemanatexto = 'segunda'
} else if (diasemana === 2) {
    diasemanatexto = 'terça'
} else if (diasemana === 3) {
    diasemanatexto = 'quarta'
} else if (diasemana === 4) {
    diasemanatexto = 'quinta'
} else if (diasemana === 5) {
    diasemanatexto = 'sexta'
} else if (diasemana === 6) {
    diasemanatexto = 'sabado'
} else{
    diasemanatexto=''
}
console.log(diasemanatexto)*/


