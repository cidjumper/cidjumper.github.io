'use strict';

function sumarNumeros() {
  const numero = parseInt(document.getElementById('numero').value, 10);
  const resultado = document.getElementById('resultado');

  if (Number.isNaN(numero) || numero < 0) {
    resultado.textContent = 'Introduce un número positivo.';
    return;
  }

  let suma = 0;
  for (let i = 0; i <= numero; i++) suma += i;

  const formula = numero * (numero + 1) / 2;
  resultado.textContent = `El sumatorio desde 0 hasta ${numero} es ${suma}. Comprobación con fórmula: ${formula}.`;
}
