'use strict';

let pantalla;
let numeroGuardado = 0;
let operadorGuardado = '';
let nuevoNumero = true;
let puntoPuesto = false;

function iniciarCalculadora() {
  pantalla = document.getElementById('pantalla');
}

function asegurarPantalla() {
  if (!pantalla) iniciarCalculadora();
}

function insertarNumero(numero) {
  asegurarPantalla();
  if (pantalla.value === 'Error' || pantalla.value === '0' || nuevoNumero) {
    pantalla.value = numero;
    nuevoNumero = false;
  } else {
    pantalla.value += numero;
  }
}

function insertarOperador(operador) {
  asegurarPantalla();
  numeroGuardado = parseFloat(pantalla.value);
  operadorGuardado = operador;
  nuevoNumero = true;
  puntoPuesto = false;
}

function insertarDecimal() {
  asegurarPantalla();
  if (nuevoNumero) {
    pantalla.value = '0.';
    nuevoNumero = false;
    puntoPuesto = true;
    return;
  }
  if (!puntoPuesto && !pantalla.value.includes('.')) {
    pantalla.value += '.';
    puntoPuesto = true;
  }
}

function limpiarPantalla() {
  asegurarPantalla();
  pantalla.value = '0';
  numeroGuardado = 0;
  operadorGuardado = '';
  nuevoNumero = true;
  puntoPuesto = false;
}

function borrarCaracter() {
  asegurarPantalla();
  if (pantalla.value.length <= 1 || pantalla.value === 'Error') {
    limpiarPantalla();
    return;
  }
  pantalla.value = pantalla.value.slice(0, -1);
  puntoPuesto = pantalla.value.includes('.');
}

function calcularResultado() {
  asegurarPantalla();
  const numeroActual = parseFloat(pantalla.value);
  let resultado = 0;

  if (!operadorGuardado || Number.isNaN(numeroActual)) return;

  try {
    switch (operadorGuardado) {
      case '+': resultado = numeroGuardado + numeroActual; break;
      case '-': resultado = numeroGuardado - numeroActual; break;
      case '*': resultado = numeroGuardado * numeroActual; break;
      case '/':
        if (numeroActual === 0) throw new Error('División entre cero');
        resultado = numeroGuardado / numeroActual;
        break;
      default: return;
    }
    pantalla.value = Number.isInteger(resultado) ? resultado.toString() : resultado.toFixed(6).replace(/0+$/, '').replace(/\.$/, '');
    numeroGuardado = resultado;
  } catch (error) {
    pantalla.value = 'Error';
    console.error(error.message);
  } finally {
    operadorGuardado = '';
    nuevoNumero = true;
    puntoPuesto = false;
  }
}

document.addEventListener('DOMContentLoaded', iniciarCalculadora);
