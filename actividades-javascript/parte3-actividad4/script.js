function estacionSwitch() {
    let mes = document.getElementById("mes").value;
    let estacion = "";

    switch (mes) {
        case "diciembre":
        case "enero":
        case "febrero":
            estacion = "invierno";
            break;
        case "marzo":
        case "abril":
        case "mayo":
            estacion = "primavera";
            break;
        case "junio":
        case "julio":
        case "agosto":
            estacion = "verano";
            break;
        case "septiembre":
        case "octubre":
        case "noviembre":
            estacion = "otoño";
            break;
        default:
            estacion = "Mes no válido. Escríbelo en minúsculas.";
            break;
    }

    document.getElementById("resultado").innerHTML = estacion;
}
