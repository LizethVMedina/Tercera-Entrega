function calcular() {
    let opcion = prompt("Seleccione la operación que desea realizar:\n1. Suma\n2. Resta\n3. Multiplicación\n4. División");

    switch (opcion) {
        case '1':
            suma();
            break;
        case '2':
            resta();
            break;
        case '3':
            multiplicacion();
            break;
        case '4':
            division();
            break;
        default:
            console.log("Escoja una opción válida.");
            break;
    }
}

function suma() {
    let num1 = parseFloat(prompt("Ingrese el primer número:"));
    let num2 = parseFloat(prompt("Ingrese el segundo número:"));
    let resultado = num1 + num2;
    console.log("El resultado de la suma es: " + resultado);
    return resultado;
}

function resta() {
    let num1 = parseFloat(prompt("Ingrese el primer número:"));
    let num2 = parseFloat(prompt("Ingrese el segundo número:"));
    let resultado = num1 - num2; 
    console.log("El resultado de la resta es: " + resultado);
    return resultado;
}

function multiplicacion() {
    let num1 = parseFloat(prompt("Ingrese el primer número:"));
    let num2 = parseFloat(prompt("Ingrese el segundo número:"));
    let resultado = num1 * num2;
    console.log("El resultado de la multiplicación es: " + resultado);
    return resultado;
}

function division() {
    let num1 = parseFloat(prompt("Ingrese el primer número:"));
    let num2 = parseFloat(prompt("Ingrese el segundo número:"));

    if (num2 === 0) {
        console.log("Error: No se puede dividir por cero.");
    } else {
        let resultado = num1 / num2;
        console.log("El resultado de la división es: " + resultado);
        return resultado;
    }
}

calcular();