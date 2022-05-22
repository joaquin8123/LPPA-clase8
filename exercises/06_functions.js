/*
1) Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.
2) A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.
3) A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).
*/

//1)
console.log('--------------- EJERCICIO 6 FUNCIONES ----------------')
function validInt(num1,num2){
    if(!Number.isInteger(num1)){
       console.log(`Contiene numeros decimales`)
       return parseInt(num1)
    }else if(!Number.isInteger(num2)){
        console.log(`Contiene numeros decimales`)
        return parseInt(num2)
    }
}

function sum(number1, number2){
    validInt(number1,number2)
    if(typeof(number1) !== 'number' || typeof(number2) !== 'number'){
        console.log('Uno de los numeros ingresados no es tipo number')
        return NaN
    }
    
    return number1 + number2
}
let res = sum(2,7)
let resNaN = sum('S',2)
let resComa = sum(2.2,5)
console.log('Sum 2 + 7: ',res)
console.log('Parametro string, return NaN: ', resNaN)
console.log('Contiene decimales: ',resComa)


console.log('--------------- FIN 6 ----------------')