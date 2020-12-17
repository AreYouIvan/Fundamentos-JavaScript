/* Funciones: Son un conjunto de sentencias que utilizamos para generar acciones con los valores que ya guardamos en la variables */

/* Tipos de funciones */

/* Declarativas */
function miFuncion() {
    return 3;
}

miFuncion();

/* Expresión /Anonima */

var miFuncion = function(a, b) {
    return a + b;
}

miFuncion();


/* -------Console Log es imprimir informacion en la consola en tiempo real------- */

/* Diferencias */

/*A las funciones declarativas se les aplica hoisting, y a la expresión de función, no. Ya que el hoisting solo se aplica en las palabras reservadas var y function. */


