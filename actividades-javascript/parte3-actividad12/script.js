const recetas = [
  { id: 1, nombreReceta: 'Salmorejo', ingredientes: 'Tomate, aceite y pan' },
  { id: 2, nombreReceta: 'Gachas', ingredientes: 'Harina, agua y azúcar' },
  { id: 3, nombreReceta: 'Migas', ingredientes: 'Pan, ajos y aceite' }
];

const botonMostrarRecetas = document.getElementById('boton-mostrar-recetas');
const resultado = document.getElementById('resultado');

botonMostrarRecetas.addEventListener('click', function () {
  let tabla = '<table class="tabla-retro">';
  tabla += '<tr><th>ID</th><th>Nombre receta</th><th>Ingredientes</th></tr>';

  recetas.forEach(function (receta) {
    tabla += '<tr>';
    tabla += '<td>' + receta.id + '</td>';
    tabla += '<td>' + receta.nombreReceta + '</td>';
    tabla += '<td>' + receta.ingredientes + '</td>';
    tabla += '</tr>';
  });

  tabla += '</table>';
  resultado.innerHTML = tabla;
});
