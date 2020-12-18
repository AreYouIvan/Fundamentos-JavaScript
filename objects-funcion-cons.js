class auto {
    constructor(marca, modelo, annio) {
        this.marca = marca;
        this.modelo = modelo;
        this.annio = annio;
    }
}

var autos = [];
for(let i = 0 ; i < 2 ; i++) {
    var marca = prompt("Marca del auto");
    var modelo = prompt("Modelo del auto");
    var annio = prompt("Año del auto");
    autos.push(new auto(marca, modelo, annio));
}

for(let i = 0 ; i < autos.length ; i++){
    console.log(autos[i]);
}

 //"new" Hace referencia a nuestra funcion constructora.