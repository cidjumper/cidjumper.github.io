'use strict';

let contenidoOriginal = '';

function iniciarDom() {
  const zona = document.getElementById('zonaManipulacion');
  if (!zona) return;
  contenidoOriginal = zona.innerHTML;
  activarEventosCeldas();
}

function cambiarTitulo() {
  const titulo = document.getElementById('encabezado');
  if (!titulo) return;
  titulo.textContent = 'DOM manipulado';
  titulo.style.color = 'red';
  titulo.className = 'titulo-activo';
}

function cambiarParrafo() {
  const parrafo = document.getElementById('parrafo');
  if (parrafo) parrafo.innerHTML = 'Esto es un párrafo con <strong>texto añadido en negrita</strong>.';
}

function cambiarCeldas() {
  ['celda1', 'celda2'].forEach((id, indice) => {
    const celda = document.getElementById(id);
    if (celda) celda.textContent = `Nueva Celda ${indice + 1}`;
  });
}

function anadirCelda() {
  const fila = document.getElementById('filaTabla');
  if (!fila) return;
  const celda = document.createElement('td');
  celda.textContent = `Nueva celda ${fila.children.length + 1}`;
  fila.appendChild(celda);
  activarEventosCeldas();
}

function cambiarColorCeldas() {
  const celdas = document.querySelectorAll('#filaTabla td');
  celdas.forEach(celda => {
    celda.style.backgroundColor = '#f92a82';
    celda.style.color = '#ffffff';
  });
}

function activarEventosCeldas() {
  const celdas = document.querySelectorAll('#filaTabla td');
  celdas.forEach(celda => {
    celda.addEventListener('click', () => {
      celda.style.backgroundColor = 'yellow';
      celda.style.color = '#1a1a2e';
    });
  });
}

function deshacerCambio() {
  const zona = document.getElementById('zonaManipulacion');
  if (!zona) return;
  zona.innerHTML = contenidoOriginal;
  activarEventosCeldas();
}

document.addEventListener('DOMContentLoaded', iniciarDom);
