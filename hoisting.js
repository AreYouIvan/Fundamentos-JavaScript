/* Hoisting: Cuando las variables y las funciones se declaran antes de que se procese cualquier tipo de codigo. */

/* Solo para en versiones pasadas de JS ECMA Script 5 para abajo. */

/* El hoisting solo sucede con dos palabras clave que son: var y function*/


/* Las nuevas versiones presentaron dos nuevas variables que son  const y let */

/* var miNombre;
miNombre = "Diego"; */

 /* console.log es imprimr resultados en la consola. */

 /* Por buenas practicas tienes que declarar tus funciones y variables al inicio del codigo. */
/* 
 Antes de usar una variable, habrá que crearla y asignarla.

 Las funciones siempre se mueven arriba del scope. Por lo tanto, podemos elegir donde declararlas y usarlas. */

 var miNombre; 
 miNombre = "Ivan";

 function fun() {
    alert("Hola " + miNombre) 
 }