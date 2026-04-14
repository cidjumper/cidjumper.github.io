const celdaColorUno = document.getElementById('celda-color-1');
const celdaColorDos = document.getElementById('celda-color-2');
const botonCambiarColor = document.getElementById('boton-cambiar-color');
const resultado = document.getElementById('resultado');

botonCambiarColor.addEventListener('click', function () {
  celdaColorUno.style.backgroundColor = '#85d7ff';
  celdaColorDos.style.backgroundColor = '#9cff57';
  resultado.textContent = 'Ahora cada celda tiene un color diferente.';
});
