const botonCalcularTotal = document.getElementById('boton-calcular-total');
const resultado = document.getElementById('resultado');

botonCalcularTotal.addEventListener('click', function () {
  const nombre = document.getElementById('nombre').value.trim();
  const cantidad = Number(document.getElementById('cantidad').value);

  if (!nombre || Number.isNaN(cantidad) || cantidad < 0) {
    resultado.textContent = 'Debes escribir un nombre y una cantidad válida.';
    return;
  }

  let iva = 0;

  if (cantidad >= 5000) {
    iva = 10;
  } else if (cantidad > 3000) {
    iva = 15;
  } else {
    iva = 21;
  }

  const total = cantidad + (cantidad * iva / 100);

  resultado.innerHTML = '<strong>' + nombre + '</strong> debe pagar <strong>' + total.toFixed(2) + ' €</strong> con un IVA del ' + iva + '%.';
});
