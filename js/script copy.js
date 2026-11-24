// === 0. BASE DE DATOS DE MOTORES ===
const catalogoMotores = [
  // --- SECCIONALES ---
  {
    tipo: "seccional",
    marca: "dea",
    nombre: "DEA Space",
    imagen: "img/Space.png",
    etiquetaUso: "Residencial Silencioso",
    specs: [
      { icono: "⚡", label: "Fuerza", valor: "600N / 800N" },
      { icono: "📐", label: "Superficie máx.", valor: "14 m²" },
      { icono: "🔌", label: "Alimentación", valor: "24 Vdc" },
      { icono: "💡", label: "Extra", valor: "Luz LED integrada" }
    ]
  },
  {
    tipo: "seccional",
    marca: "dea",
    nombre: "DEA TEO 700",
    imagen: "img/TEO700.png",
    etiquetaUso: "Residencial",
    specs: [
      { icono: "⚡", label: "Fuerza", valor: "700 N" },
      { icono: "📐", label: "Superficie máx.", valor: "10 m²" },
      { icono: "🔌", label: "Alimentación", valor: "24 Vdc" },
      { icono: "🏠", label: "Uso", valor: "Residencial" }
    ]
  },
  {
    tipo: "seccional",
    marca: "dea",
    nombre: "DEA Space XXL",
    imagen: "img/Space.png",
    etiquetaUso: "Intensivo / Rápido",
    specs: [
      { icono: "⚡", label: "Fuerza", valor: "1200 N" },
      { icono: "📐", label: "Superficie máx.", valor: "18 m²" },
      { icono: "🔌", label: "Alimentación", valor: "24 Vdc" },
      { icono: "🔄", label: "Uso", valor: "Intensivo / Rápido" }
    ]
  },
  {
    tipo: "seccional",
    marca: "nice",
    nombre: "Nice Spido 600 / 1000",
    imagen: "img/spido600.png",
    etiquetaUso: "Ultracompacto",
    specs: [
      { icono: "⚡", label: "Fuerza", valor: "600N / 1000N" },
      { icono: "📏", label: "Altura cabezal", valor: "90 mm" },
      { icono: "🔌", label: "Alimentación", valor: "24 Vdc" },
      { icono: "🔗", label: "Sistema", valor: "BUS T4" }
    ]
  },
  {
    tipo: "seccional",
    marca: "nice",
    nombre: "Nice Spider 800 / 1200",
    imagen: "img/spider800.png",
    etiquetaUso: "Conectado / Intensivo",
    specs: [
      { icono: "⚡", label: "Fuerza", valor: "800N / 1200N" },
      { icono: "📶", label: "Conectividad", valor: "Wi-Fi integrado" },
      { icono: "💡", label: "Iluminación", valor: "LED Eye Check" },
      { icono: "🔄", label: "Uso", valor: "Intensivo" }
    ]
  },

  // --- ABATIBLES ---
  {
    tipo: "abatible",
    marca: "dea",
    nombre: "DEA Look 320 / 520",
    imagen: "img/DeaLook.png",
    etiquetaUso: "Residencial",
    specs: [
      { icono: "📏", label: "Hoja máx.", valor: "3,0 m / 5,0 m" },
      { icono: "⚙️", label: "Tecnología", valor: "Electromecánico" },
      { icono: "🔌", label: "Alimentación", valor: "24 Vdc / 230 V" },
      { icono: "🏠", label: "Uso", valor: "Residencial" }
    ]
  },
  {
    tipo: "abatible",
    marca: "dea",
    nombre: "DEA Oli (604 a 607)",
    imagen: "img/DeaOli604.png",
    etiquetaUso: "Comunitario / Intensivo",
    specs: [
      { icono: "📏", label: "Hoja máx.", valor: "Hasta 6,0 m" },
      { icono: "💧", label: "Tecnología", valor: "Hidráulico (Aceite)" },
      { icono: "🔒", label: "Bloqueo", valor: "Configurable" },
      { icono: "🔄", label: "Uso", valor: "Comunitario / Intensivo" }
    ]
  },
  {
    tipo: "abatible",
    marca: "nice",
    nombre: "Nice Wingo 3524",
    imagen: "img/Wingo 3524.png",
    etiquetaUso: "Residencial",
    specs: [
      { icono: "📏", label: "Hoja máx.", valor: "Hasta 3,5 m" },
      { icono: "🔌", label: "Alimentación", valor: "24 Vdc" },
      { icono: "🔑", label: "Desbloqueo", valor: "Llave personalizada" },
      { icono: "🏠", label: "Uso", valor: "Residencial" }
    ]
  },
  {
    tipo: "abatible",
    marca: "nice",
    nombre: "Nice Wingo 2024",
    imagen: "img/Wingo 2024.png",
    etiquetaUso: "Residencial",
    specs: [
      { icono: "📏", label: "Hoja máx.", valor: "Hasta 2,0 m" },
      { icono: "🔌", label: "Alimentación", valor: "24 Vdc" },
      { icono: "🔑", label: "Desbloqueo", valor: "Llave personalizada" },
      { icono: "🏠", label: "Uso", valor: "Residencial" }
    ]
  },
  {
    tipo: "abatible",
    marca: "nice",
    nombre: "Nice Toona 5024 / 5624",
    imagen: "img/Toona5024.png",
    etiquetaUso: "Intensivo / Comercial",
    specs: [
      { icono: "📏", label: "Hoja máx.", valor: "Hasta 5,0 m" },
      { icono: "🏗️", label: "Carcasa", valor: "Aluminio (820 mm)" },
      { icono: "🔌", label: "Alimentación", valor: "24 Vdc" },
      { icono: "🔄", label: "Uso", valor: "Intensivo / Comercial" }
    ]
  },
  {
    tipo: "abatible",
    marca: "nice",
    nombre: "Nice Toona 7024",
    imagen: "img/Toona7024.png",
    etiquetaUso: "Industrial Pesado",
    specs: [
      { icono: "📏", label: "Hoja máx.", valor: "Hasta 7,0 m" },
      { icono: "🏗️", label: "Carcasa", valor: "Reforzada (965 mm)" },
      { icono: "🔌", label: "Alimentación", valor: "24 Vdc" },
      { icono: "🏭", label: "Uso", valor: "Industrial Pesado" }
    ]
  },

  // --- CORREDERAS ---
  {
    tipo: "corredera",
    marca: "dea",
    nombre: "DEA Livi 600",
    imagen: "img/DeaLivi.png",
    etiquetaUso: "Residencial / Comunitario",
    specs: [
      { icono: "⚖️", label: "Peso máx.", valor: "Hasta 600 kg" },
      { icono: "🔌", label: "Alimentación", valor: "24 Vdc / 230 Vac" },
      { icono: "🛡️", label: "Seguridad", valor: "Encoder integrado" },
      { icono: "🏠", label: "Uso", valor: "Residencial" }
    ]
  },
// --- CORREDERAS ---
  {
    tipo: "corredera",
    marca: "dea",
    nombre: "DEA Livi 230 / 400 / 900",
    imagen: "img/DeaLivi.png",
    etiquetaUso: "Residencial",
    specs: [
      { icono: "⚖️", label: "Peso máx.", valor: "400 kg a 900 kg" },
      { icono: "🛡️", label: "Control", valor: "Encoder integrado" },
      { icono: "📶", label: "Conectividad", valor: "Sistema NETLINK" },
      { icono: "🏠", label: "Uso", valor: "Residencial" }
    ]
  },
  {
    tipo: "corredera",
    marca: "dea",
    nombre: "DEA Rev 1400",
    imagen: "img/DeaRev1400.png",
    etiquetaUso: "Comunitario / Intensivo",
    specs: [
      { icono: "⚖️", label: "Peso máx.", valor: "Hasta 1.400 kg" },
      { icono: "❄️", label: "Refrigeración", valor: "Motor ventilado" },
      { icono: "🔌", label: "Alimentación", valor: "230 Vac / 24 Vdc" },
      { icono: "🔄", label: "Uso", valor: "Comunitario / Intensivo" }
    ]
  },
  {
    tipo: "corredera",
    marca: "dea",
    nombre: "DEA Gulliver",
    imagen: "img/DeaGulliver.png",
    etiquetaUso: "Industrial Severo",
    specs: [
      { icono: "⚖️", label: "Peso máx.", valor: "Hasta 3.000 kg" },
      { icono: "🏗️", label: "Chasis", valor: "Metálico reforzado" },
      { icono: "💧", label: "Lubricación", valor: "Baño de aceite" },
      { icono: "🏭", label: "Uso", valor: "Industrial Severo" }
    ]
  },
  {
    tipo: "corredera",
    marca: "nice",
    nombre: "Nice Road 400",
    imagen: "img/NiceRoad.png",
    etiquetaUso: "Residencial",
    specs: [
      { icono: "⚖️", label: "Peso máx.", valor: "400 kg" },
      { icono: "🔌", label: "Alimentación", valor: "24 Vdc" },
      { icono: "📐", label: "Diseño", valor: "Compacto y ligero" },
      { icono: "🏠", label: "Uso", valor: "Residencial" }
    ]
  },
  {
    tipo: "corredera",
    marca: "nice",
    nombre: "Nice Robus 400",
    imagen: "img/Robus400.png",
    etiquetaUso: "Residencial Intensivo",
    specs: [
      { icono: "⚖️", label: "Peso máx.", valor: "Hasta 400 kg" },
      { icono: "🔗", label: "Sistema", valor: "Tecnología BlueBUS" },
      { icono: "🔌", label: "Alimentación", valor: "24 Vdc" },
      { icono: "🔄", label: "Uso", valor: "Residencial Intensivo" }
    ]
  },
  {
    tipo: "corredera",
    marca: "nice",
    nombre: "Nice Robus 600 / 1000",
    imagen: "img/Robus600.png",
    etiquetaUso: "Comunitario / Comercial",
    specs: [
      { icono: "⚖️", label: "Peso máx.", valor: "600 kg / 1.000 kg" },
      { icono: "🔗", label: "Sistema", valor: "Tecnología BlueBUS" },
      { icono: "🌡️", label: "Sensor", valor: "Control de temperatura" },
      { icono: "🏢", label: "Uso", valor: "Comunitario / Comercial" }
    ]
  },
  {
    tipo: "corredera",
    marca: "nice",
    nombre: "Nice Slight 400",
    imagen: "img/Slight400.png",
    etiquetaUso: "Espacios reducidos",
    specs: [
      { icono: "⚖️", label: "Peso máx.", valor: "Hasta 400 kg" },
      { icono: "📏", label: "Diseño", valor: "Columna ultra estrecha" },
      { icono: "💡", label: "Extra", valor: "Luz LED integrada" },
      { icono: "🏠", label: "Uso", valor: "Espacios reducidos" }
    ]
  },

  // --- ENROLLABLES ---
    // --- ENROLLABLES ---
  {
    tipo: "enrollable",
    marca: "nice",
    nombre: "Nice / ACM K500",
    imagen: "img/acm_k500.png",
    etiquetaUso: "Locales y Comercios",
    specs: [
      { icono: "⚖️", label: "Peso máx.", valor: "Hasta 170 kg" },
      { icono: "⚙️", label: "Eje / Polea", valor: "Ø 48-60 / Ø 200-220" },
      { icono: "🎛️", label: "Regulación", valor: "Finales electromecánicos" },
      { icono: "🏪", label: "Uso", valor: "Locales y Comercios" }
    ]
  },
  {
    tipo: "enrollable",
    marca: "nice",
    nombre: "Nice / ACM K500 c/Freno",
    imagen: "img/acm500cfreno.png",
    etiquetaUso: "Locales y Comercios",
    specs: [
      { icono: "⚖️", label: "Peso máx.", valor: "Hasta 170 kg" },
      { icono: "🛑", label: "Seguridad", valor: "Electrofreno integrado" },
      { icono: "⚙️", label: "Eje / Polea", valor: "Ø 48-60 / Ø 200-220" },
      { icono: "🏪", label: "Uso", valor: "Locales y Comercios" }
    ]
  },
  {
    tipo: "enrollable",
    marca: "gamar",
    nombre: "Motores GAMAR",
    imagen: "img/GAMAR_logo.png",
    etiquetaUso: "Próximamente",
    textoBoton: "Consultar Disponibilidad",
    consultaContacto: "Consulta gama GAMAR",
    specs: [
      { icono: "🔄", label: "Estado", valor: "Catálogo en actualización" },
      { icono: "📅", label: "Disponibilidad", valor: "Próximamente" },
      { icono: "🏪", label: "Aplicación", valor: "Persianas enrollables" },
      { icono: "🛠️", label: "Soporte", valor: "Instalación y repuestos" }
    ]
  }
];

document.addEventListener("DOMContentLoaded", function () {
  // === 1. CONTROL DEL BANNER DE COOKIES ===
  const banner = document.getElementById("cookie-banner");
  const btnAccept = document.getElementById("btn-accept-cookies");
  const btnReject = document.getElementById("btn-reject-cookies");

  if (banner) {
    if (!localStorage.getItem("cookies-aceptadas")) {
      banner.style.display = "block";
    }
    if (btnAccept) {
      btnAccept.addEventListener("click", function () {
        localStorage.setItem("cookies-aceptadas", "true");
        banner.style.display = "none";
      });
    }
    if (btnReject) {
      btnReject.addEventListener("click", function () {
        localStorage.setItem("cookies-aceptadas", "false");
        banner.style.display = "none";
      });
    }
  }

  // === 2. GENERAR LAS TARJETAS HORIZONTALES DESDE EL ARRAY ===
  construirCatalogoDesdeArray();
  filtrarMotores('todos');
});

function construirCatalogoDesdeArray() {
  const tipos = ['seccional', 'abatible', 'corredera', 'enrollable'];

  tipos.forEach(function (tipo) {
    const panel = document.getElementById('gama-' + tipo);
    if (!panel) return;

    const contenedorLista = panel.querySelector('.motores-lista-horizontal');
    if (!contenedorLista) return;

    const motoresDeEsteTipo = catalogoMotores.filter(function (m) {
      return m.tipo === tipo;
    });

    contenedorLista.innerHTML = motoresDeEsteTipo.map(function (motor) {
      let logoSrc = "img/Nice-logo.png";
      if (motor.marca === "dea") logoSrc = "img/Dea-logo.png";
      if (motor.marca === "gamar") logoSrc = "img/GAMAR_logo.png";

      const textoBoton = motor.textoBoton || "Solicitar Presupuesto";
      const textoContacto = motor.consultaContacto || motor.nombre;

      const specsHTML = motor.specs.map(function (s) {
        return '<div class="spec-pill">' +
          '<div class="icono">' + s.icono + '</div>' +
          '<div class="datos">' +
            '<span>' + s.label + '</span>' +
            '<strong>' + s.valor + '</strong>' +
          '</div>' +
        '</div>';
      }).join('');

      return '<div class="card-ficha-horizontal" data-marca="' + motor.marca + '">' +
        '<div class="ficha-media">' +
          '<img src="' + motor.imagen + '" alt="' + motor.nombre + '" class="producto-img">' +
        '</div>' +
        '<div class="ficha-centro">' +
          '<div class="ficha-header-linea">' +
            '<img src="' + logoSrc + '" alt="' + motor.marca + '" class="logo-marca-inline">' +
            '<h3>' + motor.nombre + '</h3>' +
            '<span class="badge-uso">' + motor.etiquetaUso + '</span>' +
          '</div>' +
          '<div class="ficha-specs-grid">' + specsHTML + '</div>' +
        '</div>' +
        '<div class="ficha-accion">' +
          '<button class="btn-comprar" onclick="irAContacto(\'' + textoContacto + '\')">' + textoBoton + '</button>' +
        '</div>' +
      '</div>';
    }).join('');
  });
}

let filtroMarcaActual = 'todos';

// === 3. FUNCIÓN DE FILTRADO SUPERIOR (DEA / NICE / TODOS) ===
function filtrarMotores(marca) {
  filtroMarcaActual = marca;
  const marcaBuscada = marca.toLowerCase().trim();

  const botones = document.querySelectorAll('.btn-filtro');
  botones.forEach(function (btn) {
    btn.classList.remove('active');
    const atributoOnclick = btn.getAttribute('onclick');
    if (atributoOnclick && atributoOnclick.indexOf("'" + marcaBuscada + "'") !== -1) {
      btn.classList.add('active');
    }
  });

  const gridPortadas = document.querySelector('.escaparate-wrapper > .motores-grid-cuatro');
  if (gridPortadas) {
    gridPortadas.style.display = (marcaBuscada === 'todos') ? '' : 'none';
  }

  const tarjetasHorizontales = document.querySelectorAll('.card-ficha-horizontal');
  tarjetasHorizontales.forEach(function (tarjeta) {
    const marcaTarjeta = (tarjeta.getAttribute('data-marca') || '').toLowerCase().trim();
    if (marcaBuscada === 'todos' || marcaTarjeta === marcaBuscada) {
      tarjeta.style.display = '';
      tarjeta.classList.remove('oculto');
    } else {
      tarjeta.style.display = 'none';
      tarjeta.classList.add('oculto');
    }
  });

  const panelesGama = document.querySelectorAll('.gama-desplegable-bloque');
  const botonesVerGama = document.querySelectorAll('.btn-ver-gama-card');

  panelesGama.forEach(function (panel) {
    const tipoPanel = panel.id.replace('gama-', '');

    if (marcaBuscada === 'todos') {
      panel.style.display = 'none';
      panel.classList.remove('abierto');

      const btnAsociado = document.querySelector('button[onclick*="\'' + tipoPanel + '\'"]');
      if (btnAsociado) {
        const plural = tipoPanel.endsWith('l') ? tipoPanel + 'es' : tipoPanel + 's';
        btnAsociado.innerText = 'Ver gama ' + plural;
      }
      botonesVerGama.forEach(function (b) { b.style.visibility = 'visible'; });
    } else {
      const tarjetasVisibles = panel.querySelectorAll('.card-ficha-horizontal:not(.oculto)');
      if (tarjetasVisibles.length > 0) {
        panel.style.display = 'block';
        panel.classList.add('abierto');
      } else {
        panel.style.display = 'none';
        panel.classList.remove('abierto');
      }
botonesVerGama.forEach(function (b) { b.style.visibility = 'hidden'; });
}
});
}
// === 4. FUNCIÓN INTERACTIVA DE CADA TARJETA (Clic en "Ver gama...") ===
function desplegarGama(tipo, boton) {
const panel = document.getElementById('gama-' + tipo);
if (panel) {
const plural = tipo.endsWith('l') ? tipo + 'es' : tipo + 's';
if (panel.classList.contains('abierto')) {
panel.classList.remove('abierto');
panel.style.display = 'none';
boton.innerText = 'Ver gama ' + plural;
} else {
const panelesActivos = document.querySelectorAll('.gama-desplegable-bloque.abierto');
panelesActivos.forEach(function (p) {
p.classList.remove('abierto');
p.style.display = 'none';
const tipoPanel = p.id.replace('gama-', '');
const btnAsociado = document.querySelector("button[onclick*='" + tipoPanel + "']");

if (btnAsociado) {
const pluralPanel = tipoPanel.endsWith('l') ? tipoPanel + 'es' : tipoPanel + 's';
btnAsociado.innerText = 'Ver gama ' + pluralPanel;
}
});
panel.style.display = 'block';
panel.classList.add('abierto');
boton.innerText = 'Ocultar gama ' + plural;
panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}
}
}
// === 5. TEXTOS DINÁMICOS DEL FORMULARIO DE CONTACTO ===
function irAContacto(nombreMotor) {
const titulo = document.getElementById('contacto-titulo');
const subtitulo = document.getElementById('contacto-texto');
if (titulo) {
titulo.innerText = "Solicitar Presupuesto para Automatismo";
}
if (subtitulo) {
subtitulo.innerHTML = "Has seleccionado el motor <strong>" + nombreMotor + "</strong>. Cuéntanos brevemente cómo es tu puerta y te enviaremos un presupuesto a medida sin compromiso.";
}
const seccionContacto = document.getElementById('contacto');
if (seccionContacto) {
seccionContacto.scrollIntoView({ behavior: 'smooth' });
}
}
window.addEventListener('scroll', function () {
if (window.scrollY < 400) {
const titulo = document.getElementById('contacto-titulo');
const subtitulo = document.getElementById('contacto-texto');
if (titulo && titulo.innerText !== "Solicitar Asistencia Técnica") {
titulo.innerText = "Solicitar Asistencia Técnica";
}
if (subtitulo && subtitulo.innerText.indexOf("Déjanos tus datos y nos pondremos") === -1) {
subtitulo.innerText = "Déjanos tus datos y nos pondremos en contacto contigo a la mayor brevedad para solucionar cualquier incidencia en tus puertas automáticas.";
}
}
});