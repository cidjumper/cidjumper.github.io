const agendaUsuarios = new Map();
const botonAnadirUsuario = document.getElementById('boton-anadir-usuario');
const botonVerAgenda = document.getElementById('boton-ver-agenda');
const botonVaciarFormulario = document.getElementById('boton-vaciar-formulario');
const resultado = document.getElementById('resultado');

botonAnadirUsuario.addEventListener('click', function () {
  const nombre = document.getElementById('nombre').value.trim();
  const dni = document.getElementById('dni').value.trim();

  if (!nombre || !dni) {
    resultado.textContent = 'Debes escribir el nombre y el DNI.';
    return;
  }

  agendaUsuarios.set(dni, nombre);
  resultado.textContent = 'Usuario guardado correctamente en la agenda.';
});

botonVerAgenda.addEventListener('click', function () {
  if (agendaUsuarios.size === 0) {
    resultado.textContent = 'La agenda está vacía.';
    return;
  }

  let contenido = '<table class="tabla-retro">';
  contenido += '<tr><th>DNI</th><th>Nombre</th></tr>';

  agendaUsuarios.forEach(function (nombre, dni) {
    contenido += '<tr><td>' + dni + '</td><td>' + nombre + '</td></tr>';
  });

  contenido += '</table>';
  resultado.innerHTML = contenido;
});

botonVaciarFormulario.addEventListener('click', function () {
  document.getElementById('nombre').value = '';
  document.getElementById('dni').value = '';
  resultado.textContent = 'Formulario limpiado.';
});
