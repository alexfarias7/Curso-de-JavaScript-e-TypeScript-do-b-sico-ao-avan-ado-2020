let outraString = 'O rato roeu a ropa do rei de roma.'
console.log(outraString.replace(/r/, '%'))
console.log(outraString.replace(/r/g, '%'))

console.log(outraString.length)
console.log(outraString.slice(2,6))
console.log(outraString.slice(-5))
console.log(outraString.substring(outraString.length-5, outraString.length-1))

console.log(outraString.slice(-5,-1))

console.log(outraString.split([" "]));
console.log(outraString.split(" ", 3));
console.log(outraString.split('r'))

console.log(outraString.toUpperCase())
console.log(outraString.toLowerCase())





