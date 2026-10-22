// a) Muestra el nombre del marcador pulsado
      function mostrarNombreMarcador(enlace) {
          alert("El nombre de este marcador es: " + enlace.name);
      }

      // b) Muestra el host (dominio y puerto si lo hay)
      function mostrarHost() {
          alert("El host actual es: " + location.host);
      }

      // c) Muestra la URL completa
      function mostrarURL() {
          alert("La URL completa es: " + location.href);
      }

      // d) Pide una dirección y navega a ella
      function irADireccion() {
          let url = prompt("Introduce una dirección (ej: www.google.com):");
          if (url) {
              // Añadimos protocolo si el usuario no lo escribió
              if (!url.startsWith("http://") && !url.startsWith("https://")) {
                  url = "https://" + url;
              }
              location.href = url;
          }
      }

      // e) Muestra el protocolo (http:, https:, file:, etc.)
      function mostrarProtocolo() {
          alert("El protocolo utilizado es: " + location.protocol);
      }

      // f) Recarga la página
      function recargarPagina() {
          location.reload();
      }