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
  
  // Declaramos la variable
  let filtroMarcaActual = 'todos';
  
  // Llamamos a la función inicial
  filtrarMotores('todos');
});

// Definimos la función completa
function filtrarMotores(marca) {
  filtroMarcaActual = marca;
  const marcaBuscada = marca.toLowerCase().trim();
  
// Marcar el botón activo
  const botones = document.querySelectorAll('.btn-filtro');
  botones.forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('onclick') && btn.getAttribute('onclick').includes(`'${marcaBuscada}'`)) {
      btn.classList.add('active');
    }
  });

  // Ocultar las 4 portadas al filtrar por marca 
  const gridPortadas = document.querySelector('.escaparate-wrapper > .motores-grid-cuatro');
  if (gridPortadas) {
    gridPortadas.style.display = (marca === 'todos') ? '' : 'none';
  }

  // Ocultar o mostrar cada tarjeta según su atributo data-marca
  const tarjetas = document.querySelectorAll('.motor-card');
  tarjetas.forEach(tarjeta => {
    const marcaTarjeta = (tarjeta.getAttribute('data-marca') || '').toLowerCase().trim();
    if (marcaBuscada === 'todos' || marcaTarjeta === marcaBuscada ) {
      tarjeta.style.display = '';
      tarjeta.classList.remove('oculto');
    } else {
      tarjeta.style.display = 'none';
      tarjeta.classList.add('oculto');
    }
  });

   // Abrir las categorías que tengan motores de esa marca y ocultar las vacías
  const panelesGama = document.querySelectorAll('.gama-desplegable-bloque');
  const botonesVerGama = document.querySelectorAll('.btn-ver-gama-card');

  panelesGama.forEach(panel => {
    const tipoPanel = panel.id.replace('gama-', '');
    
    if (marcaBuscada === 'todos') {
      panel.style.display = '';
      panel.classList.remove('abierto');
      panel.style.maxHeight = null;
      
      const btnAsociado = document.querySelector(`button[onclick*="'${tipoPanel}'"]`);
      if (btnAsociado) {
        const plural = tipoPanel.endsWith('l') ? `${tipoPanel}es` : `${tipoPanel}s`;
        btnAsociado.innerText = `Ver gama ${plural}`;
      }
      botonesVerGama.forEach(b => b.style.visibility = 'visible');
    } else {
      const tarjetasVisibles = panel.querySelectorAll('.motor-card:not(.oculto)');
      if (tarjetasVisibles.length > 0) {
        panel.style.display = '';
        panel.classList.add('abierto');
        panel.style.maxHeight = panel.scrollHeight + "px";
      } else {
        panel.style.display = 'none';
        panel.classList.remove('abierto');
        panel.style.maxHeight = null;
      }
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
