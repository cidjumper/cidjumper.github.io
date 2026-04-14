const parrafoTexto = document.getElementById('parrafo-texto');
const botonCambiarParrafo = document.getElementById('boton-cambiar-parrafo');
const resultado = document.getElementById('resultado');

botonCambiarParrafo.addEventListener('click', function () {
  parrafoTexto.innerHTML = 'Esto es un párrafo con una parte en <strong>negrita</strong> añadida con JavaScript.';
  resultado.textContent = 'Párrafo actualizado correctamente.';
});
