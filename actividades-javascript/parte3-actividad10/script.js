const botonCompararPalabras = document.getElementById('boton-comparar-palabras');
const resultado = document.getElementById('resultado');

botonCompararPalabras.addEventListener('click', function () {
  const palabraUno = document.getElementById('palabra-uno').value.trim();
  const palabraDos = document.getElementById('palabra-dos').value.trim();
  let mensaje = '';

  if (!palabraUno || !palabraDos) {
    mensaje = 'Debes escribir las dos palabras.';
  } else if (palabraUno.length > palabraDos.length) {
    mensaje = 'La palabra con más caracteres es: ' + palabraUno;
  } else if (palabraDos.length > palabraUno.length) {
    mensaje = 'La palabra con más caracteres es: ' + palabraDos;
  } else {
    mensaje = 'Las dos palabras tienen el mismo número de caracteres.';
  }

  alert(mensaje);
  resultado.textContent = mensaje;
});
