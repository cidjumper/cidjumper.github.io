'use strict';

function estacionIf() {
  const mes = document.getElementById('mes').value.trim().toLowerCase();
  let estacion = '';

  if (['diciembre', 'enero', 'febrero'].includes(mes)) {
    estacion = 'invierno';
  } else if (['marzo', 'abril', 'mayo'].includes(mes)) {
    estacion = 'primavera';
  } else if (['junio', 'julio', 'agosto'].includes(mes)) {
    estacion = 'verano';
  } else if (['septiembre', 'octubre', 'noviembre'].includes(mes)) {
    estacion = 'otoño';
  } else {
    estacion = 'Mes no válido.';
  }

  document.getElementById('resultado').textContent = estacion;
}
