let fInicio = Date.now();

let nombre = prompt("Introduce tu nombre:");
let apellido1 = prompt("Introduce tu primer apellido:");
let apellido2 = prompt("Introduce tu segundo apellido:");

let fFin = Date.now();
let tiempoTotal = Math.round((fFin - fInicio) / 1000);

console.log(
  `En introducir ${nombre} ${apellido1} ${apellido2} has tardado ${tiempoTotal} segundos.`,
);