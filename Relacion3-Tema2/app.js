// Ejercicio 1
function invierteCadena(cad_arg) {
  let cadInversa = "";

  for (let index = cad_arg.length - 1; index >= 0; index--) {
    cadInversa += cad_arg[index];
  }
  return cadInversa;
}

function inviertePalabras(cad_arg) {
  const cadenaArray = cad_arg.split(" ");
  let cadenaPalabrasInvertidas = "";
  for (let index = 0; index < cadenaArray.length; index++) {
    cadenaPalabrasInvertidas += invierteCadena(cadenaArray[index]);
    if (index < cadenaArray.length - 1) {
      cadenaPalabrasInvertidas += " ";
    }
  }
  return cadenaPalabrasInvertidas;
}

function encuentraPalabraMasLarga(cad_arg) {
  const cadenaArray = cad_arg.split(" ");
  let longitud = 0;
  for (let index = 0; index < cadenaArray.length; index++) {
    if (longitud < cadenaArray[index].length) {
      longitud = cadenaArray[index].length;
    }
  }

  return longitud;
}

function filtraPalabrasMasLargas(cad_arg, i) {
  const cadenaArray = cad_arg.split(" ");
  let cantidadPalabras = 0;
  for (let index = 0; index < cadenaArray.length; index++) {
    if (cadenaArray[index].length > i) {
      cantidadPalabras++;
    }
  }

  return cantidadPalabras;
}

function cadenaBienFormada(cad_arg) {
  let cadenaFormada = "";
  for (let index = 0; index < cad_arg.length; index++) {
    if (index == 0) {
      cadenaFormada += cad_arg[index].toUpperCase();
    } else {
      cadenaFormada += cad_arg[index].toLowerCase();
    }
  }

  return cadenaFormada;
}

// Ejercicio 2

function comprobarInformacion(cadena) {
  if (cadena === cadena.toUpperCase()) {
    console.log("La cadena está formada sólo por MAYÚSCULAS.");
  } else if (cadena === cadena.toLowerCase()) {
    console.log("La cadena está formada sólo por MINÚSCULAS.");
  } else {
    console.log(
      "La cadena está formada por una MEZCLA de mayúsculas y minúsculas.",
    );
  }
}

// Ejercicio 3

function buscarApariciones(frase, palabra) {
  let posiciones = [];
  let pos = frase.indexOf(palabra);

  while (pos !== -1) {
    posiciones.push(pos);
    pos = frase.indexOf(palabra, pos + 1);
  }
  return posiciones;

} 

// Ejercicio 4

function organizarCadena(texto) {
  let consonantes = "";
  let vocales = "";
  const vocalesLista = "aeiouAEIOU";

  for (let i = 0; i < texto.length; i++) {
    let caracter = texto[i];

    if (caracter !== " ") {
      if (vocalesLista.includes(caracter)) {
        vocales += caracter;
      } else {
        consonantes += caracter;
      }
    }
  }

  return consonantes + vocales;
}

// Ejercicio 5

function eliminarRepetidos(texto) {
  let resultado = "";

  for (let i = 0; i < texto.length; i++) {
    if (texto[i] !== texto[i - 1]) {
      resultado += texto[i];
    }
  }

  return resultado;
}

// Ejercicio 6

function buscarTexto(frase, palabra) {
  let pos = frase.indexOf(palabra);

  if (pos === -1) {
    console.log("No se pudo encontrar la cadena");
    return;
  }
  return pos;
}

// Ejercicio 7

function esPalintromo(palabra) {
  if (palabra.toLowerCase() === invierteCadena(palabra).toLowerCase()) {
    return true;
  }
  return false;
}

// Ejercicio 8

function contarPalabrasManual(texto) {
  let contador = 0;
  let enPalabra = false;

  for (let i = 0; i < texto.length; i++) {
    let caracter = texto[i];

    if (caracter !== " ") {
      if (!enPalabra) {
        contador++;
        enPalabra = true;
      }
    } else {
      enPalabra = false;
    }
  }
  return contador;
}

// Ejercicio 9

function validateCreditCard(tarjeta) {
  if (tarjeta.length !== 16 || isNaN(tarjeta)) {
    return false;
  }
  if (parseInt(tarjeta[15]) % 2 !== 0) {
    return false;
  }
  let suma = 0;
  let Esigual = true;

  for (let i = 0; i < tarjeta.length; i++) {
    let digito = parseInt(tarjeta[i]);

    suma += digito;
    if (tarjeta[i] !== tarjeta[0]) {
      Esigual = false;
    }
  }
  if (Esigual) {
    return false;
  }
  if (suma <= 16) {
    return false;
  }
  return true;
}

// Ejercicio 10

function validateCreditCard2(tarjeta) {
  let numeroTarjeta = tarjeta.split("-").join("");
  return validateCreditCard(numeroTarjeta);
}

// Ejercicio Opcional

function validateCardOpc(numero, mesExp, anioExp) {
  let fechaActual = new Date();
  let anioActual = fechaActual.getFullYear();
  let mesActual = fechaActual.getMonth() + 1;
  if (anioExp < anioActual) {
    return false;
  }
  if (anioExp == anioActual) {
    if (mesExp < mesActual) {
      return false;
    }
  }
  let numeros = [];
  let multiplicar = false;
  for (let index = numero.length - 1; index >= 0; index--) {
    let digito = parseInt(numero[index]);

    if (multiplicar) {
      digito *= 2;
      if (digito > 9) {
        digito -= 9;
      }
    }
    numeros.push(digito);
    multiplicar = !multiplicar;
  }
  let suma = 0;
  for (let index = 0; index < numeros.length; index++) {
    suma += numeros[index];
  }

  return suma % 10 === 0;
}