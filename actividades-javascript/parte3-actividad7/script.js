const botonMostrarPersona = document.getElementById('boton-mostrar-persona');
const resultado = document.getElementById('resultado');

botonMostrarPersona.addEventListener('click', function () {
  const nombre = document.getElementById('nombre').value.trim();
  const provincia = document.getElementById('provincia').value;
  const pueblo = document.getElementById('pueblo').value.trim();

  if (!nombre || !provincia || !pueblo) {
    resultado.textContent = 'Debes completar nombre, provincia y pueblo.';
    return;
  }

  resultado.textContent = nombre + ', eres ' + provincia + ' de ' + pueblo + '.';
});
