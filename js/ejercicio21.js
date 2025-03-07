// Realiza una llamada a un archivo local en formato json y maneja posibles errores utilizando
// try/catch para mostrar un mensaje de error en caso de fallo.

const datosUsuarios = async () => {
    const datos = await fetch('../js/json/ejercicio21.json')
    const resultados = await datos.json();
    return resultados;
}
const procesarDatos = async () => {
    try {        
        const datosUsu = await datosUsuarios();
        for (let i = 0; i < datosUsu.length; i++) {
            if (datosUsu[i].id % 2 === 0) {
                console.log(`Los usuarios con el ID par (${datosUsu[i].id}) es: ${datosUsu[i].nombre}`);
            }
        }
    } catch (error) {
        throw new Error("No se procesaron los datos",error);
        
    }
};
procesarDatos();