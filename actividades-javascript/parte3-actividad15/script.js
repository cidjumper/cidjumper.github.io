let agenda = new Map();
function anadirUsuario() {
    let nombre = document.getElementById("nombre").value;
    let dni = document.getElementById("dni").value;
    if (nombre === "" || dni === "") {
        mostrarMensaje("Debes introducir un nombre y un DNI.");
        return;
    }
    if (agenda.has(dni)) {
        mostrarMensaje("Ya existe un usuario guardado con ese DNI.");
        return;
    }
    agenda.set(dni, nombre);
    mostrarMensaje("Usuario añadido correctamente.");
    document.getElementById("nombre").value = "";
    document.getElementById("dni").value = "";
    mostrarUsuarios();
}
function mostrarUsuarios() {
    let lista = document.getElementById("listaUsuarios");
    let texto = "";
    if (agenda.size === 0) {
        lista.innerHTML = "Todavía no hay usuarios guardados.";
        mostrarMensaje("La agenda está vacía.");
        return;
    }
    for (let usuario of agenda) {
        texto = texto + "<div class='usuario'><p><b>Nombre:</b> " + usuario[1] + "</p><p><b>DNI:</b> " + usuario[0] + "</p></div>";
    }
    lista.innerHTML = texto;
    mostrarMensaje("Mostrando todos los usuarios.");
}
function mostrarMensaje(texto) {
    document.getElementById("mensaje").innerHTML = texto;
}
