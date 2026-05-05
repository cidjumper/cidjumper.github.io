let pantalla;
let numeroGuardado = 0;
let operadorGuardado = "";
let nuevoNumero = true;
let puntoPuesto = false;

function iniciarCalculadora() {
    pantalla = document.getElementById("pantalla");
}

function insertarNumero(numero) {
    if (pantalla === undefined) {
        iniciarCalculadora();
    }
    if (pantalla.value === "0" || nuevoNumero === true) {
        pantalla.value = numero;
        nuevoNumero = false;
    } else {
        pantalla.value = pantalla.value + numero;
    }
}

function insertarOperador(operador) {
    if (pantalla === undefined) {
        iniciarCalculadora();
    }
    numeroGuardado = parseFloat(pantalla.value);
    operadorGuardado = operador;
    nuevoNumero = true;
    puntoPuesto = false;
}

function insertarDecimal() {
    if (pantalla === undefined) {
        iniciarCalculadora();
    }
    if (puntoPuesto === false) {
        pantalla.value = pantalla.value + ".";
        puntoPuesto = true;
        nuevoNumero = false;
    }
}

function limpiarPantalla() {
    if (pantalla === undefined) {
        iniciarCalculadora();
    }
    pantalla.value = "0";
    numeroGuardado = 0;
    operadorGuardado = "";
    nuevoNumero = true;
    puntoPuesto = false;
}

function borrarCaracter() {
    if (pantalla === undefined) {
        iniciarCalculadora();
    }
    let texto = pantalla.value;
    let nuevoTexto = "";

    if (texto.length <= 1) {
        pantalla.value = "0";
        nuevoNumero = true;
        puntoPuesto = false;
        return;
    }

    for (let i = 0; i < texto.length - 1; i++) {
        nuevoTexto = nuevoTexto + texto[i];
    }

    pantalla.value = nuevoTexto;
}

function calcularResultado() {
    if (pantalla === undefined) {
        iniciarCalculadora();
    }
    let numeroActual = parseFloat(pantalla.value);
    let resultado = 0;

    if (operadorGuardado === "") {
        return;
    }

    if (operadorGuardado === "+") {
        resultado = numeroGuardado + numeroActual;
    } else if (operadorGuardado === "-") {
        resultado = numeroGuardado - numeroActual;
    } else if (operadorGuardado === "*") {
        resultado = numeroGuardado * numeroActual;
    } else if (operadorGuardado === "/") {
        if (numeroActual === 0) {
            pantalla.value = "Error";
            nuevoNumero = true;
            return;
        }

        resultado = numeroGuardado / numeroActual;
    }

    pantalla.value = resultado;
    numeroGuardado = resultado;
    operadorGuardado = "";
    nuevoNumero = true;
    puntoPuesto = false;
}
