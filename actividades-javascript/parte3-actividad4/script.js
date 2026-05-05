'use strict';

function estacionSwitch() {
  const mes = document.getElementById('mes').value.trim().toLowerCase();
  let estacion = '';

  switch (mes) {
    case 'diciembre':
    case 'enero':
    case 'febrero':
      estacion = 'invierno';
      break;
    case 'marzo':
    case 'abril':
    case 'mayo':
      estacion = 'primavera';
      break;
    case 'junio':
    case 'julio':
    case 'agosto':
      estacion = 'verano';
      break;
    case 'septiembre':
    case 'octubre':
    case 'noviembre':
      estacion = 'otoño';
      break;
    default:
      estacion = 'Mes no válido.';
  }

  document.getElementById('resultado').textContent = estacion;
}
