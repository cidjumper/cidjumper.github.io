const celdaUno = document.getElementById('celda-1');
const celdaDos = document.getElementById('celda-2');
const botonCambiarCeldas = document.getElementById('boton-cambiar-celdas');
const resultado = document.getElementById('resultado');

botonCambiarCeldas.addEventListener('click', function () {
  celdaUno.textContent = 'Nueva Celda 1';
  celdaDos.textContent = 'Nueva Celda 2';
  resultado.textContent = 'Se ha cambiado el contenido de las dos celdas.';
});
