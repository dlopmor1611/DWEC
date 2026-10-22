//Ej 1
function filterNumbersGreaterThan(numeros, filtro) {
  let filtrado = numeros.filter((num) => num < filtro);
  return filtrado;
}

//Ej 2
function toHackerSpeak(texto) {
  const letras = {
    a: "4",
    A: "4",
    e: "3",
    E: "3",
    i: "1",
    I: "1",
    o: "0",
    O: "0",
    s: "5",
    S: "5",
  };

  return [...texto].map((c) => (c in letras ? letras[c] : c)).join("");
}

//Ej 3
function getFileExtension(archivo) {
  return archivo.split(".")[1];
}

//Ej 4
function flatArray(array2D) {
  let arLineal = [];

  array2D.forEach((array1D) => {
    array1D.forEach((elemento) => arLineal.push(elemento));
  });
  return arLineal;
}

//Ej 5
function removeDuplicates(arDuplicado) {
  let arRes = [];
  arDuplicado.forEach((element) => {
    if (!arRes.includes(element)) {
      arRes.push(element);
    }
  });

  return arRes;
}

//Ej 6
function countLetter(letra, texto) {
    let count = 0; 
    texto.split('').forEach(l => { 
        if (l === letra) { 
            count++; 
        } 
    }); 
    
    return count; 
}

function removeWords(str, palabras) {
  const arrStr = str.split(' ');
  const resultado = arrStr.filter(palabra => !palabras.includes(palabra));

  return resultado.join(" ");
}