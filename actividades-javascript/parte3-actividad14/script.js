const botonesOperacion = document.querySelectorAll('.boton-operacion');
const resultado = document.getElementById('resultado');

function obtenerNumeros() {
  const numeroUno = Number(document.getElementById('numero-uno').value);
  const numeroDos = Number(document.getElementById('numero-dos').value);

  if (Number.isNaN(numeroUno) || Number.isNaN(numeroDos)) {
    resultado.textContent = 'Debes escribir dos números válidos.';
    return null;
  }

  return { numeroUno, numeroDos };
}

botonesOperacion.forEach(function (boton) {
  boton.addEventListener('click', function () {
    const numeros = obtenerNumeros();
    if (!numeros) {
      return;
    }

    let respuesta = 0;

    if (boton.dataset.operacion === 'sumar') {
      respuesta = numeros.numeroUno + numeros.numeroDos;
    } else if (boton.dataset.operacion === 'restar') {
      respuesta = numeros.numeroUno - numeros.numeroDos;
    } else if (boton.dataset.operacion === 'multiplicar') {
      respuesta = numeros.numeroUno * numeros.numeroDos;
    } else if (boton.dataset.operacion === 'dividir') {
      if (numeros.numeroDos === 0) {
        resultado.textContent = 'No se puede dividir entre 0.';
        return;
      }
      respuesta = numeros.numeroUno / numeros.numeroDos;
    }

    resultado.textContent = 'Resultado: ' + respuesta;
  });
});
