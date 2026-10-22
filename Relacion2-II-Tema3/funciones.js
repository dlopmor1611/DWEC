//Ej 1
let clase = [];

clase[0] = "Angel Garcia, 20, 6, 7, 10";
clase[1] = "Marta Gomez, 19, 8, 5, 9";
clase[2] = "Carlos Soler, 21, 4, 7, 6";

//Ej 2
function obtenerNota(cod, tri) {
    let alumno = clase[cod];
    let arAlumno = alumno.split(",");

    if (tri === undefined) {
        let nota1 = parseFloat(arAlumno[2].trim());
        let nota2 = parseFloat(arAlumno[3].trim());
        let nota3 = parseFloat(arAlumno[4].trim());
        
        let media = (nota1 + nota2 + nota3) / 3;
        return media.toFixed(2); 
    } 
    
    return parseFloat(arAlumno[tri + 1].trim());
}

//Ej 3
function devolverMediaEdad() {
    let suma = 0
    clase.forEach(alumno => {
        let arrAlumno = alumno.split(",");
        suma += parseInt(arrAlumno[1].trim());
    });

    return (suma/clase.length).toFixed(2);
}

//Ej 4
function elegirAleatorio() {
    let alumno = clase[parseInt(Math.random() * clase.length)];
    let arAlumno = alumno.split(",");
    return arAlumno[0];
}

//Ej 5
function paresImpares() {
    arNumeros = [];
    for (let index = 0; index < 100; index++) {
        arNumeros.push(parseInt((Math.random() * 1000) + 1));        
    }

    arNumeros.sort((a, b) => (a % 2) - (b % 2));
    return arNumeros;
}

//Ej 6
const listaVendedores = [];

function registrarVendedor() {
    const inputNombre = document.getElementById('nombre');
    const inputVentas = document.getElementById('ventas');
    
    const nombre = inputNombre.value.trim();
    const ventasBrutas = parseFloat(inputVentas.value);

    if (nombre === "" || isNaN(ventasBrutas) || ventasBrutas < 0) {
        alert("Por favor, introduce un nombre válido y un monto de ventas mayor o igual a 0.");
        return;
    }

    const sueldoFinal = 200 + (ventasBrutas * 0.09);

    const nuevoVendedor = {
        nombre: nombre,
        ventas: ventasBrutas,
        sueldo: sueldoFinal
    };

    listaVendedores.push(nuevoVendedor);

    mostrarVendedores();

    inputNombre.value = "";
    inputVentas.value = "";
}

function mostrarVendedores() {
    const tabla = document.getElementById('tablaVendedores');
    tabla.innerHTML = listaVendedores.map(vendedor => `
        <tr>
            <td>${vendedor.nombre}</td>
            <td>$${vendedor.ventas.toFixed(2)}</td>
            <td><strong>$${vendedor.sueldo.toFixed(2)}</strong></td>
        </tr>
    `).join('');
}

//Ej 7
function crearArray() {
    const arNumeros = [];
    for (let index = 0; index < 10; index++) {
        arNumeros.push(0);
    }
    return arNumeros;
}

function añadirUno(arNumeros) {
    return arNumeros.map(i => i + 1);
}

function mostrarArray(arNumeros) {
    let cadena = arNumeros.join("  ");
    console.log(cadena);
}

//Ej 8
function tiraDados() {
    let cantidad = new Array(13).fill(0);
    for (let index = 0; index < 36000; index++) {
        let tirada1 = Math.floor((Math.random() * 6) + 1);
        let tirada2 = Math.floor((Math.random() * 6) + 1);
        let suma = tirada1+tirada2;

        cantidad[suma]++;
    }

    console.log("--- Resultados de las tiradas ---");
    cantidad.forEach((cant, num) => {
        if (num >= 2 && num <= 12) {
            console.log(`${num} ha salido ${cant} veces`);
        }
    })
}

//Ej 9
function tiraDadosMatriz() {
  let matriz = Array(6).fill(0).map(() => Array(6).fill(0));

  for (let index = 0; index < 36000; index++) {
    let tirada1 = Math.floor(Math.random() * 6);
    let tirada2 = Math.floor(Math.random() * 6);
    matriz[tirada1][tirada2]++;
  }

  let tablaFormateada = {};
  for (let i = 0; i < 6; i++) {
    tablaFormateada[i + 1] = {
      "1": matriz[i][0],
      "2": matriz[i][1],
      "3": matriz[i][2],
      "4": matriz[i][3],
      "5": matriz[i][4],
      "6": matriz[i][5]
    };
  }

  console.log("Tabla Bidimensional de Combinaciones (Dados del 1 al 6):");
  console.table(tablaFormateada);
}

//Ej 10
let asientosAvion = new Array(10).fill(false);

function reservarAsiento() {
    let nombre = pasajeroInput.value;
    let tipoClase = claseAsientoSelect.value;
    
    if (nombre === "") {
        alert("Escribe el nombre del pasajero.");
        return;
    }
    
    let asientoAsignado = -1;
    
    let inicio = (tipoClase === "First") ? 0 : 5;
    let fin = (tipoClase === "First") ? 5 : 10;
    
    for (let i = inicio; i < fin; i++) {
        if (asientosAvion[i] === false) {
            asientosAvion[i] = true; 
            asientoAsignado = i + 1; 
            break;
        }
    }
    
    if (asientoAsignado !== -1) {
        let ventanaImpresion = window.open("", "_blank", "width=400,height=200");
        ventanaImpresion.document.write(`
            <h3>TARJETA DE EMBARQUE</h3>
            <p><strong>Pasajero:</strong> ${nombre}</p>
            <p><strong>Clase:</strong> ${tipoClase}</p>
            <p><strong>Número de Asiento:</strong> ${asientoAsignado}</p>
        `);
        ventanaImpresion.document.close();
    } else {
        alert(`Lo sentimos, la sección ${tipoClase} está completa.`);
    }
}