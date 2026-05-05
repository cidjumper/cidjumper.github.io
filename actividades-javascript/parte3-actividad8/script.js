'use strict';

const equivalenciaMilla = 1.60934;

document.addEventListener('DOMContentLoaded', () => {
  const botonKmAMillas = document.getElementById('boton-km-a-millas');
  const botonMillasAKm = document.getElementById('boton-millas-a-km');
  const resultado = document.getElementById('resultado');

  function obtenerCantidad() {
    const cantidad = parseFloat(document.getElementById('cantidad').value);
    if (Number.isNaN(cantidad) || cantidad < 0) {
      resultado.textContent = 'Debes escribir una cantidad válida y positiva.';
      return null;
    }
    return cantidad;
  }

  botonKmAMillas.addEventListener('click', () => {
    const kilometros = obtenerCantidad();
    if (kilometros === null) return;
    const millas = kilometros / equivalenciaMilla;
    resultado.textContent = `${kilometros} kilómetros son ${millas.toFixed(2)} millas.`;
  });

  botonMillasAKm.addEventListener('click', () => {
    const millas = obtenerCantidad();
    if (millas === null) return;
    const kilometros = millas * equivalenciaMilla;
    resultado.textContent = `${millas} millas son ${kilometros.toFixed(2)} kilómetros.`;
  });
});
