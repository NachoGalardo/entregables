import * as readlineSync from "readline-sync";

let base: number = readlineSync.questionInt("Ingrese la base: ");
let exponente: number = readlineSync.questionInt("Ingrese el exponente: ");

function calcular(base: number, exponente: number): number {
    if (exponente >= 0) {
        if (exponente === 0) {
            console.log("Todo número elevado a la 0 da 1");
            return 1;
        } else {
            return calcularPotencia(base, exponente);
        }
    } else {
        console.log("El exponente debe ser un número entero no negativo");
        return -1;
    }
}

function calcularPotencia(base: number, exponente: number): number {
    let resultado: number = 1;
    for (let i: number = 0; i < exponente; i++) {
        resultado *= base;
    }
    return resultado;
}

let resultado = calcular(base, exponente);
if (resultado !== -1) {
    console.log("El resultado es: " + resultado);
}
