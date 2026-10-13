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