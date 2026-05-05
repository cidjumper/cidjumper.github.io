function compararPalabras() {
    let palabra1 = document.getElementById("palabra1").value;
    let palabra2 = document.getElementById("palabra2").value;

    if (palabra1 === "" || palabra2 === "") {
        alert("Introduce las dos palabras.");
        return;
    }

    if (palabra1.length > palabra2.length) {
        alert("La palabra con más caracteres es: " + palabra1);
    } else if (palabra2.length > palabra1.length) {
        alert("La palabra con más caracteres es: " + palabra2);
    } else {
        alert("Las dos palabras tienen el mismo número de caracteres.");
    }
}
