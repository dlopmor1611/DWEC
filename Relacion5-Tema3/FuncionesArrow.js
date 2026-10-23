// Ej1

// Función 1
const sumar = (num1, num2) => num1 + num2; 

// Función 2: Retorna la longitud (simplificada)
const stringLength = str => {
    let length = str.length;
    console.log(`the length of "${str}" is:, ${length}`);
    return length;
};

// Función 3
const stringLength2 = str => {
    let length = str.length;
    console.log(`the length of "${str}" is:, ${length}`);
    return length; 
};

// Función 4
let alerts = [
    "Hey, you are awesome", 
    "You are so wonderful", 
    "What a marvel you are", 
    "You're so lovely", 
    "You're so sweet that I'd think you're a sweet potato -- and I LOOOOVE POTATOES"
];

const showAlert = name => {
    let message = alerts[(Math.floor(Math.random() * alerts.length))] + `, ${name}!`;
    alert(message);
    return message;
};

//Ej2
const saludar = (name, age) => `Hello, I am ${name}, and I am ${age} years old`; 

//Ej3
const sumarElementos = numeros => numeros.reduce((num, total) => num + total);

//Ej4
const fire = () => `bulls-${eye}`;

//Ej9
const fibonacci = n => {
    if (n < 3) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2 );
};