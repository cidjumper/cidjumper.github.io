const filaPrincipal = document.getElementById('fila-principal');
const botonAnadirCelda = document.getElementById('boton-anadir-celda');
const resultado = document.getElementById('resultado');
let contadorCeldasNuevas = 1;

botonAnadirCelda.addEventListener('click', function () {
  const nuevaCelda = document.createElement('td');
  nuevaCelda.textContent = 'Celda nueva ' + contadorCeldasNuevas;
  filaPrincipal.appendChild(nuevaCelda);
  resultado.textContent = 'Se ha añadido la celda nueva ' + contadorCeldasNuevas + '.';
  contadorCeldasNuevas++;
});
