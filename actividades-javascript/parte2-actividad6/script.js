const celdasPulsables = document.querySelectorAll('.celda-pulsable');
const resultado = document.getElementById('resultado');

celdasPulsables.forEach(function (celda) {
  celda.addEventListener('click', function () {
    celda.style.backgroundColor = 'yellow';
    resultado.textContent = 'Has puesto en amarillo la celda con el texto: ' + celda.textContent;
  });
});
