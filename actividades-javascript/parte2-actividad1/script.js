'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const tituloPrincipal = document.getElementById('titulo-principal');
  const botonCambiarTitulo = document.getElementById('boton-cambiar-titulo');
  const resultado = document.getElementById('resultado');

  botonCambiarTitulo.addEventListener('click', () => {
    tituloPrincipal.textContent = 'DOM manipulado';
    tituloPrincipal.style.color = 'red';
    tituloPrincipal.classList.add('titulo-activo');
    resultado.innerHTML = 'El h1 ahora usa <strong>textContent</strong>, estilo directo y <strong>classList.add</strong>.';
  });
});
