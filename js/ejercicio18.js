// Crea tres Promises que se resuelvan después de diferentes intervalos de tiempo y luego
// utilice Promise.all() para mostrar un mensaje cuando todas se hayan resuelto.

let promesa1 = new Promise((resolve) => {
    setTimeout(() => {
        console.log("Promesa 1 resuelta");
        resolve("Resultado de la promesa 1");
    }, 2000);
});

let promesa2 = new Promise((resolve) => {
    setTimeout(() => {
        console.log("Promesa 2 resuelta");
        resolve("Resultado de la promesa 2");
    }, 3000);
});

let promesa3 = new Promise((resolve) => {
    setTimeout(() => {
        console.log("Promesa 3 resuelta");
        resolve("Resultado de la promesa 3");
    }, 4000);
});
Promise.all([promesa1, promesa2, promesa3])
    .then((resultados) => {
        console.log("Todas las promesas se han resuelto:", resultados);
    });