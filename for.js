var estudiantes = ["maria", "sergio", "rosa", "daniel"];


function saludarEstudiantes(estudiante){ //"estudiante" es el nombre de cada parametro
    console.log("hola " + estudiante);
}




for (var i = 0; i < estudiantes.length; i++){ //casi siempre se ocupa la variable I por sintaxis// el ;(mientras) divide por pasos la funcion.
    saludarEstudiantes(estudiantes[i]);
    
}
for (var estudiante of estudiantes) { //se inicializa una variable singular para el Array, mientras siga teniendo valores los seguira imprimiendo.
    saludarEstudiantes(estudiante);
}

var estudiantes = ["maria", "sergio", "rosa", "daniel"];

function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`)
}

while (estudiantes.length > 0) {
    console.log(estudiantes)
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}