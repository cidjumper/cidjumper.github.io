const botonContarCaracteres = document.getElementById('boton-contar-caracteres');
const resultado = document.getElementById('resultado');

botonContarCaracteres.addEventListener('click', function () {
  const cadenaTexto = document.getElementById('cadena-texto').value;
  resultado.textContent = 'La cadena tiene ' + cadenaTexto.length + ' caracteres.';
});
