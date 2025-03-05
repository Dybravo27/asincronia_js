// Crea una Promisa que se resuelva después de 3 segundos y luego imprima "Promisa
// resuelta" cuando se cumpla.


const promisa =function () {
    return new Promise((resolve) => {
       setTimeout(() => {
        alert("Promisa resuelta");
        resolve();
       }, 3000); 
    });
}
promisa();