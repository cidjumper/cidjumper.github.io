const equivalenciaMilla = 1.60934;
const botonKmAMillas = document.getElementById('boton-km-a-millas');
const botonMillasAKm = document.getElementById('boton-millas-a-km');
const resultado = document.getElementById('resultado');

function obtenerCantidad() {
  const cantidad = Number(document.getElementById('cantidad').value);
  if (Number.isNaN(cantidad)) {
    resultado.textContent = 'Debes escribir una cantidad válida.';
    return null;
  }
  return cantidad;
}

botonKmAMillas.addEventListener('click', function () {
  const kilometros = obtenerCantidad();
  if (kilometros === null) {
    return;
  }
  const millas = kilometros / equivalenciaMilla;
  resultado.textContent = kilometros + ' kilómetros son ' + millas.toFixed(2) + ' millas.';
});

botonMillasAKm.addEventListener('click', function () {
  const millas = obtenerCantidad();
  if (millas === null) {
    return;
  }
  const kilometros = millas * equivalenciaMilla;
  resultado.textContent = millas + ' millas son ' + kilometros.toFixed(2) + ' kilómetros.';
});
