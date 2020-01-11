/*
Objetivo: Conceptos Basicos en JavaScript.

Uso:      Seleccionar lo que se quiere probar quitando comentarios de bloque /*...*/.
          Los resultados se muestran por consola. "console.log()".

NOTAS:

*/

// Crearemos un objeto con propiedades y metodos.
const persona = {
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

/*****************************************
Scope => Alcance.
El alcance de una variable es el lugar desde donde podemos tener acceso a su valor

*****************************************/
/*
  function primerNivel(){
      let letPrimerNivel = 11;
      console.log("***...ALCANCE de las variables detro de una funcion anidada...***");
      console.log("Variables que se pueden leer en PRIMER nivel:");
      console.log("1er nivel = " + letPrimerNivel);
      //console.log("2do nivel = " + letSegundoNivel);// Esta linea esta comentada porque da un error al realizar el Llamado
                                                      // Ya que hasta este momento no se ha creado la variable.
      // console.log("3er nivel = " + letTercerNivel); // Esta linea esta comentada porque da un error al realizar el Llamado
                                                      // Ya que hasta este momento no se ha creado la variable.
      segundoNivel();
      function segundoNivel() {
        let letSegundoNivel = 22;
        console.log("Variables que se pueden leer en SEGUNDO nivel:");
        console.log("1er nivel = " + letPrimerNivel);
        console.log("2do nivel = " + letSegundoNivel);
        // console.log("3er nivel = " + letTercerNivel); // Esta linea esta comentada porque da un error al realizar el Llamado
                                                        // Ya que hasta este momento no se ha creado la variable.
        tercerNivel();
        function tercerNivel() {
          let letTercerNivel = 33;
          console.log("Variables que se pueden leer en TERCER nivel:");
          console.log("1er nivel = " + letPrimerNivel);
          console.log("2do nivel = " + letSegundoNivel);
          console.log("3er nivel = " + letTercerNivel);
        }
      }
  }

  // Llamado a la funcion de primerNivel
  primerNivel();

*/




/*****************************************
context => Contexto.
El contexto hace referencia al "ambiente" de donde se esta ejecutando una instruccion.

******************************************/
/*
  function context() {
      alert(" Tipo de contexto de la palabra \"this\" en una funcion : " + this); // this hace referencia al contexto donde se esta ejecutando la instruccion.
  }

  context();              // Aqui como se llama a la funcion directamente,
                          // devuelve el contexto windows.

  var a = context();      // En este caso como se esta creando una variable
                          // solo que ese valor se asigna el resultado de la funcion
                          // que pertenece al contexto de windows,
                          // es el mismo resultado.
  console.log( "Tipo de variable \"a\" : " + a);
  console.log(a);
  var b = new context();  // En este caso, como se esta creando un objeto
                          // por medio de su constructor "new",
                          // entonces el contexto es un objeto.
  console.log("Tipo de variable \"b\" : " + b);
  console.log(b);
  new context();
*/
var objeto = {
      parametro : 22,//alert(" Tipo de contexto de la palabra \"this\" en un objeto : " + this), // this hace referencia al contexto donde se esta ejecutando la instruccion.
      funcion : function() {
        return this;
      }
  }

console.log(this);
//console.log(objeto);
//console.log(objeto.funcion);
console.log(objeto.funcion());
//console.log(objeto.funcion() == objeto);
//console.log(objeto.funcion() === objeto);
