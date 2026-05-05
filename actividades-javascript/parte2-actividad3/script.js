'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const celdas = [document.getElementById('celda-1'), document.getElementById('celda-2')];
  const botonCambiarCeldas = document.getElementById('boton-cambiar-celdas');
  const resultado = document.getElementById('resultado');

  botonCambiarCeldas.addEventListener('click', () => {
    celdas.forEach((celda, indice) => { celda.textContent = `Nueva Celda ${indice + 1}`; });
    resultado.textContent = 'Se ha cambiado el contenido de las dos celdas con un array y forEach.';
  });
});
