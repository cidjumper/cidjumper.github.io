'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const botonContarCaracteres = document.getElementById('boton-contar-caracteres');
  const resultado = document.getElementById('resultado');

  botonContarCaracteres.addEventListener('click', () => {
    const cadenaTexto = document.getElementById('cadena-texto').value;
    const palabras = cadenaTexto.trim() === '' ? [] : cadenaTexto.trim().split(/\s+/);
    resultado.textContent = `La cadena tiene ${cadenaTexto.length} caracteres y ${palabras.length} palabra(s).`;
  });
});
