function estacionIf() {
    let mes = document.getElementById("mes").value;
    let estacion = "";

    if (mes === "diciembre" || mes === "enero" || mes === "febrero") {
        estacion = "invierno";
    } else if (mes === "marzo" || mes === "abril" || mes === "mayo") {
        estacion = "primavera";
    } else if (mes === "junio" || mes === "julio" || mes === "agosto") {
        estacion = "verano";
    } else if (mes === "septiembre" || mes === "octubre" || mes === "noviembre") {
        estacion = "otoño";
    } else {
        estacion = "Mes no válido. Escríbelo en minúsculas.";
    }

    document.getElementById("resultado").innerHTML = estacion;
}
