document.addEventListener("DOMContentLoaded", function () {
    // === 1. CONTROL DEL BANNER DE COOKIES ===
    const banner = document.getElementById("cookie-banner");
    const btnAccept = document.getElementById("btn-accept-cookies");
    const btnReject = document.getElementById("btn-reject-cookies");

    if (banner) {
        // Comprobamos si el usuario ya ha tomado una decisión anteriormente
        if (!localStorage.getItem("cookies-aceptadas")) {
            banner.style.display = "block"; // Muestra el banner si es una nueva visita
        }

        // Acción al pulsar Aceptar
        if (btnAccept) {
            btnAccept.addEventListener("click", function () {
                localStorage.setItem("cookies-aceptadas", "true");
                banner.style.display = "none";
            });
        }

        // Acción al pulsar Extender/Rechazar
        if (btnReject) {
            btnReject.addEventListener("click", function () {
                localStorage.setItem("cookies-aceptadas", "false");
                banner.style.display = "none";
            });
        }
    }

    // === 2. INICIALIZACIÓN DE LOS MOTORES ===
    // Ejecutamos el filtro inicial al cargar la página para aplicar el límite de 6 motores
    filtrarMotores('todos');
});

// === 3. LOGICA DE FILTRADO Y EXPANSIÓN DE MOTORES ===
const LIMITE_INICIAL = 6; 
let filtroActual = 'todos';

function filtrarMotores(marca) {
  filtroActual = marca;
  
  // Actualizar clases activas en los botones de filtro
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

  // Filtrar tarjetas controlando el límite visual de la Opción A
  const tarjetas = document.querySelectorAll('.motor-card');
  const btnVerMas = document.getElementById('btn-ver-mas-motores');
  let contados = 0;

  tarjetas.forEach(tarjeta => {
    const marcaTarjeta = tarjeta.getAttribute('data-marca');

    if (marca === 'todos') {
      // En modo 'todos', controlamos el límite de 6 quitando o poniendo la clase oculto
      if (contados < LIMITE_INICIAL) {
        tarjeta.classList.remove('oculto');
        tarjeta.style.display = 'flex';
        contados++;
      } else {
        tarjeta.classList.add('oculto'); // Oculta estrictamente el motor 7
      }
      if (btnVerMas) btnVerMas.style.display = 'inline-block';

    } else if (marcaTarjeta === marca) {
      // Si eligen una marca (Nice o DEA), forzamos a que se muestre TODO quitando la clase oculto
      tarjeta.classList.remove('oculto');
      tarjeta.style.display = 'flex';
    } else {
      // Ocultamos los motores de la otra marca
      tarjeta.style.display = 'none';
    }
  });

  if (marca !== 'todos' && btnVerMas) {
    btnVerMas.style.display = 'none';
  }
}

function mostrarMasTodos() {
  if (filtroActual === 'todos') {
    const tarjetas = document.querySelectorAll('.motor-card');
    
    tarjetas.forEach(tarjeta => {
      // Quitamos la clase oculto de todas las tarjetas para que se revele el motor 7
      tarjeta.classList.remove('oculto');
      tarjeta.style.display = 'flex'; 
    });
    
    // Escondemos el botón al expandir el catálogo
    const btnVerMas = document.getElementById('btn-ver-mas-motores');
    if (btnVerMas) btnVerMas.style.display = 'none';
  }
}

// Inicialización automática
document.addEventListener("DOMContentLoaded", function() {
  filtrarMotores('todos');
});

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
