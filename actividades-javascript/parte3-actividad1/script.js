'use strict';

function mostrarDatos() {
  const nombre = document.getElementById('nombre').value.trim();
  const apellidos = document.getElementById('apellidos').value.trim();
  const edad = parseInt(document.getElementById('edad').value, 10);
  const resultado = document.getElementById('resultado');

  try {
    if (!nombre || !apellidos) throw new Error('Introduce nombre y apellidos.');
    if (Number.isNaN(edad) || edad < 0 || edad > 130) throw new Error('Introduce una edad válida entre 0 y 130.');

    const anioNacimiento = new Date().getFullYear() - edad;
    const estadoEdad = edad >= 18 ? 'mayor de edad' : 'menor de edad';
    const persona = { nombre, apellidos, edad, anioNacimiento };

    resultado.innerHTML = `<strong>${persona.nombre} ${persona.apellidos}</strong> tiene ${persona.edad} años y es ${estadoEdad}.<br>Año de nacimiento aproximado: ${persona.anioNacimiento}.`;
  } catch (error) {
    resultado.textContent = error.message;
  }
}
