var numero = 1;

switch (numero) {
    case 1:
        console.log("Soy uno");
        break; //Es para Romper.
    case 10:
        console.log("Soy un 10")
        break;
    case 100:
        console.log("Soy un 100")
        break;
    default:
        console.log("Nada")
}
/* esta hecho para validar casos */

var option = ["rock", "paper", "tijera"];
var user = "rock"
var machine = "rock"


switch (true) {
    case (user === machine):
        console.log("tie!");
        break;
    case (user === "rock" && machine === "paper"):
        console.log("Ganaste!");
        break;
    case (user === "paper" && machine === "rock"):
        console.log("Ganaste!");
        break;
    case (user === "tijera" && machine === "paper"):
        console.log("tie!");
        break;
    default:
        console.log("perdiste!");

}
