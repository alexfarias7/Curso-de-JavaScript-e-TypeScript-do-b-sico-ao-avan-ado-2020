const nome = 'Luiz Otávio'
const sobrenome = 'Miranda'
const idade = 25
const peso =80
const altura = 1.75

let imc = (peso)/(altura*altura)
let anoNascimento=2021-idade

//template string
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento},pesa ${peso} Kg, tem ${idade} anos , tem ${altura} m e seu Imc é de ${imc.toFixed(2)}`)
