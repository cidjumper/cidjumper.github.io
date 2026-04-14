const botonComprobar = document.getElementById('boton-comprobar');
const resultado = document.getElementById('resultado');

botonComprobar.addEventListener('click', function () {
  const numero = Number(document.getElementById('numero').value);

  if (Number.isNaN(numero) || numero < 1 || numero > 30) {
    resultado.textContent = 'Debes introducir un número entre 1 y 30.';
    return;
  }

  if (numero % 2 === 0) {
    resultado.textContent = 'El número ' + numero + ' sí es divisible entre 2.';
  } else {
    resultado.textContent = 'El número ' + numero + ' no es divisible entre 2.';
  }
});
