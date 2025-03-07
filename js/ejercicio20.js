// Crea un bucle que realice llamadas asincrónicas utilizando async/await para procesar una
// lista de elementos uno por uno.

async function procesarElementos(elemento) {
    console.log(`Procesando: ${elemento}`);
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(`Finalizado: ${elemento}`);
}
async function procesarLista() {
    const elementos = ["Elemento 1", "Elemento 2", "Elemento 3"];

    for (let i = 0; i < elementos.length; i++) {
        await procesarElementos(elementos[i]);
    }

    console.log("Procesamiento completado");
}

procesarLista();