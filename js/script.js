document.addEventListener("DOMContentLoaded", function () {
        const banner = document.getElementById("cookie-banner");
        const btnAccept = document.getElementById("btn-accept-cookies");
        const btnReject = document.getElementById("btn-reject-cookies");

        // Comprobamos si el usuario ya ha tomado una decisión anteriormente
        if (!localStorage.getItem("cookies-aceptadas")) {
            banner.style.display = "block"; // Muestra el banner si es una nueva visita
        }

        // Acción al pulsar Aceptar
        btnAccept.addEventListener("click", function () {
            localStorage.setItem("cookies-aceptadas", "true");
            banner.style.display = "none";
            // Aquí puedes disparar tus scripts de seguimiento (Analytics, etc.) si los tienes
        });

        // Acción al pulsar Rechazar
        btnReject.addEventListener("click", function () {
            localStorage.setItem("cookies-aceptadas", "false");
            banner.style.display = "none";
            // No se instala ninguna cookie de rastreo
        });
    });

    function filtrarMotores(marca) {
  // Actualizar clases activas en los botones
  const botones = document.querySelectorAll('.btn-filtro');
  botones.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');

  // Filtrar tarjetas
  const tarjetas = document.querySelectorAll('.motor-card');
  tarjetas.forEach(tarjeta => {
    if (marca === 'todos' || tarjeta.getAttribute('data-marca') === marca) {
      tarjeta.style.display = 'flex';
    } else {
      tarjeta.style.display = 'none';
    }
  });
}

function irAContacto(nombreMotor) {
    // 1. Elementos del formulario
    const titulo = document.getElementById('contacto-titulo');
    const subtitulo = document.getElementById('contacto-texto');

    // 2. Cambiar textos para la solicitud de presupuesto
    if (titulo) {
        titulo.innerText = "Solicitar Presupuesto para Automatismo";
    }
    if (subtitulo) {
        subtitulo.innerText = `Cuéntanos más sobre tu proyecto para el motor ${nombreMotor}. Te enviaremos una valoración a medida lo antes posible.`;
    }

    // 3. Desplazamiento suave hacia la sección de contacto
    const seccionContacto = document.getElementById('contacto');
    if (seccionContacto) {
        seccionContacto.scrollIntoView({ behavior: 'smooth' });
    }
}

// Restablecer los textos originales si el usuario vuelve a subir haciendo scroll
window.addEventListener('scroll', function() {
    // Si el usuario sube y se queda cerca de la parte superior de la página (menos de 400px)
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
