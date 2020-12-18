
// Metodo .push(): Agregar un valor a un Array

let nameArray = ["mario", "juan", "pedro", "william"];

function nameLol(){
    nameArray.push("charlie");
    console.log(nameArray);
};

// Metodo .shift() y .pop() .shift sacar el valor index(0)

let nameArray = ["mario", "juan", "pedro", "william"];

let shiftPrueba = nameArray.shift();
console.log(nameArray);

// A diferencia de .shift(), .pop() sacara del array el ultimo valor.

let nameArray = ["mario", "juan", "pedro", "william"];

let popPrueba = nameArray.pop();
console.log(nameArray);