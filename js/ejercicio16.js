// Después de realizar una llamada a un archivo local en formato json, utiliza el método then()
// para filtrar los datos y mostrar solo los elementos que cumplan ciertos criterios (por ejemplo,
// mostrar solo los nombres que comiencen con "A").

const datosUsuarios = async () => {
    const datos = await fetch('../js/json/ejercicio16.json')
    const resultados = await datos.json();
    return resultados;
}

fetch('../js/json/ejercicio16.json').then((datos) => {
    datos.json().then((datosUsuarios) => {
        for (let i = 0; i < datosUsuarios.length; i++) {
            if (datosUsuarios[i].nombre.startsWith('A')) {                
                console.log(datosUsuarios[i].nombre);
            }
        }
    })
});