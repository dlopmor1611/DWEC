let ventanaNueva = null;

// a) Confirmación
function apartadoA() {
    let respuesta = confirm("¿Deseas continuar?");
    if (respuesta) {
        alert("Has pulsado: ACEPTAR");
    } else {
        alert("Has pulsado: CANCELAR");
    }
}

// b) Abrir ventana para comprobar estado
function abrirVentana() {
    ventanaNueva = window.open("", "ventanaNueva", "width=300,height=200");
    ventanaNueva.document.body.innerHTML = "<p>Ventana abierta</p>";
}

function comprobarCerrada() {
    if (ventanaNueva == null) {
        alert("Primero debes abrir la ventana con el enlace anterior.");
    } else if (ventanaNueva.closed) {
        alert("La ventana está CERRADA.");
    } else {
        alert("La ventana está ABIERTA.");
    }
}

// c) Cambiar nombre de la ventana
function apartadoC() {
    ventanaNueva = window.open("", "ventanaInicial", "width=300,height=200");
    let nombre = prompt("Introduce un nuevo nombre para esta ventana:");
    if (nombre) {
        ventanaNueva.name = nombre;
        alert("El nuevo nombre asignado a la ventana es: " + ventanaNueva.name);
    }
}

// d) Cerrar ventana secundaria
function cerrarVentanaNueva() {
    if (ventanaNueva && !ventanaNueva.closed) {
        ventanaNueva.close();
    } else {
        alert("No hay ninguna ventana secundaria abierta.");
    }
}

// f) Abrir ventana 300x100
function apartadoF() {
    ventanaNueva = window.open("", "ventanaF", "width=300,height=100,resizable=yes");
    ventanaNueva.document.body.innerHTML = "<p>Ventana de 300x100</p>";
}

// g) Ventana hija escribe en la página padre
function apartadoG() {
    ventanaNueva = window.open("", "ventanaG", "width=300,height=150");
    ventanaNueva.document.body.innerHTML = "<h3>Ventana Hija</h3><button onclick='window.opener.document.getElementById(\"mensajeG\").innerHTML = \"Texto recibido desde la ventana hija\";'>Enviar texto al padre</button>";
}

// h) Mover 50px abajo y derecha
function apartadoH() {
    if (ventanaNueva && !ventanaNueva.closed) {
        ventanaNueva.moveBy(50, 50);
        ventanaNueva.focus();
    } else {
        alert("Abre primero una ventana (por ejemplo en el apartado f).");
    }
}

// i) Mover a posición absoluta (100, 100)
function apartadoI() {
    if (ventanaNueva && !ventanaNueva.closed) {
        ventanaNueva.moveTo(100, 100);
        ventanaNueva.focus();
    } else {
        alert("Abre primero una ventana (por ejemplo en el apartado f).");
    }
}

// j) Scroll 10px hacia abajo
function apartadoJ() {
    window.scrollBy(0, 10);
}