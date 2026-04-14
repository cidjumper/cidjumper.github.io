const botonMostrarEstacionIf = document.getElementById('boton-mostrar-estacion-if');
const resultado = document.getElementById('resultado');

botonMostrarEstacionIf.addEventListener('click', function () {
  const mes = document.getElementById('mes').value.trim().toLowerCase();
  let estacion = '';

  if (mes === 'diciembre' || mes === 'enero' || mes === 'febrero') {
    estacion = 'Invierno';
  } else if (mes === 'marzo' || mes === 'abril' || mes === 'mayo') {
    estacion = 'Primavera';
  } else if (mes === 'junio' || mes === 'julio' || mes === 'agosto') {
    estacion = 'Verano';
  } else if (mes === 'septiembre' || mes === 'setiembre' || mes === 'octubre' || mes === 'noviembre') {
    estacion = 'Otoño';
  } else {
    estacion = 'Mes no válido';
  }

  resultado.textContent = 'La estación es: ' + estacion;
});
