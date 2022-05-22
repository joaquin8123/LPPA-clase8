/* 
1) Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5”. [utilizar alert() ]
2) Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
“Menor” si la edad es menor a 18
“Mayor” si la edad es mayor o igual a 18 Y menor que 65
“Jubilado” si la edad es mayor o igual que 65.
*/

console.log('--------------- EJERCICIO 4 IF ELSE----------------')

//1
let num1 = Math.random(0,1)
console.log('Numero: ', num1)
if(num1 >= 0.5 ){
    console.log("Greater than 0,5");
    alert("Greater than 0,5")
}else{
    console.log("Lower than 0,5");
    alert("Lower than 0,5")
}

//2)
let age = Math.floor(Math.random()*101)
console.log('Age: ',age)
if(age < 18 ){
    console.log('Menor');
    alert("Menor")
}
if(age >= 18 && age < 65){
    console.log('Mayor');
    alert("Mayor")
}
if(age >= 65){
    console.log('Jubilado')
    alert("Jubilado")
}


console.log('--------------- FIN 4 ----------------')