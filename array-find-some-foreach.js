

var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "Tv", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", costo: 1700 },
];



//Metodo .FIND para encontrar el valor de un elemento especifico (se crea un nuevo array).
var encuentraArticulo = articulos.find(function (articulo){
    return articulo.nombre === "Laptop"
});

//Metodo .forEach Este metodo no me va a generar un nuevo array, hara el filtrado sobre el mismo array sin modificarlo y me generara el dato(no se tiene que crear un nuevo Array)).
articulos.forEach (function (articulo){
    console.log(articulo.nombre)
});
//Metodo .SOME Este metodo será una validacion de verdadero o falso, lo unico que regresará es un OK(true)(Se crea un nuevo array).

var articulosBaratos = articulos.some(function(articulos) {
    return articulo.costo <= 700;
});