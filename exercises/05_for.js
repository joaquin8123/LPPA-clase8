/* 
1) Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar una alerta utilizando cada una de las palabras.
2) Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra modificada.
3) Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la repetición, es decir que al final de la ejecución del bucle for debería haber 10 elementos dentro del array, desde el número 0 hasta al número 9. Mostrar por la consola del navegador el array final (utilizar console.log).
*/
console.log('--------------- EJERCICIO 5 FOR ----------------')
//1)
let list = ['Lenguajes', 'de', 'programacion', 'para', 'la', 'administracion']
console.log("5.1)");
for (let i = 0; i < list.length; i++) {
    console.log(list[i]);
    //alert(list[i])
}

//2)
console.log('5.2)')
for(let i=0; i<list.length; i++){
    list[i] = `${list[i][0].toLocaleUpperCase()}${list[i].substring(1,list[i].length)}`
    console.log('Palabra Modificada: ',list[i])
}

//3)
let array3 = []
for (let i = 0; i < 10; i++) {
    array3.push(i)
}
console.log('5.3) Array de 9 posiciones:', array3)
console.log('--------------- FIN 5 ----------------')