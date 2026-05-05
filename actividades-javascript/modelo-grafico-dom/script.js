let contenidoOriginal = "";

function iniciarDom() {
    contenidoOriginal = document.getElementById("zonaManipulacion").innerHTML;
    activarEventosCeldas();
}

function cambiarTitulo() {
    let titulo = document.getElementById("encabezado");

    titulo.innerHTML = "DOM Manipulado";
    titulo.style.color = "red";
    titulo.className = "titulo-activo";
}

function cambiarParrafo() {
    let parrafo = document.getElementById("parrafo");

    parrafo.innerHTML = "Esto es un párrafo con <strong>texto añadido en negrita</strong>.";
}

function cambiarCeldas() {
    document.getElementById("celda1").innerHTML = "Nueva Celda 1";
    document.getElementById("celda2").innerHTML = "Nueva Celda 2";
}

function anadirCelda() {
    let fila = document.getElementById("filaTabla");
    let celda = document.createElement("td");

    celda.innerHTML = "Nueva celda";
    fila.appendChild(celda);
    activarEventosCeldas();
}

function cambiarColorCeldas() {
    document.getElementById("celda1").style.backgroundColor = "#f92a82";
    document.getElementById("celda2").style.backgroundColor = "#f92a82";
}

function activarEventosCeldas() {
    let celdas = document.getElementById("filaTabla").getElementsByTagName("td");

    for (let i = 0; i < celdas.length; i++) {
        celdas[i].onclick = function() {
            this.style.backgroundColor = "yellow";
        };
    }
}

function deshacerCambio() {
    document.getElementById("zonaManipulacion").innerHTML = contenidoOriginal;
    activarEventosCeldas();
}

