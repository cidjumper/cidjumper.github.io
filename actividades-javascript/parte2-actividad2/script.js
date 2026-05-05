'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const parrafoTexto = document.getElementById('parrafo-texto');
  const botonCambiarParrafo = document.getElementById('boton-cambiar-parrafo');
  const resultado = document.getElementById('resultado');

  botonCambiarParrafo.addEventListener('click', () => {
    parrafoTexto.innerHTML = 'Esto es un párrafo con una parte en <strong>negrita</strong> añadida con JavaScript.';
    resultado.textContent = 'Párrafo actualizado: innerHTML permite insertar etiquetas HTML.';
  });
});
