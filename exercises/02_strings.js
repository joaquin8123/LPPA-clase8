/* 
1- Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).
2- Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
3- Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
*/
 
let text = 'esto es una Variable String en Javascript'

console.log('--------------- EJERCICIO 2 STRINGS ----------------')
console.log('Texto: ',text)
let result1 = text.substring(0,5)
console.log('2.1) Primeros 5 caracteres: ', result1);

let result2 = `${text.substring(0,1).toLocaleUpperCase()}${text.substring(1,text.length).toLocaleLowerCase()}` 
console.log('2.2) Primer letra mayuscula y el resto en minisuculas:  ', result2);

let result3 = text.indexOf(' ')
console.log('2.3) El primer espacio en blaco esta en la posicion: ', result3);
console.log('--------------- FIN 2 ----------------')

