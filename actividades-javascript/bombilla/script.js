const bombilla = document.getElementById('bombilla');
const botonBombilla = document.getElementById('boton-bombilla');
let encendida = false;

botonBombilla.addEventListener('click', function () {
  encendida = !encendida;

  if (encendida) {
    bombilla.src = 'img/bombilla_on.png';
    bombilla.alt = 'Bombilla encendida';
    botonBombilla.textContent = 'Apagar';
  } else {
    bombilla.src = 'img/bombilla_off.png';
    bombilla.alt = 'Bombilla apagada';
    botonBombilla.textContent = 'Encender';
  }
});
