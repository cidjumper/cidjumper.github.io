'use strict';

function comprobarNumero() {
  const numero = parseInt(document.getElementById('numero').value, 10);
  const resultado = document.getElementById('resultado');

  if (Number.isNaN(numero) || numero < 1 || numero > 30) {
    resultado.textContent = 'El número debe estar entre 1 y 30.';
    return;
  }

  const mensaje = numero % 2 === 0 ? 'es divisible por dos' : 'no es divisible por dos';
  resultado.textContent = `El número ${numero} ${mensaje}.`;
}
