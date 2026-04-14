const botonBuscarTesoro = document.getElementById('boton-buscar-tesoro');
const botonReiniciarJuego = document.getElementById('boton-reiniciar-juego');
const resultado = document.getElementById('resultado');

let posicionTesoro = Math.floor(Math.random() * 5) + 1;
let intentos = 0;

botonBuscarTesoro.addEventListener('click', function () {
  const casilla = Number(document.getElementById('casilla').value);

  if (Number.isNaN(casilla) || casilla < 1 || casilla > 5) {
    resultado.textContent = 'Debes introducir un número del 1 al 5.';
    return;
  }

  intentos++;

  if (casilla === posicionTesoro) {
    resultado.innerHTML = '¡Has encontrado el tesoro en ' + intentos + ' intento(s)!';
  } else {
    resultado.textContent = 'No está en la casilla ' + casilla + '. Sigue buscando.';
  }
});

botonReiniciarJuego.addEventListener('click', function () {
  posicionTesoro = Math.floor(Math.random() * 5) + 1;
  intentos = 0;
  resultado.textContent = 'Juego reiniciado. El tesoro ya está escondido en otra casilla.';
  document.getElementById('casilla').value = '';
});
