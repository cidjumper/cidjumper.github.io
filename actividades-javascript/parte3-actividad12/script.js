const recetas = [
    {id: 1, nombrereceta: "Salmorejo", ingredientes: "Tomate, aceite y pan"},
    {id: 2, nombrereceta: "Gachas", ingredientes: "Harina, agua y azucar"},
    {id: 3, nombrereceta: "Migas", ingredientes: "Pan, ajo y aceite"}
];

function mostrarRecetas() {
    let tabla = "<table><tr><th>ID</th><th>Nombre Receta</th><th>Ingredientes</th></tr>";

    for (let i = 0; i < recetas.length; i++) {
        tabla = tabla + "<tr><td>" + recetas[i].id + "</td><td>" + recetas[i].nombrereceta + "</td><td>" + recetas[i].ingredientes + "</td></tr>";
    }

    tabla = tabla + "</table>";
    document.getElementById("resultado").innerHTML = tabla;
}
