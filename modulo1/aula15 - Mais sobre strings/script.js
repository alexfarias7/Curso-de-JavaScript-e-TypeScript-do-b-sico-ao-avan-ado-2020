let umaString ='um \"texto\"'//  \ serve para escapar(omitir)um caracatere 
                             //strings são indexadas - cada caractere tem um indíce
                             // 0,1,2,3...


console.log(umaString)
console.log(umaString[1])
console.log(umaString[20])
console.log(umaString[-1])

console.log(umaString.charAt(0))
console.log(umaString.charAt(20))

console.log(umaString.charCodeAt(6))

console.log(umaString.concat(' um lindo dia'))// concatena valores
console.log(`${umaString} em um lindo dia`)
console.log(umaString.indexOf('texto'))
console.log(umaString.indexOf('Texto'))
console.log(umaString.indexOf('o',3))
console.log(umaString.lastIndexOf('o',3))
console.log(umaString.lastIndexOf('o'))
console.log(umaString.lastIndexOf('x', 7))

console.log(umaString.match(/[a-z]/))
console.log(umaString.match(/[a-z]/g))

console.log(umaString.search(/x/))

console.log(umaString.replace('um', 'outro'))
console.log(umaString.replace(/um/, 'outro'))

