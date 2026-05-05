function sumarNumeros() {
    let numero = parseInt(document.getElementById("numero").value);
    let suma = 0;

    if (isNaN(numero) || numero < 0) {
        document.getElementById("resultado").innerHTML = "Introduce un número positivo.";
        return;
    }

    for (let i = 0; i <= numero; i++) {
        suma = suma + i;
    }

    document.getElementById("resultado").innerHTML = "El sumatorio desde 0 hasta " + numero + " es " + suma + ".";
}
