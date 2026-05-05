'use strict';

const agenda = new Map();
const CLAVE_STORAGE = 'agendaUsuarios';

function cargarAgenda() {
  const datos = localStorage.getItem(CLAVE_STORAGE);
  if (!datos) return;
  try {
    const usuarios = JSON.parse(datos);
    usuarios.forEach(usuario => agenda.set(usuario.dni, usuario.nombre));
  } catch (error) {
    console.error('No se pudo leer la agenda:', error.message);
  }
}

function guardarAgenda() {
  const usuarios = [...agenda].map(([dni, nombre]) => ({ dni, nombre }));
  localStorage.setItem(CLAVE_STORAGE, JSON.stringify(usuarios));
}

function anadirUsuario() {
  const nombre = document.getElementById('nombre').value.trim();
  const dni = document.getElementById('dni').value.trim().toUpperCase();

  if (!nombre || !dni) {
    mostrarMensaje('Debes introducir un nombre y un DNI.');
    return;
  }
  if (agenda.has(dni)) {
    mostrarMensaje('Ya existe un usuario guardado con ese DNI.');
    return;
  }

  agenda.set(dni, nombre);
  guardarAgenda();
  mostrarMensaje('Usuario añadido correctamente y guardado en localStorage.');
  document.getElementById('nombre').value = '';
  document.getElementById('dni').value = '';
  mostrarUsuarios();
}

function mostrarUsuarios() {
  const lista = document.getElementById('listaUsuarios');
  if (agenda.size === 0) {
    lista.textContent = 'Todavía no hay usuarios guardados.';
    mostrarMensaje('La agenda está vacía.');
    return;
  }

  lista.innerHTML = [...agenda]
    .map(([dni, nombre]) => `<div class="usuario"><p><b>Nombre:</b> ${nombre}</p><p><b>DNI:</b> ${dni}</p></div>`)
    .join('');
  mostrarMensaje(`Mostrando ${agenda.size} usuario(s).`);
}

function mostrarMensaje(texto) {
  document.getElementById('mensaje').textContent = texto;
}

document.addEventListener('DOMContentLoaded', () => {
  cargarAgenda();
  mostrarUsuarios();
});
