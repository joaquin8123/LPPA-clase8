/* 
Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.
Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) guardando el resultado de la suma en una 3er variable (utilizar length). 
*/

console.log('--------------- EJERCICIO 1 VARIABLES ----------------')
let variableA = 'Hola'
let variableB = 'Mundo'
let result = `${variableA} ${variableB}`
let cantLetters = variableA.length + variableB.length 
console.log('Varibale A: ', variableA)
console.log('Varibale B: ', variableB)
console.log('1.1) La cadena formada es: ', result)
console.log('1.2) La cantidad de letras es:', cantLetters);

console.log('--------------- FIN 1 ----------------')
