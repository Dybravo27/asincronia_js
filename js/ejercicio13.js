// Crea una Promise que se rechace después de 2 segundos y captura el error para imprimir
// "Error: Promise rechazada".

let promesa = new Promise((resolve,reject) => {
    setTimeout(() => {
        reject(new Error ("Promise rechazada"));
    }, 2000);
});

promesa.catch((console.error));