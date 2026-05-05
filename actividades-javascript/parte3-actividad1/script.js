function mostrarDatos() {
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let edad = parseInt(document.getElementById("edad").value);
    let resultado = document.getElementById("resultado");

    if (nombre === "" || apellidos === "" || isNaN(edad) || edad < 0) {
        resultado.innerHTML = "Introduce datos válidos.";
        return;
    }

    let fecha = new Date();
    let anio = fecha.getFullYear() - edad;
    let mensaje = "";

    if (edad >= 18) {
        mensaje = nombre + " " + apellidos + " tiene " + edad + " años y es mayor de Edad";
    } else {
        mensaje = nombre + " " + apellidos + " tiene " + edad + " años y es menor de Edad";
    }

    resultado.innerHTML = mensaje + "<br>Año de nacimiento aproximado: " + anio;
}
