/*
Objetivo: Conceptos Basicos en JavaScript.
Uso: Seleccionar lo que se quiere probar quitando comentarios.

*/


/* Crearemos un objeto con propiedades y metodos.*/
var persona = {
  nombreArray: ['Eduardo', 'Peraza'],             // propiedad "name" con dos valores (Array).
  nombreObjeto: {
    nombre: "Alfredo",
    apellido : "Salazar"},
  edad: 32,                            // propiedad con un solo valor (numerico).
  genero: 'hombre',                     //propiedad con un solo valor (String).
  intereses: ['bailar', 'correr'],     //propiedad con un solo valor (numerico).propiedad con un solo valor (numerico).
  saludar: function() {              // Metodo "saludar".
    return 'Hi! I\'m ' + this.nombreArray[0] + '.';  // this = persona, el "." hace referencia a la propiedad "nombre" (objeto.propiedad)
                                                // "return", realiza el retorno de un valor/objeto de una funcion.
  }
};

console.log("Acceso a una propiedad del objeto");
console.log(persona.edad); // Escribiendo en consola (console.log()) la edad del objeto persona.
console.log("\n");

console.log("Acceso a una funcion del objeto");
console.log(persona.saludar());  // Escribiendo en consola realizando el llamado al metodo (saludar()) del objeto persona.
console.log("\n");

console.log("Concatenar propeiedades y valores del objeto");
console.log(persona.saludar() + " Me gusta " + persona.intereses[0]); // +, concatena (une) dos valores string.
console.log("\n");

console.log("Notacion de punto para acceder a objetos");
console.log(persona.nombreArray[0]);
console.log(persona.nombreObjeto.nombre);
console.log("\n");

console.log("Notacion de [] para acceder a objetos");
console.log(persona["nombreArray"][1]);
console.log(persona["nombreObjeto"]["apellido"]);
console.log("\n");

console.log("Cambiando valores a propiedades existentes");
console.log("Edad ANTES : " + persona.edad);
persona.edad = 52;
console.log("Edad DESPUES : " + persona.edad);
console.log("\n");

console.log("Agregando propiedad \"ciudad\" a objeto por punto");
persona.ciudad = "Barcelona";
console.log("Ciudad de la persona :" + persona.ciudad);
console.log("\n");


console.log("Agregando propiedad \"altura\" a objeto por [] colocando nombre por variable");
let nombrePropiedadAltura = "altura";
persona[nombrePropiedadAltura] = 165; // Esta es una caracteristica importante para poder agregar
                                      // propiedades definidas por el usuario o posterior a la programacion.
                                      // Esto no se puede hacer con la notacion con punto.
console.log("Altura de la persona :" + persona["altura"]);
console.log("\n");

console.log("Agregando una funcion \"decirEdad\" al objeto ");
persona.decirEdad = function (){ console.log("Mi edad es : " + persona.edad);}; // Agregando la funcion.
persona.decirEdad(); // Llamando la funcion.
console.log("\n");
