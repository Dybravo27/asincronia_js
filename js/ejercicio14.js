// Crea tres Promises consecutivas, donde cada una se resuelva después de 1 segundo y
// devuelva un número diferente. Luego, encadena las tres Promises para sumar los resultados
// y mostrar el resultado final.


function promesa(numero, tiempo) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(numero);
        }, tiempo);
    });
}

promesa(45, 1000)
    .then((resultado1) => {
        console.log(`Numero 1: ${resultado1}`);
        return promesa(20, 1000)
    .then((resultado2) => {
        console.log(`Numero 2: ${resultado2}`);
        return promesa(15, 1000)
    .then((resultado3) => {
        console.log(`Numero 3: ${resultado3}`);
        const suma = resultado1 + resultado2 + resultado3;
        console.log(`La suma de los resultados es: ${suma}`);
        });
    });
});
