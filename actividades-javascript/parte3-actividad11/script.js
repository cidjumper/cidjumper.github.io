const botonCalcularSumatorio = document.getElementById('boton-calcular-sumatorio');
const resultado = document.getElementById('resultado');

botonCalcularSumatorio.addEventListener('click', function () {
  const numeroN = Number(document.getElementById('numero-n').value);

  if (Number.isNaN(numeroN) || numeroN < 0) {
    resultado.textContent = 'Debes introducir un número entero igual o mayor que 0.';
    return;
  }

  let suma = 0;
  for (let i = 0; i <= numeroN; i++) {
    suma += i;
  }

  resultado.textContent = 'La suma desde 0 hasta ' + numeroN + ' es ' + suma + '.';
});
