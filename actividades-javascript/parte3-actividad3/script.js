const estaciones = ['Invierno', 'Primavera', 'Verano', 'Otoño'];
const botonMostrarEstacion = document.getElementById('boton-mostrar-estacion');
const resultado = document.getElementById('resultado');

botonMostrarEstacion.addEventListener('click', function () {
  const numero = Number(document.getElementById('numero-estacion').value);

  if (Number.isNaN(numero) || numero < 1 || numero > 4) {
    resultado.innerHTML = '<strong>Debes introducir un número del 1 al 4.</strong>';
    return;
  }

  resultado.innerHTML = 'La estación correspondiente es <strong>' + estaciones[numero - 1] + '</strong>.';
});
