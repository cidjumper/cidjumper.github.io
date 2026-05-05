'use strict';

const $ = (selector) => document.querySelector(selector);

const usuarios = [
  { id: 1, nombre: 'Ana', edad: 25, email: 'ana@ejemplo.com' },
  { id: 2, nombre: 'Luis', edad: 16, email: 'luis@ejemplo.com' },
  { id: 3, nombre: 'Sara', edad: 30, email: 'sara@ejemplo.com' },
  { id: 4, nombre: 'Ana', edad: 41, email: 'ana2@ejemplo.com' }
];

class Punto {
  constructor(x, y) { this.x = x; this.y = y; }
  static distancia(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
  get coordenadas() { return `(${this.x}, ${this.y})`; }
}

class PuntoConNombre extends Punto {
  constructor(nombre, x, y) { super(x, y); this.nombre = nombre; }
  describir() { return `${this.nombre}: ${this.coordenadas}`; }
}

function dividir(a, b) {
  if (b === 0) throw new Error('No se puede dividir entre cero.');
  return a / b;
}

document.addEventListener('DOMContentLoaded', () => {
  $('#btnFundamentos').addEventListener('click', () => {
    const texto = $('#entradaNumero').value;
    const entero = parseInt(texto, 10);
    const decimal = parseFloat(texto);
    const sumaSinConvertir = 10 + texto;
    const sumaConvertida = 10 + decimal;
    $('#salidaFundamentos').textContent = [
      `Valor original: "${texto}" (${typeof texto})`,
      `parseInt: ${entero} (${typeof entero})`,
      `parseFloat: ${decimal} (${typeof decimal})`,
      `10 + texto = ${sumaSinConvertir}`,
      `10 + parseFloat(texto) = ${sumaConvertida}`,
      `decimal.toString() = "${decimal.toString()}"`
    ].join('\n');
  });

  $('#btnColecciones').addEventListener('click', () => {
    const nombres = usuarios.map(usuario => usuario.nombre);
    const nombresUnicos = new Set(nombres);
    const mapaUsuarios = new Map(usuarios.map(usuario => [usuario.id, usuario]));
    $('#salidaColecciones').innerHTML = `
      <p><strong>Nombres con map:</strong> ${nombres.join(', ')}</p>
      <p><strong>Nombres únicos con Set:</strong> ${[...nombresUnicos].join(', ')}</p>
      <p><strong>Usuario con clave 2 en Map:</strong> ${mapaUsuarios.get(2).nombre} (${mapaUsuarios.get(2).email})</p>
      <p><strong>Total de elementos en Map:</strong> ${mapaUsuarios.size}</p>`;
  });

  $('#btnFiltrar').addEventListener('click', () => {
    const mayores = usuarios.filter(usuario => usuario.edad >= 18);
    $('#salidaColecciones').innerHTML = mayores
      .map(usuario => `<p>${usuario.nombre} tiene ${usuario.edad} años y es mayor de edad.</p>`)
      .join('');
  });

  const cajaDom = $('#cajaDom');
  const listaDom = $('#listaDom');
  const contenidoInicial = cajaDom.textContent;

  $('#btnTextoDom').addEventListener('click', () => { cajaDom.textContent = 'Texto cambiado con textContent desde JavaScript.'; });
  $('#btnEstiloDom').addEventListener('click', () => {
    cajaDom.classList.toggle('activa');
    cajaDom.style.borderRadius = cajaDom.classList.contains('activa') ? '12px' : '0';
  });
  $('#btnCrearElemento').addEventListener('click', () => {
    const item = document.createElement('li');
    item.textContent = `Elemento creado a las ${new Date().toLocaleTimeString()}`;
    listaDom.appendChild(item);
  });
  $('#btnRestablecerDom').addEventListener('click', () => {
    cajaDom.textContent = contenidoInicial;
    cajaDom.className = 'caja-dom';
    cajaDom.removeAttribute('style');
    listaDom.innerHTML = '';
  });

  $('#btnGuardarStorage').addEventListener('click', () => {
    const usuario = { nombre: $('#nombreStorage').value.trim(), email: $('#emailStorage').value.trim(), fecha: new Date().toISOString() };
    localStorage.setItem('guiaUsuario', JSON.stringify(usuario));
    sessionStorage.setItem('ultimoUsuario', usuario.nombre);
    $('#salidaStorage').textContent = 'Datos guardados en localStorage y sessionStorage.';
  });

  $('#btnLeerStorage').addEventListener('click', () => {
    const guardado = localStorage.getItem('guiaUsuario');
    const sesion = sessionStorage.getItem('ultimoUsuario');
    if (guardado === null) { $('#salidaStorage').textContent = 'No hay datos guardados.'; return; }
    const usuario = JSON.parse(guardado);
    $('#salidaStorage').textContent = JSON.stringify({ localStorage: usuario, sessionStorage: sesion }, null, 2);
  });

  $('#btnLimpiarStorage').addEventListener('click', () => {
    localStorage.removeItem('guiaUsuario');
    sessionStorage.removeItem('ultimoUsuario');
    $('#salidaStorage').textContent = 'Datos eliminados.';
  });

  $('#btnPooErrores').addEventListener('click', () => {
    const p1 = new PuntoConNombre('A', 5, 5);
    const p2 = new PuntoConNombre('B', 10, 10);
    const a = Number($('#dividendo').value);
    const b = Number($('#divisor').value);
    try {
      const cociente = dividir(a, b);
      $('#salidaPooErrores').textContent = `${p1.describir()}\n${p2.describir()}\nDistancia: ${Punto.distancia(p1, p2).toFixed(2)}\nDivisión: ${cociente}`;
    } catch (error) {
      $('#salidaPooErrores').textContent = `${p1.describir()}\n${p2.describir()}\nDistancia: ${Punto.distancia(p1, p2).toFixed(2)}\nError capturado: ${error.name} - ${error.message}`;
    } finally {
      console.log('Ejemplo de POO y errores ejecutado.');
    }
  });
});
