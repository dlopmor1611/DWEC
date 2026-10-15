// Ejercicio 1
function maximo(n1,n2,n3,n4) {
    return Math.max(n1,n2,n3,n4);
}

// Ejercicio 2
function lanzamiento() {
    return Math.floor((Math.random() * 6)) + 1;
}

// Ejercicio 4
function volumen(r) {
    return (4 / 3 * Math.PI * Math.pow(r,3)).toFixed(2);
}

// Ejercicio 5
function area(r) {
    return (Math.PI * Math.pow(r,2)).toFixed(2);
}

// Ejercicio 6
function potencia(b,e) {
    if (e == 0) return 1;
    if (e <= 0) return 1 / potencia(b,-e);
    return b * potencia(b,e-1);
}

// Ejercicio 7
function factorial(num) {
    if (num < 0) return 0;
    if (num == 0 || num === 1) return 1;
    return num * factorial(num-1);
}