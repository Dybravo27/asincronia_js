// Define una función asincrónica que espere 1 segundo y luego devuelva una cadena que
// diga "Operación completada". Utiliza async/await.

async function promesa() {
    let respuesta = await new Promise((resolve) => {
        setTimeout(() => resolve("Operacion completada"),1000);
    })
    alert(respuesta);
}
promesa();