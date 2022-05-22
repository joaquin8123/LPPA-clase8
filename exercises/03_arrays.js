/* 
1) Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11.
2) Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
3) Agregar un elemento al principio y al final del array (utilizar unshift y push).
4) Quitar un elemento del principio y del final del array (utilizar shift y pop).
5) Invertir el orden del array (utilizar reverse).
6) Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
7) Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
*/

let monthsList = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

console.log('--------------- EJERCICIO 3 ARRAYS ----------------')
console.log('Meses: ', monthsList)
//1
console.log('3.1) El mes 5 es: ', monthsList[4] + ' y el mes 11 es:', monthsList[10]);

//2
let res2 = monthsList.sort()
console.log('3.2) Array ordenado alfabeticamente: ', res2);

//3
monthsList.unshift('Inicio')
monthsList.push('Final')
console.log('3.3) Agregar primer y ultimo elemento: ', monthsList);

//4
monthsList.shift(0)
monthsList.pop()
console.log('3.4) Eliminar primer y ultimo elemento: ', monthsList);

//5)
monthsList.reverse()
console.log('3.5) Reverse orden: ', monthsList);

//6)
result6 = monthsList.join('-')
console.log('3.6) Unir los meses con un "-": ', result6);

//7)
let monthsList2 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
let result7 = monthsList2.slice(4,9)
console.log('3.7) Los meses entre mayo y septiembre: ', result7);
console.log('--------------- FIN 3 ----------------')