//Bienvenida a Javascript básico, para comentar una linea de código puedes usar las dos barras // y para comentar un bloque de varias líneas puedes usar barra y asterisco para abrir /*  asterisco y barra para cerrar */

//En el archivo index.html que tienes abierto en el navegador (preferiblemente chrome o firefox) vamos a trabajar con la consola, abre tu inspector y en la pestaña de consola, mira si puedes ver el mensaje escrito abajo.

console.log('Hola soy tu consola y juntas vamos a aprender Javascript')

//Si has encontrado el mensaje puedes continuar con los ejercicios

//Ejercicio 1: Imprime en la consola 'Bienvenida al bootcamp de FemCoders de Factoría F5' y mira en tu navegador si sale el resultado.

//Escribe tu código aquí

console.log('Bienvenida al bootcamp de FemCoders de Factoría F5')

//VARIABLES Y TIPOS DE DATOS
//Ejercicio 2: Crea una variable por cada tipo de dato: string, number, boolean, null, undefined, object, array e imprímelos en la consola.

//Escribe tu código aquí

//String
let title = 'Master';
console.log(title);
title = 'Doctor';
console.log(title);

//Number
const x = 10;
const y = 5;
console.log(x + y);

//Boolean - true with conditional
let light = true;
if (light === true) {
    console.log("I have an idea!");
};

//Boolean - false with conditional
let haveDinner = false;
if (haveDinner === false) {
    console.log("I'm hungry!");
}
else {
    console.log("I'm full!");
};

//Null
let circle = null;
console.log(circle);

//Undefined
let square = undefined;
console.log(square);

console.log(square==circle);
console.log(square===circle);

//Objecto
const person = {
    firstName:'Priscila',
    lastName:'Oliveira',
    age:'36'
};
console.log(person);

//Array
const colors = ['blue', 'green', 'red', 'yellow']
console.log(colors);


//Ejercicio 3: Crea una constante llamada postres con un tipo de dato array que contiene los siguientes elementos: helado, tarta, pastel e imprímelo en la consola. 

//Escribe tu código aquí

const postres = ['helado', 'tarta', 'pastel'];
console.log(postres);


//Ejercicio 4: Crea una constante con un tipo de dato objeto llamado coder que contengan dos propiedades, nombre y edad e imprímelo en la consola.

//Escribe tu código aquí

const coder = {
    name: 'Vera',
    age: '20',
};
console.log(coder);


//Ejercicio 5: Busca como imprimir en consola el tipo de dato de cada variable que hemos creado en el ejercicio 2.

//Escribe tu código aquí

console.log (typeof title);
console.log (typeof 'Master');
console.log (typeof x);
console.log (typeof light);
console.log (typeof haveDinner);
console.log (typeof circle);
console.log (typeof square);
console.log (typeof person);
console.log (typeof colors);
console.log (typeof Postres);


//OPERADORES ARITMÉTICOS
//Ejercicio 6: Crea una varible que sume 2 números e imprime el resultado en consola.

//Escribe tu código aquí

// function sum(number1, number2) { /// ESTUDIOS ///
//     return number1 + number2;
// }
// sum (1, 2);
// console.log(sum(1, 2));

var2 = 1 + 2;
console.log(var2);

//Ejercicio 7: Crea una variable que reste 2 números e imprime el resultado en consola.

//Escribe tu código aquí

// function rest(number3, number4) {  /// ESTUDIOS ///
//     return number3 - number4;
// };
// console.log(rest(7, 2));

var3 = 7 - 2;
console.log(var3);


//Ejercicio 8: Crea una varible que multiplique 2 números e imprime el resultado en consola.

//Escribe tu código aquí

// function multiply(number5, number6) { /// ESTUDIOS ///
//     return number5 * number6;
// };
// console.log(multiply(4, 6));

var4 = 4 * 6;
console.log(var4);

//Ejercicio 9: Crea una varible que divida 2 números e imprime el resultado en consola.

//Escribe tu código aquí

// function divide(number7, number8) { /// ESTUDIOS ///
//     return number7 / number8;
// };
// console.log(divide(40, 5));

var5 = 40 / 5;
console.log(var5);


//OPERADORES DE COMPARACIÓN
// Ejercicio 10: Crea dos variables, la primera con un valor numérico de 1 y la segunda con un valor numérico de 2, compara ambas variables dentro de otra variable e imprime en la consola para ver el resultado.

//Escribe tu código aquí

// let t = 1;  /// ESTUDIOS ///
// let u = 2;
// function isEqual(t, u) {
//     return t === u;
// };
// console.log(isEqual(t, u));

var6 = 1;
var7 = 2;
let var8 = var6 == var7;
console.log(var8);


// Ejercicio 11: Crea otra variable que compare las dos primeras variables creadas en el ejercicio anterior, para que el resultado impreso en la consola sea true.

//Escribe tu código aquí

// function isLesser(t, u) {  /// ESTUDIOS ///
//     return t < u;
// };
// console.log(isLesser(t, u));

let var9 = var6 < var7;
console.log(var9);

//Ejercicio 12: completa el ejercicio

//let comparision = Realiza la operación de comparación que consideres para que el resultado en consola sea true
//console.log(comparision);

// let num1 = 15;                     /// ESTUDIOS ///
// let num2 = 20;
// function comparison (num1, num2){
//     return num1 < num2;
// }
// console.log(comparison(15, 20));

let num1 = 15;
let num2 = 20;
console.log(num1<num2);

//Ejercicio 13: completa el ejercicio 
//let result = //Realiza la operación de comparación que consideres entre las dos variables dadas, para que el resultado en 
//consola sea false sin usar el comparador de desigualdad
//console.log(resultx)


// let num3 = 1;                            ///// ESTUDIOS ///////
// let num3AsString = '1';
// function resultx (num3, num3AsString) {
//     return num3 === num3AsString;
// }
// console.log(resultx(num3, num3AsString));

let num5 = 3;
let num6 = '3';
console.log(num5 === num6);


//Ejercicio 14: completa el ejercicio

//let result2 = //Realiza la operación de comparación que consideres con las dos variables del ejercicio anterior para 
//que el resultado en consola sea true.
//console.log(result5)


// function result5 (num3, num3AsString) {
//     return num3 == num3AsString;
// }
// console.log(result5(num3, num3AsString));

console.log(num5 == num6);


//OPERADORES DE CADENAS
//Ejercicio 15: Crea una variable con tu nombre y otra variable con tu apellido y crea otra nueva variable con tu nombre completo 
//concatenando las dos variables anteriores e imprime en consola. Debe haber un espacio entre tu nombre y apellido.

//Escribe tu código aquí

let firstName = 'Priscila';
let lastName = ' Oliveira';
let fullname = firstName.concat(lastName);
console.log(fullname);

//OPERADORES DE LÓGICA
//Ejercicio 16: Descomenta todo el bloque desde la variable 'a' hasta el 'console.log(res6)' y completa el ejercicio. 
//(Saldrá un error y no podrás visualizar el resultado hasta que termines este ejercicio)
//Eliminar el espacio '__' y coloca el comparador lógico que consideres para que el resultado sea true

let a = 6;
let b = 3;

let res = a < 10 && b > 1;
console.log(res);

let res2 = a < 10 && b < 1;
console.log(res2);

let res3 = a == 5 && b == 5;
console.log(res3);

let res4 = a == 6 || b == 0;
console.log(res4);

let res5 = a == 0 || b == 3;
console.log(res5);

let res6 = a == 6 && b == 3;
console.log(res6);


//OPERADORES DE LÓGICA
//Ejercicio 16: Descomenta todo el bloque desde la variable 'a' hasta el 'console.log(res6)' y completa el ejercicio. (Saldrá un error y no podrás visualizar el resultado hasta que termines este ejercicio)

/* let a = 6;
let b = 3;

let res =  a < 10 __ b > 1 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res)

let res2 = a < 10 __ b < 1 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea false
console.log(res2)

let res3 = a == 5 __ b == 5 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea false
console.log(res3)

let res4 = a == 6 __ b == 0 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res4)

let res5 = a == 0 __ b == 3 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res5)

let res6 = a == 6 __ b == 3 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res6) */
