'use strict';

const estaciones = ['invierno', 'primavera', 'verano', 'otoño'];

function mostrarEstacion() {
  const numero = parseInt(document.getElementById('numero').value, 10);
  const resultado = document.getElementById('resultado');

  if (Number.isNaN(numero) || numero < 1 || numero > estaciones.length) {
    resultado.textContent = `Introduce un número entre 1 y ${estaciones.length}.`;
    return;
  }

  resultado.innerHTML = `<strong>La estación es: ${estaciones[numero - 1]}</strong>`;
}
