const tituloPrincipal = document.getElementById('titulo-principal');
const botonCambiarTitulo = document.getElementById('boton-cambiar-titulo');
const resultado = document.getElementById('resultado');

botonCambiarTitulo.addEventListener('click', function () {
  tituloPrincipal.textContent = 'DOM Manipulado';
  tituloPrincipal.style.color = 'red';
  tituloPrincipal.classList.add('titulo-activo');
  resultado.innerHTML = 'El h1 ahora tiene el texto <strong>DOM Manipulado</strong>, color rojo y la clase <strong>titulo-activo</strong>.';
});
