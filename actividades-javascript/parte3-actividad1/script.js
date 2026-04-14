const botonMostrarDatos = document.getElementById('boton-mostrar-datos');
const resultado = document.getElementById('resultado');

botonMostrarDatos.addEventListener('click', function () {
  const nombre = document.getElementById('nombre').value.trim();
  const apellidos = document.getElementById('apellidos').value.trim();
  const edad = Number(document.getElementById('edad').value);
  const anioActual = new Date().getFullYear();

  if (!nombre || !apellidos || Number.isNaN(edad)) {
    resultado.textContent = 'Debes completar nombre, apellidos y edad.';
    return;
  }

  const anioNacimiento = anioActual - edad;
  const mensajeEdad = edad >= 18 ? 'es mayor de edad' : 'es menor de edad';

  resultado.innerHTML = '<strong>' + nombre + ' ' + apellidos + '</strong> tiene ' + edad + ' años, nació en ' + anioNacimiento + ' y ' + mensajeEdad + '.';
});
