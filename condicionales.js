/* El entreparentesis debe ser verdad */

var edad = 18;

if (edad === 18) {  
    console.log ("Puedes votar! felicidades!")

} else if (edad > 18) {
    console.log ("Toma una sabia decisión")
} else {
    console.log ("Epa, chaval aún estás pollo.")
}

condition ? true : false; /* Operador ternario condicion en una sola linea*/

var numero = 1;

var resultado = numero === 1 ? "Sí soy un uno" : "No, no soy uno"

/* ---------------Reto---------------- */
"piedra" > "tijera"
"tijera" > "papel"
"papel" > "piedra"


var a = "piedra"
var b = "papel"
var c = "tijera"
/* Este parece el mejor codigo con respecto a la clase */
var result = function (user, ai) {
    if ( user != ai) {
        if (
            (user === a && ai === c) || 
            (user === b && ai === a) ||
            (user === c && ai === b) 
        ) { console.log ("Ganaste")    
        } else {
            console.log ("Perdiste :C")}
    } else if ( user === ai) { 
        console.log ("Empate..") }
     }
    

    /* -------------------Este es el mejor codigo de la comunidad------------------- */
var a = "Piedra";
var b = "Papel";
var c = "Tijera";
var won = "Ganaste con ";

var resultado = function(you, AI){
    if(you != AI){
        if(you === a && AI === c)
        {
            console.log(won + a)
        }else if(you === b && AI === a)
        {
            console.log(won + b)
        }else if(you === c && AI === b)
        {
            console.log(won + c)
        }else{
            console.log("Loser!")
        }
    }else if(you === AI){
        console.log("Tie!")
    }
};