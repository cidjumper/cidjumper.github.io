'use strict';

const recetas = [
  { id: 1, nombreReceta: 'Salmorejo', ingredientes: ['tomate', 'aceite', 'pan'] },
  { id: 2, nombreReceta: 'Gachas', ingredientes: ['harina', 'agua', 'azúcar'] },
  { id: 3, nombreReceta: 'Migas', ingredientes: ['pan', 'ajo', 'aceite'] }
];

function mostrarRecetas() {
  const filas = recetas.map(receta => `
    <tr>
      <td>${receta.id}</td>
      <td>${receta.nombreReceta}</td>
      <td>${receta.ingredientes.join(', ')}</td>
    </tr>`).join('');

  document.getElementById('resultado').innerHTML = `
    <table>
      <thead><tr><th>ID</th><th>Nombre receta</th><th>Ingredientes</th></tr></thead>
      <tbody>${filas}</tbody>
    </table>`;
}
