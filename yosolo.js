var a = "piedra" /* "A" le asigno el valor de piedra y etc.. */
var b = "papel"
var c = "tijera"

var result = function (user, ai) { /* Si te pido los siguientes valores realiza esta función. */
    if (user != ai) { /* Sí "user" y "ai" son diferentes realiza la siguiente función.. */
        if (        /* Si mis parametros "user" contienen estrictamente las variables: */
            (user === a && ai === c) || /* & Si mi "AI" también.. */
            (user === b && ai === a) || /* Ó.. */
            (user === c && ai === b)    /* Ó.. */
        ) { console.log ("you won!")} /* Imprime el siguiente mensaje en consola */
        else { /* De otro modo si nada de eso es cierto.. */
            console.log ("you lose!") /* Imprime lo siguiente */
        }
    }
    else if (user === ai) { /* Pero de otro modo Sí parametro user tiene estrictamente la siguiente variable.. */
        console.log ("tie!") /* imprime lo siguiente en consola. */
     }
}