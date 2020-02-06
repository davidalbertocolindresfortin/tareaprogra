const fs = require("fs");
const btnguardar = document.getElementById("btn-guardar");
const identidad = document.getElementById("identidad");
const primer_nombre = document.getElementById("primer_nombre");
const primer_apellido = document.getElementById("primer_apellido");
const edad = document.getElementById("edad");
const telefono = document.getElementById("telefono");


btnguardar.addEventListener("click", function (e) {
    e.preventDefault();
    fs.open("./alumunos.csv", 'a', function (err, archivo) {
        if (err) {
            console.log("Error al abrir el archivo");
            console.log(err);
            return;
        }
        const linea = `\n${identidad.value}, ${primer_nombre.value}, ${primer_apellido.value},${edad.value}, ${telefono.value}} `
        fs.write(archivo, linea, function (err, written, string) {
            if (err) {
                console.log('Error de escritura los datos');
                console.log(err);
            }
            console.log('Se escribieron los datos existosamente');
        })
    });

});