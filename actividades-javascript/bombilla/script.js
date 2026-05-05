'use strict';

const bombilla = {
  encendida: false,
  imagenes: {
    apagada: 'bombilla_apagada.png',
    encendida: 'bombilla_encendida.png'
  }
};

function cambiarBombilla() {
  const imagen = document.getElementById('imagenBombilla');
  const boton = document.getElementById('botonBombilla');
  if (!imagen || !boton) return;

  bombilla.encendida = !bombilla.encendida;
  imagen.src = bombilla.encendida ? bombilla.imagenes.encendida : bombilla.imagenes.apagada;
  imagen.alt = bombilla.encendida ? 'Bombilla encendida' : 'Bombilla apagada';
  boton.textContent = bombilla.encendida ? 'Apagar' : 'Encender';
  boton.setAttribute('aria-pressed', String(bombilla.encendida));
}

document.addEventListener('DOMContentLoaded', () => {
  const boton = document.getElementById('botonBombilla');
  if (boton) boton.addEventListener('click', cambiarBombilla);
});
