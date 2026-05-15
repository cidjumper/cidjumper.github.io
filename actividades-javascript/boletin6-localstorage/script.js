'use strict';

const CLAVE_COLORES = 'boletin6_colores_filas';
const COLOR_IMPAR_DEFECTO = '#ffe5ec';
const COLOR_PAR_DEFECTO = '#fed7aa';

const selectImpares = document.getElementById('colorImpares');
const selectPares = document.getElementById('colorPares');
const botonRestablecer = document.getElementById('btnRestablecer');
const mensaje = document.getElementById('mensaje');
const filas = document.querySelectorAll('#tablaRecetas tbody tr');

function cargarColoresGuardados() {
  const datos = localStorage.getItem(CLAVE_COLORES);

  if (!datos) {
    return {
      impares: COLOR_IMPAR_DEFECTO,
      pares: COLOR_PAR_DEFECTO
    };
  }

  try {
    const colores = JSON.parse(datos);
    return {
      impares: colores.impares || COLOR_IMPAR_DEFECTO,
      pares: colores.pares || COLOR_PAR_DEFECTO
    };
  } catch (error) {
    console.error('No se pudieron leer los colores guardados:', error.message);
    return {
      impares: COLOR_IMPAR_DEFECTO,
      pares: COLOR_PAR_DEFECTO
    };
  }
}

function guardarColores() {
  const colores = {
    impares: selectImpares.value,
    pares: selectPares.value
  };

  localStorage.setItem(CLAVE_COLORES, JSON.stringify(colores));
}

function aplicarColores() {
  filas.forEach((fila) => {
    const numeroFila = Number(fila.dataset.fila);
    const esPar = numeroFila % 2 === 0;
    fila.style.backgroundColor = esPar ? selectPares.value : selectImpares.value;
  });

  guardarColores();
  mensaje.textContent = 'Colores aplicados y guardados en Local Storage.';
}

function restablecerColores() {
  selectImpares.value = COLOR_IMPAR_DEFECTO;
  selectPares.value = COLOR_PAR_DEFECTO;
  aplicarColores();
  mensaje.textContent = 'Colores restablecidos y guardados.';
}

function iniciarActividad() {
  const colores = cargarColoresGuardados();
  selectImpares.value = colores.impares;
  selectPares.value = colores.pares;

  aplicarColores();
  mensaje.textContent = 'Colores cargados desde Local Storage.';

  selectImpares.addEventListener('change', aplicarColores);
  selectPares.addEventListener('change', aplicarColores);
  botonRestablecer.addEventListener('click', restablecerColores);
}

iniciarActividad();
