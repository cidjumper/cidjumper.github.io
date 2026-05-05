let encendida = false;
let bombillaApagada = "bombilla_apagada.png";
let bombillaEncendida = "bombilla_encendida.png";


function cambiarBombilla() {
    let imagen = document.getElementById("imagenBombilla");
    let boton = document.getElementById("botonBombilla");

    if (encendida === false) {
        imagen.src = bombillaEncendida;
        imagen.alt = "Bombilla encendida";
        boton.innerHTML = "Apagar";
        encendida = true;
    } else {
        imagen.src = bombillaApagada;
        imagen.alt = "Bombilla apagada";
        boton.innerHTML = "Encender";
        encendida = false;
    }
}
