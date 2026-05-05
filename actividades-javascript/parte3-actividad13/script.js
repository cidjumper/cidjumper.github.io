'use strict';

const TAMANIO = 20;
const MAX_INTENTOS = 5;
let matriz = [];
let filaTesoro = 0;
let columnaTesoro = 0;
let intentos = 0;
let juegoTerminado = false;

function crearMatriz() {
  matriz = Array.from({ length: TAMANIO }, () => Array(TAMANIO).fill(''));
  filaTesoro = Math.floor(Math.random() * TAMANIO);
  columnaTesoro = Math.floor(Math.random() * TAMANIO);
  matriz[filaTesoro][columnaTesoro] = 'T';
}

function crearTablero() {
  const tablero = document.getElementById('tablero');
  if (!tablero) return;
  const tabla = document.createElement('table');
  tablero.innerHTML = '';

  for (let fila = 0; fila < TAMANIO; fila++) {
    const tr = document.createElement('tr');
    for (let columna = 0; columna < TAMANIO; columna++) {
      const td = document.createElement('td');
      td.id = `celda${fila}_${columna}`;
      td.dataset.fila = fila.toString();
      td.dataset.columna = columna.toString();
      td.addEventListener('click', () => {
        document.getElementById('fila').value = fila;
        document.getElementById('columna').value = columna;
        buscarTesoro();
      });
      tr.appendChild(td);
    }
    tabla.appendChild(tr);
  }
  tablero.appendChild(tabla);
}

function buscarTesoro() {
  if (juegoTerminado) {
    mostrarMensaje('El juego ya ha terminado. Pulsa reiniciar.');
    return;
  }

  const filaUsuario = parseInt(document.getElementById('fila').value, 10);
  const columnaUsuario = parseInt(document.getElementById('columna').value, 10);
  if ([filaUsuario, columnaUsuario].some(Number.isNaN) || filaUsuario < 0 || filaUsuario >= TAMANIO || columnaUsuario < 0 || columnaUsuario >= TAMANIO) {
    mostrarMensaje(`Introduce fila y columna entre 0 y ${TAMANIO - 1}.`);
    return;
  }

  intentos++;
  document.getElementById('intentos').textContent = intentos;
  const celda = document.getElementById(`celda${filaUsuario}_${columnaUsuario}`);

  if (filaUsuario === filaTesoro && columnaUsuario === columnaTesoro) {
    marcarCelda(celda, 'tesoro', 'T');
    mostrarMensaje(`Has descubierto el tesoro en ${intentos} intento(s).`);
    juegoTerminado = true;
    return;
  }

  marcarCelda(celda, 'fallo', 'X');
  if (intentos >= MAX_INTENTOS) {
    const celdaTesoro = document.getElementById(`celda${filaTesoro}_${columnaTesoro}`);
    marcarCelda(celdaTesoro, 'tesoro', 'T');
    mostrarMensaje(`Has perdido. El tesoro estaba en la fila ${filaTesoro} y columna ${columnaTesoro}.`);
    juegoTerminado = true;
    return;
  }

  mostrarMensaje(`No has acertado. El tesoro está al ${obtenerDireccion(filaUsuario, columnaUsuario)}. Te quedan ${MAX_INTENTOS - intentos} intento(s).`);
}

function marcarCelda(celda, clase, texto) {
  if (!celda) return;
  celda.className = clase;
  celda.textContent = texto;
}

function obtenerDireccion(filaUsuario, columnaUsuario) {
  const vertical = filaTesoro < filaUsuario ? 'norte' : filaTesoro > filaUsuario ? 'sur' : '';
  const horizontal = columnaTesoro < columnaUsuario ? 'oeste' : columnaTesoro > columnaUsuario ? 'este' : '';
  return `${vertical}${vertical && horizontal ? '-' : ''}${horizontal}` || 'misma posición';
}

function mostrarMensaje(texto) {
  document.getElementById('mensaje').textContent = texto;
}

function reiniciarJuego() {
  crearMatriz();
  intentos = 0;
  juegoTerminado = false;
  document.getElementById('fila').value = '';
  document.getElementById('columna').value = '';
  document.getElementById('intentos').textContent = '0';
  mostrarMensaje('Juego reiniciado. Empieza la búsqueda.');
  crearTablero();
}

document.addEventListener('DOMContentLoaded', reiniciarJuego);
