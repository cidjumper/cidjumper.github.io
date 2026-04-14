document.addEventListener('DOMContentLoaded', function () {
  const nav = document.querySelector('.nav-principal');
  const botonesPrincipales = document.querySelectorAll('.menu-item > .menu-boton');
  const itemsPrincipales = document.querySelectorAll('.menu-item.desplegable');
  const botonesInternos = document.querySelectorAll('.submenu-item > .submenu-boton');
  let temporizadorCierre = null;

  function limpiarTemporizador() {
    if (temporizadorCierre) {
      clearTimeout(temporizadorCierre);
      temporizadorCierre = null;
    }
  }

  function programarCierre() {
    limpiarTemporizador();
    temporizadorCierre = setTimeout(cerrarTodo, 120);
  }

  function cerrarSubmenusInternos(contenedor) {
    contenedor.querySelectorAll('.submenu-item.abierto').forEach(function (item) {
      item.classList.remove('abierto');
      const boton = item.querySelector(':scope > .submenu-boton');
      if (boton) {
        boton.setAttribute('aria-expanded', 'false');
      }
    });
  }

  function cerrarItemPrincipal(item) {
    item.classList.remove('abierto');
    const boton = item.querySelector(':scope > .menu-boton');
    if (boton) {
      boton.setAttribute('aria-expanded', 'false');
    }
    cerrarSubmenusInternos(item);
  }

  function cerrarTodo() {
    document.querySelectorAll('.menu-item.abierto').forEach(function (item) {
      cerrarItemPrincipal(item);
    });
  }

  function abrirPrincipal(item) {
    document.querySelectorAll('.menu-item.abierto').forEach(function (otro) {
      if (otro !== item) {
        cerrarItemPrincipal(otro);
      }
    });

    item.classList.add('abierto');
    const boton = item.querySelector(':scope > .menu-boton');
    if (boton) {
      boton.setAttribute('aria-expanded', 'true');
    }
  }

  botonesPrincipales.forEach(function (boton) {
    boton.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      limpiarTemporizador();
      const item = boton.closest('.menu-item');
      const estabaAbierto = item.classList.contains('abierto');

      if (estabaAbierto) {
        cerrarItemPrincipal(item);
      } else {
        abrirPrincipal(item);
      }
    });

    boton.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        boton.click();
      }
      if (e.key === 'Escape') {
        cerrarTodo();
        boton.focus();
      }
    });
  });

  itemsPrincipales.forEach(function (item) {
    item.addEventListener('mouseenter', function () {
      limpiarTemporizador();
      const hayOtroAbierto = document.querySelector('.menu-item.abierto');
      if (hayOtroAbierto && hayOtroAbierto !== item) {
        abrirPrincipal(item);
      }
    });
  });

  botonesInternos.forEach(function (boton) {
    boton.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      limpiarTemporizador();
      const item = boton.closest('.submenu-item');
      const contenedor = item.parentElement;
      const estabaAbierto = item.classList.contains('abierto');

      contenedor.querySelectorAll(':scope > .submenu-item.abierto').forEach(function (otro) {
        if (otro !== item) {
          otro.classList.remove('abierto');
          const otroBoton = otro.querySelector(':scope > .submenu-boton');
          if (otroBoton) {
            otroBoton.setAttribute('aria-expanded', 'false');
          }
        }
      });

      item.classList.toggle('abierto', !estabaAbierto);
      boton.setAttribute('aria-expanded', String(!estabaAbierto));
    });

    boton.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        boton.click();
      }
      if (e.key === 'Escape') {
        const item = boton.closest('.submenu-item');
        item.classList.remove('abierto');
        boton.setAttribute('aria-expanded', 'false');
        boton.focus();
      }
    });
  });

  document.querySelectorAll('.submenu').forEach(function (submenu) {
    submenu.addEventListener('click', function (e) {
      e.stopPropagation();
    });
  });

  if (nav) {
    nav.addEventListener('mouseenter', limpiarTemporizador);
    nav.addEventListener('mouseleave', function () {
      programarCierre();
    });
  }

  document.addEventListener('click', function (e) {
    if (!e.target.closest('.nav-principal')) {
      cerrarTodo();
    }
  });

  document.addEventListener('focusin', function (e) {
    if (!e.target.closest('.nav-principal')) {
      cerrarTodo();
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      cerrarTodo();
    }
  });
});
