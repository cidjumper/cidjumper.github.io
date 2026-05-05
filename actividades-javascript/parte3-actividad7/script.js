'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const botonMostrarPersona = document.getElementById('boton-mostrar-persona');
  const resultado = document.getElementById('resultado');

  botonMostrarPersona.addEventListener('click', () => {
    const persona = {
      nombre: document.getElementById('nombre').value.trim(),
      provincia: document.getElementById('provincia').value,
      pueblo: document.getElementById('pueblo').value.trim()
    };

    if (!persona.nombre || !persona.provincia || !persona.pueblo) {
      resultado.textContent = 'Debes completar nombre, provincia y pueblo.';
      return;
    }

    resultado.textContent = `${persona.nombre}, eres de ${persona.provincia} y vives en ${persona.pueblo}.`;
  });
});
