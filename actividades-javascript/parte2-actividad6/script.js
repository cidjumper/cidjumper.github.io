'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const celdasPulsables = document.querySelectorAll('.celda-pulsable');
  const resultado = document.getElementById('resultado');

  celdasPulsables.forEach(celda => {
    celda.addEventListener('click', () => {
      celdasPulsables.forEach(otra => otra.classList.remove('seleccionada'));
      celda.classList.add('seleccionada');
      celda.style.backgroundColor = 'yellow';
      celda.style.color = '#1a1a2e';
      resultado.textContent = `Has puesto en amarillo la celda con el texto: ${celda.textContent}`;
    });
  });
});
