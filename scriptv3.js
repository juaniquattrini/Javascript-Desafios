let sum = 0;

// promt usuario
let numero = parseInt(prompt('Ingrese un numero: '));

while(numero >= 0) {

    // suma numeros (Solo positivos)
    sum += numero;

    
    numero = parseInt(prompt('Ingrese otro numero (Escape para terminar de sumar): '));
}

// Suma total
alert(`La suma total es ${sum}.`);  