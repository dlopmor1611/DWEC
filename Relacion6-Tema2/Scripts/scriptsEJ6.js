// a) Mostrar el número de anclas
function mostrarNumeroAnclas() {
    let totalAnclas = document.anchors.length;
    alert("Número de anclas en el documento: " + totalAnclas);
}

// b) Mostrar el texto dentro del tag del primer ancla (innerHTML)
function mostrarTextoPrimerAncla() {
    if (document.anchors.length > 0) {
        let texto = document.anchors[0].innerHTML;
        alert("Texto del primer ancla: " + texto);
    } else {
        alert("No hay anclas en el documento.");
    }
}

// c) Mostrar el número de imágenes
function mostrarNumeroImagenes() {
    let totalImagenes = document.images.length;
    alert("Número de imágenes en el documento: " + totalImagenes);
}

// d) Mostrar el id de la primera imagen
function mostrarIdPrimeraImagen() {
    if (document.images.length > 0) {
        let idImagen = document.images[0].id;
        alert("El ID de la primera imagen es: " + idImagen);
    } else {
        alert("No hay imágenes en el documento.");
    }
}

// e) Mostrar el número de enlaces
function mostrarNumeroEnlaces() {
    let totalEnlaces = document.links.length;
    alert("Número de enlaces en el documento: " + totalEnlaces);
}

// f) Cambiar el título del documento
function cambiarTitulo() {
    let nuevoTitulo = prompt("Introduce el nuevo título para el documento:", document.title);
    if (nuevoTitulo) {
        document.title = nuevoTitulo;
        alert("El título ha cambiado a: " + document.title);
    }
}