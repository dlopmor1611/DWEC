// a) Fecha de la última actualización
function mostrarUltimaModificacion() {
    alert("Última actualización: " + document.lastModified);
}

// b) URL de la página origen
function mostrarReferrer() {
    let origen = document.referrer;
    if (origen === "") {
        alert("No hay página de origen (acceso directo o archivo local).");
    } else {
        alert("Página de origen: " + origen);
    }
}

// c) Título del documento actual
function mostrarTitulo() {
    alert("Título del documento: " + document.title);
}

// d) URL completa del documento
function mostrarURLCompleta() {
    alert("URL completa: " + document.URL);
}

// e) Ejemplo 2: Reemplaza todo el contenido del body por un nuevo contenido (Sobreescribir)
function ejemploSobreescribir() {
    document.body.innerHTML = "<h1>¡Página Sobreescrita!</h1>" +
        "<p>Al asignar un nuevo valor a document.body.innerHTML, todo el contenido previo se elimina y es reemplazado.</p>" +
        "<button onclick='location.reload()'>Volver a la página original</button>";
}