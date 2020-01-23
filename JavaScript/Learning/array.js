
// Obteniendo el elemento Canvas.
var arraysGlobal = [];
var array0 = [];
var array1 = [];
var array01 = [];

// Declaración de variables y asignación de valores.
var array2 = [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7];
// Asignación de elementos
arraysGlobal[0] = array0;
arraysGlobal[1] = array1;
arraysGlobal[2] = array2;
array0[0] = "Elemento 0 del array 0";
array1[0] = "Elemento 0 del array 1";
array0[1] = array01;
array01[0] = "Elemento 0 del array 00";


// Acceso a los arrays.
console.log(arraysGlobal[0][0]);
console.log(array0[0]);
console.log(arraysGlobal[0][1][0]);


// Métodos.
console.log("LONGITUD .length: " + array2.length);
console.log("Contenido Array2 : " + array2);
console.log("ELIMINAR el PRIMER elemento .shift(): " + array2.shift()); // Devuelve el elemento.
console.log("Contenido Array2 : " + array2);
console.log("ELIMINAR el ULTIMO elemento .pop(): " + array2.pop()); // Devuelve el elemento.
console.log("Contenido Array2: " + array2);
console.log("AÑADIR elementos al INICIO .unshift(-5, -4): " + array2.unshift(-5, -4)); // Devuelve la longitud.
console.log("Contenido Array2: " + array2);
console.log("SELECCIONAR parte del array .slice(2,5): " + array2.slice(2,5));
console.log("Contenido Array2: " + array2);

console.log("BUSCAR dentro de un array .indexOf(2): " + array2.indexOf(2));//
console.log("BUSCAR dentro de un array .indexOf(2,5): " + array2.indexOf(2,5));//
console.log("BUSCAR dentro de un array .lastIndexOf(2,5): " + array2.lastIndexOf(2,5) + "(No encontrado)");//
console.log("BUSCAR dentro de un array .lastIndexOf(2): " + array2.lastIndexOf(2));//
console.log("BUSCAR dentro de un array .lastIndexOf(2, -1): " + array2.lastIndexOf(2, -1));//
console.log("Contenido Array2: " + array2);

console.log("Uso del método .splice()");
console.log("ELIMINAR elementos array2.splice(2,2): " + array2.splice(2,2)); // Devuelve los elementos.
console.log("Contenido Array2: " + array2);
console.log("ELIMINAR y AGREGAR elementos .splice(2, 2, -3, -2, -1, 0): " + array2.splice(2, 2, -3, -2, -1, 0)); //Devuelve los elementos.
console.log("Contenido Array2: " + array2);
console.log("AGREGAR elementos SIN eliminar .splice(2, 0, -22, -33): " + array2.splice(2, 0, -22, -33)); //Devuelve los elementos.
console.log("Contenido Array2: " + array2);
