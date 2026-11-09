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

let marcaSeleccionada = 'todos';
let tipoSeleccionado = ''; // Nace vacío para que ningún motor se abra al principio

function filtrarMarca(marca) {
  marcaSeleccionada = marca;
  
  // Iluminar botón de marca seleccionado
  const botones = document.querySelectorAll('.btn-filtro-marca');
  botones.forEach(btn => btn.classList.remove('active'));
  if (event && event.currentTarget) event.currentTarget.classList.add('active');
  
  aplicarFiltrosCatalogo();
}

function filtrarTipo(tipo) {
  tipoSeleccionado = tipo;
  
  // Iluminar botón de tipo seleccionado
  const botones = document.querySelectorAll('.btn-filtro-tipo');
  botones.forEach(btn => btn.classList.remove('active'));
  if (event && event.currentTarget) event.currentTarget.classList.add('active');
  
  aplicarFiltrosCatalogo();
}

function aplicarFiltrosCatalogo() {
  const tarjetas = document.querySelectorAll('.motor-card');

  tarjetas.forEach(tarjeta => {
    // Si el usuario aún no ha pulsado en ninguna categoría (tipo), todo va oculto
    if (tipoSeleccionado === '') {
      tarjeta.classList.add('oculto');
      tarjeta.style.display = 'none';
      return;
    }

    const marcaTarjeta = tarjeta.getAttribute('data-marca');
    const tipoTarjeta = tarjeta.getAttribute('data-tipo');

    const cumpleMarca = (marcaSeleccionada === 'todos' || marcaTarjeta === marcaSeleccionada);
    const cumpleTipo = (tipoTarjeta === tipoSeleccionado);

    if (cumpleMarca && cumpleTipo) {
      // Si cumple la combinación elegida, se despliega de golpe en formato flex
      tarjeta.classList.remove('oculto');
      tarjeta.style.display = 'flex';
    } else {
      tarjeta.classList.add('oculto');
      tarjeta.style.display = 'none';
    }
  });
}

// Forzar el estado oculto inicial nada más cargar la página
document.addEventListener("DOMContentLoaded", function() {
  aplicarFiltrosCatalogo();
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

