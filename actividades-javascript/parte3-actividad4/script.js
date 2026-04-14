const botonMostrarEstacionSwitch = document.getElementById('boton-mostrar-estacion-switch');
const resultado = document.getElementById('resultado');

botonMostrarEstacionSwitch.addEventListener('click', function () {
  const mes = document.getElementById('mes').value.trim().toLowerCase();
  let estacion = '';

  switch (mes) {
    case 'diciembre':
    case 'enero':
    case 'febrero':
      estacion = 'Invierno';
      break;
    case 'marzo':
    case 'abril':
    case 'mayo':
      estacion = 'Primavera';
      break;
    case 'junio':
    case 'julio':
    case 'agosto':
      estacion = 'Verano';
      break;
    case 'septiembre':
    case 'setiembre':
    case 'octubre':
    case 'noviembre':
      estacion = 'Otoño';
      break;
    default:
      estacion = 'Mes no válido';
  }

  resultado.textContent = 'La estación es: ' + estacion;
});
