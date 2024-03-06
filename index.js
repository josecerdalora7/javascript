// 1. Escribir una función llamada imprimirArreglo que reciba un arreglo e imprima cada elemento en una línea a parte

let imprimirArreglo = (...arreglo) => {
    arreglo.forEach(elemento => {
        console.log(elemento);
    });
};

imprimirArreglo(1, "Hola", 2, "Mundo")

// 2. Escribir una función llamada contarRango que reciba dos números y retorne cuántos números que hay entre ellos (excluyéndolos)

let contarRango = (num1, num2) => {
    let contador = 0;
    for(let i = num1 + 1; i < num2; i++) {
        contador++;
    }
    return contador;
};

// código de prueba
console.log(contarRango(1, 9)) // 7
console.log(contarRango(1332, 8743)) // 7410
console.log(contarRango(5, 6)) // 0 

// 3. Escribir una función llamada numeroDeAes que reciba un string y retorne el número de veces que aparece la letra "a":

let numeroDeAes = (cadena) => {
    let contador = 0;
    for(let i = 0; i < cadena.length; i++) {
        if(cadena[i] === 'a' || cadena[i] === 'A') {
            contador++;
        }
    }
    return contador;
};

// código de prueba
console.log(numeroDeAes("abracadabra")) // 5
console.log(numeroDeAes("etinol")) // 0
console.log(numeroDeAes("")) // 0 

// 4. Escribir una función llamada sumarArreglo que reciba un arreglo de números y retorne la suma de todos los elementos.

let sumarArreglo = (arreglo) => {
    let suma = 0;
    for(let i = 0; i < arreglo.length; i++) {
        suma += arreglo[i];
    }
    return suma;
};

// código de prueba
console.log(sumarArreglo([3, 1, 2])) // 6
console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) // 55
console.log(sumarArreglo([])) // 0 

// 5. Escribir una función llamada multiplicarArreglo que reciba un arreglo de números y retorne la multiplicación de todos los elementos.

let multiplicarArreglo = (arreglo) => {
    return arreglo.reduce((total, valorActual) => total * valorActual, 1);
}

// código de prueba
console.log(multiplicarArreglo([4, 1, 2, 3])) // 24
console.log(multiplicarArreglo([1, 2, 3, 4, 5, 6, 7, 8])) // 40320
console.log(multiplicarArreglo([])) // 1

// 6. Escribir una función llamada removerCeros que reciba un arreglo de números y retorne un nuevo arreglo excluyendo los ceros (0).

let removerCeros = (arreglo) => {
    return arreglo.filter(numero => numero !== 0);
}

// código de prueba
console.log(removerCeros([0, 1, 0, 2, 0, 3])) // [1, 2, 3]
console.log(removerCeros([9, 3, 6, 4])) // [9, 3, 6, 4]
console.log(removerCeros([0, 0, 0])) // [] 

// 7. Escribir una función llamada capitalizar que reciba un string y capitalice la primera letra:

let capitalizar = (cadena) => {
    return cadena.charAt(0).toUpperCase() + cadena.slice(1);
}

console.log(capitalizar("pedro")) // "Pedro"
console.log(capitalizar("hola mundo")) // "Hola mundo" 

// 8. Escribir una función llamada capitalizar que reciba un string y capitalice la primera letra de cada palabra:

let capitalizar2 = (cadena) => {
    return cadena.split(' ')
    .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1))
    .join(' ');
}

console.log(capitalizar2("hola mundo")) // "Hola Mundo"
console.log(capitalizar2("make it real")) // "Make It Real" 


// 9. Escribir una función llamada max que reciba un arreglo de números y retorne el número máximo:
// Nota: Intentarlo hacer sin el método Math.max de JavaScript.

let max = (arreglo) => {
    let maximo = arreglo[0];
    for(let i = 1; i < arreglo.length; i++) {
        if(arreglo[i] > maximo) {
        maximo = arreglo[i];
        }
    }
    return maximo;
}

// código de prueba
console.log(max([3, 9, 6])) // 9
console.log(max([67, 35, 54, 26])) // 67
console.log(max([5, 9, 2, 4, 5, 7])) // 9

// 10. Escribir una función llamada min que reciba un arreglo de números y retorne el número mínimo:
// Nota: Intentarlo hacer sin el método Math.min de JavaScript.

let min = (arreglo) => {
    let minimo = arreglo[0];
    for(let i = 1; i < arreglo.length; i++) {
        if(arreglo[i] < minimo) {
        minimo = arreglo[i];
        }
    }
    return minimo;
}

// código de prueba
console.log(min([3, 9, 6])) // 3
console.log(min([67, 35, 54, 26])) // 26
console.log(min([5, 9, 2, 4, 5, 7])) // 2