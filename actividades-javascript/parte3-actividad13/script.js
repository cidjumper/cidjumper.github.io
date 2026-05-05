let matriz = [];
for (let i = 0; i < 20; i++) {
    matriz[i] = [];
    for (let j = 0; j < 20; j++) {
        matriz[i][j] = "";
    }
}
let filaTesoro = Math.floor(Math.random() * 20);
let columnaTesoro = Math.floor(Math.random() * 20);
matriz[filaTesoro][columnaTesoro] = "T";
let intentos = 0;
let maxIntentos = 5;
let juegoTerminado = false;
function crearTablero() {
    let tablero = document.getElementById("tablero");
    let tabla = document.createElement("table");
    tablero.innerHTML = "";
    for (let fila = 0; fila < 20; fila++) {
        let tr = document.createElement("tr");
        for (let columna = 0; columna < 20; columna++) {
            let td = document.createElement("td");
            td.id = "celda" + fila + "_" + columna;
            td.innerHTML = "";
            td.onclick = function() {
                document.getElementById("fila").value = fila;
                document.getElementById("columna").value = columna;
                buscarTesoro();
            };
            tr.appendChild(td);
        }
        tabla.appendChild(tr);
    }
    tablero.appendChild(tabla);
}
function buscarTesoro() {
    if (juegoTerminado === true) {
        mostrarMensaje("El juego ya ha terminado. Pulsa reiniciar.");
        return;
    }
    let filaUsuario = parseInt(document.getElementById("fila").value);
    let columnaUsuario = parseInt(document.getElementById("columna").value);
    if (isNaN(filaUsuario) || isNaN(columnaUsuario) || filaUsuario < 0 || filaUsuario > 19 || columnaUsuario < 0 || columnaUsuario > 19) {
        mostrarMensaje("Introduce fila y columna entre 0 y 19.");
        return;
    }
    intentos++;
    document.getElementById("intentos").innerHTML = intentos;
    let celda = document.getElementById("celda" + filaUsuario + "_" + columnaUsuario);
    if (filaUsuario === filaTesoro && columnaUsuario === columnaTesoro) {
        celda.className = "tesoro";
        celda.innerHTML = "T";
        mostrarMensaje("Has descubierto el tesoro en " + intentos + " intento(s).");
        juegoTerminado = true;
        return;
    }
    celda.className = "fallo";
    celda.innerHTML = "X";
    if (intentos >= maxIntentos) {
        let celdaTesoro = document.getElementById("celda" + filaTesoro + "_" + columnaTesoro);
        celdaTesoro.className = "tesoro";
        celdaTesoro.innerHTML = "T";
        mostrarMensaje("Has perdido. El tesoro estaba en la fila " + filaTesoro + " y columna " + columnaTesoro + ".");
        juegoTerminado = true;
        return;
    }
    mostrarMensaje("No has acertado. El tesoro está al " + obtenerDireccion(filaUsuario, columnaUsuario) + ". Te quedan " + (maxIntentos - intentos) + " intento(s).");
}
function obtenerDireccion(filaUsuario, columnaUsuario) {
    let vertical = "";
    let horizontal = "";
    if (filaTesoro < filaUsuario) {
        vertical = "norte";
    } else if (filaTesoro > filaUsuario) {
        vertical = "sur";
    }
    if (columnaTesoro < columnaUsuario) {
        horizontal = "oeste";
    } else if (columnaTesoro > columnaUsuario) {
        horizontal = "este";
    }
    return vertical + horizontal;
}
function mostrarMensaje(texto) {
    document.getElementById("mensaje").innerHTML = texto;
}
function reiniciarJuego() {
    matriz = [];
    for (let i = 0; i < 20; i++) {
        matriz[i] = [];
        for (let j = 0; j < 20; j++) {
            matriz[i][j] = "";
        }
    }
    filaTesoro = Math.floor(Math.random() * 20);
    columnaTesoro = Math.floor(Math.random() * 20);
    matriz[filaTesoro][columnaTesoro] = "T";
    intentos = 0;
    juegoTerminado = false;
    document.getElementById("fila").value = "";
    document.getElementById("columna").value = "";
    document.getElementById("intentos").innerHTML = "0";
    mostrarMensaje("Juego reiniciado. Empieza la búsqueda.");
    crearTablero();
}
