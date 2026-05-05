'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const celdas = [document.getElementById('celda-color-1'), document.getElementById('celda-color-2')];
  const botonCambiarColor = document.getElementById('boton-cambiar-color');
  const resultado = document.getElementById('resultado');
  const colores = ['#85d7ff', '#9cff57'];

  botonCambiarColor.addEventListener('click', () => {
    celdas.forEach((celda, indice) => {
      celda.style.backgroundColor = colores[indice];
      celda.style.color = '#0f0c29';
      celda.style.fontWeight = 'bold';
    });
    resultado.textContent = 'Ahora cada celda tiene color, texto destacado y estilo modificado desde JavaScript.';
  });
});
