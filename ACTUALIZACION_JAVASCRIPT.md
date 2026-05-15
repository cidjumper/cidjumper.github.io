# Actualización JavaScript sin internet

Cambios aplicados tomando como referencia el PDF `javascript.pdf`:

- Se ha añadido `actividades-javascript/guia-javascript/`, una guía práctica offline con ejemplos interactivos de variables, constantes, tipos, conversiones, arrays, objetos, Set, Map, `map`, `filter`, DOM, eventos, LocalStorage, SessionStorage, JSON, clases, herencia, métodos estáticos y `try...catch`.
- Se han revisado los scripts de `actividades-javascript` para usar `let` y `const`, funciones flecha cuando encaja, `addEventListener`, `textContent` frente a `innerHTML` cuando no hace falta HTML, creación de nodos con `createElement`, validaciones y manejo básico de errores.
- Se ha quitado la dependencia de Google Fonts dentro de las páginas de actividades JavaScript para que funcionen mejor sin conexión.
- Se ha añadido `defer` a las cargas de `script.js` para evitar problemas de acceso al DOM antes de que el HTML esté formado.
- Se ha mejorado la actividad de agenda con `Map`, persistencia en `localStorage` y conversión mediante `JSON.stringify` / `JSON.parse`.
- Se ha mejorado el juego del tesoro usando matriz, constantes, `dataset`, eventos y reinicio limpio.
- Se ha validado la sintaxis de los archivos `.js` con `node --check`.


## Actualización de Parte 3 · Actividades 6 a 9

- Se ha corregido el estilo de las actividades 6, 7, 8 y 9 para que usen la misma estructura visual que el resto de actividades de la Parte 3.
- Todas las actividades de la Parte 3 ahora usan `actividades-javascript/comun.css` como hoja común.
- Se han eliminado los `style.css` vacíos de la Parte 3.
- Se han eliminado los `estilos.css` duplicados de cada actividad de la Parte 3 porque repetían exactamente el contenido de `comun.css`.
- Se ha eliminado el `script.js` vacío de `actividades-javascript/` y su referencia en el índice, porque no hacía nada.
- Se mantienen los JavaScript necesarios de cada actividad, usando `defer` y `addEventListener` en las actividades 6 a 9.

- Limpieza adicional: se han eliminado hojas CSS y scripts vacíos o no enlazados en el proyecto para dejar solo los archivos necesarios.

Archivos eliminados por no ser necesarios:
- `actividades-javascript/bombilla/style.css`
- `actividades-javascript/parte1-dom/script.js`
- `actividades-javascript/parte1-dom/style.css`
- `actividades-javascript/parte2-actividad2/style.css`
- `actividades-javascript/parte2-actividad3/style.css`
- `actividades-javascript/parte2-actividad4/style.css`
- `actividades-javascript/parte2-actividad5/style.css`
- `actividades-javascript/parte2-actividad6/style.css`
- `horario/style.css`
- `reto/reto1/estilo.css`
- `script.js`

- Se ha corregido el nombre del archivo `restaurante/reseña.html` para que coincida con el enlace existente.

## Boletín 6 - Local Storage
- Añadida nueva actividad `actividades-javascript/boletin6-localstorage/`.
- Añadida al final del menú principal de JavaScript.
- Incluye tabla de recetas con ID, nombre e ingredientes.
- Incluye dos desplegables con 5 colores para filas impares y 5 colores para filas pares.
- Los colores cambian automáticamente al seleccionar una opción.
- La selección queda guardada con `localStorage` y se recupera al volver a abrir la actividad.

## Corrección de menú
- Añadido **Boletín 6** también al desplegable principal de **JavaScript** en `index.html`, al final del menú, para que sea visible desde la página de inicio.
