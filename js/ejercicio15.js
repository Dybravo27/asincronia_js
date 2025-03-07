// Realiza una llamada a un archivo local Muestra en formato json, luego muestre los datos
// obtenidos en la consola.

const datosUsuarios = async () => {
    const datos = await fetch('../js/json/ejercicio15.json')
    const resultados = await datos.json();
    return resultados;
}

datosUsuarios().then((datos) => {
    console.log(datos);
});

fetch('../js/json/ejercicio15.json').then((datos) => {
    datos.json().then((datosUsuarios) => {
        console.log(datosUsuarios);
    })
});