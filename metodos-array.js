//Metodos de recorrido de Array
//Array Objeto
var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "Tv", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", costo: 1700 },
];

//Metodo Filter
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500;
});

//Metodo MAP
//return=delvolver
var nombreArticulo = articulos.map(function(articulo){
    return articulo.nombre
});