'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const filaPrincipal = document.getElementById('fila-principal');
  const botonAnadirCelda = document.getElementById('boton-anadir-celda');
  const resultado = document.getElementById('resultado');
  let contadorCeldasNuevas = 1;

  botonAnadirCelda.addEventListener('click', () => {
    const nuevaCelda = document.createElement('td');
    nuevaCelda.textContent = `Celda nueva ${contadorCeldasNuevas}`;
    nuevaCelda.dataset.numero = contadorCeldasNuevas.toString();
    filaPrincipal.appendChild(nuevaCelda);
    resultado.textContent = `Se ha añadido la celda nueva ${contadorCeldasNuevas} con createElement y appendChild.`;
    contadorCeldasNuevas++;
  });
});
