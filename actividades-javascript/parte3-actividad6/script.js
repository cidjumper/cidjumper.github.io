'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const botonCalcularTotal = document.getElementById('boton-calcular-total');
  const resultado = document.getElementById('resultado');

  botonCalcularTotal.addEventListener('click', () => {
    const nombre = document.getElementById('nombre').value.trim();
    const cantidad = parseFloat(document.getElementById('cantidad').value);

    if (!nombre || Number.isNaN(cantidad) || cantidad < 0) {
      resultado.textContent = 'Debes escribir un nombre y una cantidad válida.';
      return;
    }

    const iva = cantidad >= 5000 ? 10 : cantidad > 3000 ? 15 : 21;
    const total = cantidad + (cantidad * iva / 100);
    const compra = { nombre, base: cantidad, iva, total };

    resultado.innerHTML = `<strong>${compra.nombre}</strong> debe pagar <strong>${compra.total.toFixed(2)} €</strong> con un IVA del ${compra.iva}%.`;
  });
});
