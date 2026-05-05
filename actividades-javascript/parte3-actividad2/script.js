function comprobarNumero() {
    let numero = parseInt(document.getElementById("numero").value);
    let resultado = document.getElementById("resultado");

    if (isNaN(numero) || numero < 1 || numero > 30) {
        resultado.innerHTML = "El número debe estar entre 1 y 30.";
        return;
    }

    if (numero % 2 === 0) {
        resultado.innerHTML = "El número " + numero + " es divisible por dos.";
    } else {
        resultado.innerHTML = "El número " + numero + " no es divisible por dos.";
    }
}
