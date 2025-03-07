// Realiza tres Promises, algunas de las cuales se resuelvan y otras se rechacen. Utiliza
// Promise.allSettled() para obtener información sobre el estado de todas las Promises.

const promesa1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Promesa 1 rechazada");
    }, 1000);
});

const promesa2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Promesa 2 rechazada");
    }, 2000);
});

const promesa3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promesa 3 resuelta");
    }, 3000);
});

Promise.allSettled([promesa1, promesa2, promesa3])
    .then((resultados) => {
        console.log("Estado de todas las promesas:");
        for (let i = 0; i < resultados.length; i++) {
            const respuesta = resultados[i];

            if (respuesta.status === "fulfilled") {
                console.log(`Promesas: ${respuesta.value}`);
            } else {
                console.log(`Promesas: ${respuesta.reason}`);
            }
        }
    });
