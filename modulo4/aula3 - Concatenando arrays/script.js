const num1 = [1, 2, 3, 4, 5]
const num2 = [6, 7, 8, 9, 10]
const somaNum = num1.concat(num2, [11, 12, 13], 'luiz')// concatena os arrays
console.log(somaNum)
const somaNum2 = [...num1, ...num2,...[11,12,13], 'pedro'] //com rest operator  ... => spread operator
console.log(somaNum2)
//o spread operator funciona tanto para array e para o obejto