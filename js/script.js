document.addEventListener("DOMContentLoaded", function () {
    // === 1. CONTROL DEL BANNER DE COOKIES ===
    const banner = document.getElementById("cookie-banner");
    const btnAccept = document.getElementById("btn-accept-cookies");
    const btnReject = document.getElementById("btn-reject-cookies");

    if (banner) {
        if (!localStorage.getItem("cookies-aceptadas")) {
            banner.style.display = "block"; // Muestra el banner si es una nueva visita
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

    // === 2. INICIALIZACIÓN DEL CATÁLOGO ===
    // Al cargar la página por primera vez, aplicamos el filtro general de 'todos'
    filtrarMotores('todos');
});

// === 3. LOGICA DEL ESCAPARATE INTELIGENTE (FILTROS Y DESPLIEGUES) ===
let filtroMarcaActual = 'todos';

function filtrarMotores(marca) {
  filtroMarcaActual = marca;
  
  // 1. Actualizar las clases activas (.active) en tus botones superiores originales
  const botones = document.querySelectorAll('.btn-filtro');
  botones.forEach(btn => btn.classList.remove('active'));
  
  if (typeof event !== 'undefined' && event) {
    if (event.currentTarget) {
      event.currentTarget.classList.add('active');
    } else if (event.target) {
      const botonCercano = event.target.closest('.btn-filtro');
      if (botonCercano) botonCercano.classList.add('active');
    }
  } else {
    const btnTodos = document.querySelector('.fila-filtro-superior .btn-filtro');
    if (btnTodos) btnTodos.classList.add('active');
  }

  // 2. Filtrar las tarjetas de motores aplicando el descarte de marca
  const tarjetas = document.querySelectorAll('.motor-card');
  const panelesGama = document.querySelectorAll('.gama-desplegable-bloque');
  const botonesVerGama = document.querySelectorAll('.btn-ver-gama-card');

  tarjetas.forEach(tarjeta => {
    const marcaTarjeta = tarjeta.getAttribute('data-marca');

    if (marca === 'todos' || marcaTarjeta === marca) {
      tarjeta.classList.remove('oculto');
    } else {
      tarjeta.classList.add('oculto');
    }
  });

  // 3. Controlar la apertura y cierre automático de las gamas según la marca elegida
  panelesGama.forEach(panel => {
    const tipoPanel = panel.id.replace('gama-', '');
    
    if (marca === 'todos') {
      // Si volvemos a "Todos", replegamos los paneles inferiores automáticamente
      panel.classList.remove('abierto');
      panel.style.maxHeight = null;
      
      // Restablecemos el texto original del botón de la tarjeta
      const btnAsociado = document.querySelector(`button[onclick*="'${tipoPanel}'"]`);
      if (btnAsociado) {
  const plural = tipoPanel.endsWith('l') ? `${tipoPanel}es` : `${tipoPanel}s`;
  btnAsociado.innerText = `Ver gama ${plural}`;
}

    // Hacemos que los botones de "Ver gama" vuelvan a ser visibles de serie
      botonesVerGama.forEach(b => {
        if (b.getAttribute('onclick') && b.getAttribute('onclick').includes(tipoPanel)) {
          b.style.visibility = 'visible';
        }
      });
    } else {
      // Si eligen una marca (Nice o DEA), forzamos la apertura total del panel para mostrar el arsenal completo
      panel.classList.add('abierto');
      panel.style.maxHeight = panel.scrollHeight + "px";
      
      // Ocultamos de forma temporal los botones porque ya se está exponiendo todo el catálogo
      botonesVerGama.forEach(b => b.style.visibility = 'hidden');
    }
  });
}

// 4. FUNCIÓN INTERACTIVA DE CADA TARJETA (El clic del botón "Ver gama")
function desplegarGama(tipo, boton) {
  const panel = document.getElementById(`gama-${tipo}`);
  
  if (panel) {
    // Calculamos el plural correcto de la categoría actual
    const plural = tipo.endsWith('l') ? `${tipo}es` : `${tipo}s`;

    // Si el panel ya está abierto, lo cerramos limpiando su altura de forma estricta
    if (panel.classList.contains('abierto')) {
      panel.classList.remove('abierto');
      panel.style.maxHeight = null; // Libera la altura y el CSS lo repliega a 0 automáticamente
      boton.innerText = `Ver gama ${plural}`;
    } else {
      // Cerramos cualquier otro panel que estuviera abierto previamente por limpieza
      const panelesActivos = document.querySelectorAll('.gama-desplegable-bloque.abierto');
      panelesActivos.forEach(p => {
        p.classList.remove('abierto');
        p.style.maxHeight = null;
        
        // Buscamos el botón de la tarjeta correspondiente para restablecer su texto
        const tipoPanel = p.id.replace('gama-', '');
        const btnAsociado = document.querySelector(`button[onclick*="'${tipoPanel}'"]`);
        if (btnAsociado) {
          const pluralPanel = tipoPanel.endsWith('l') ? `${tipoPanel}es` : `${tipoPanel}s`;
          btnAsociado.innerText = `Ver gama ${pluralPanel}`;
        }
      });

      // Abrimos el panel solicitado calculando su altura exacta dinámica en base a las tarjetas visibles
      panel.classList.add('abierto');
      panel.style.maxHeight = panel.scrollHeight + "px";
      boton.innerText = `Ocultar gama ${plural}`;
    }
  }
}

// === 4. TEXTOS DINÁMICOS DEL FORMULARIO DE CONTACTO ===
function irAContacto(nombreMotor) {
    const titulo = document.getElementById('contacto-titulo');
    const subtitulo = document.getElementById('contacto-texto');

    if (titulo) {
        titulo.innerText = "Solicitar Presupuesto para Automatismo";
    }
    if (subtitulo) {
        subtitulo.innerText = `Cuéntanos más sobre tu proyecto para el motor ${nombreMotor}. Te enviaremos una valoración a medida lo antes posible.`;
    }

    const seccionContacto = document.getElementById('contacto');
    if (seccionContacto) {
        seccionContacto.scrollIntoView({ behavior: 'smooth' });
    }
}

// Restablecer los textos originales si el usuario vuelve a subir haciendo scroll
window.addEventListener('scroll', function() {
    if (window.scrollY < 400) {
        const titulo = document.getElementById('contacto-titulo');
        const subtitulo = document.getElementById('contacto-texto');

        if (titulo && titulo.innerText !== "Solicitar Asistencia Técnica") {
            titulo.innerText = "Solicitar Asistencia Técnica";
        }
        if (subtitulo && !subtitulo.innerText.includes("Déjanos tus datos y nos pondremos")) {
            subtitulo.innerText = "Déjanos tus datos y nos pondremos en contacto contigo a la mayor brevedad para solucionar cualquier incidencia en tus puertas automáticas.";
        }
    }
});
