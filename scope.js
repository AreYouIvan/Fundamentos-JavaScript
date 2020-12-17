/* SCOPE: Alcance que tienen las variables */

/* Scope Local: Está dentro de una función y solo puede ser usada en ese función. */

/* Scope Global: esta en todo el universo una vez declarada y puede ser usada en una funcion "local". */

var nombre = "Diego"; /* Global */



function fun() {
    var apellido = "Garcia"; /* Local */
    return nombre + "" + apellido;
}