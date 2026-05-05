function mostrarEstacion() {
    let estaciones = ["invierno", "primavera", "verano", "otoño"];
    let numero = parseInt(document.getElementById("numero").value);
    let resultado = document.getElementById("resultado");

    if (isNaN(numero) || numero < 1 || numero > 4) {
        resultado.innerHTML = "Introduce un número entre 1 y 4.";
        return;
    }

    resultado.innerHTML = "<strong>La estación es: " + estaciones[numero - 1] + "</strong>";
}
