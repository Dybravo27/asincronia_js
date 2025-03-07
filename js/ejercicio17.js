// Crea una función asincrónica que realice una llamada a un archivo local en formato json y
// luego manipule los datos recibidos para mostrar información específica.

// Función asincrónica para obtener y procesar los datos de un archivo JSON local
const obtenerDatosUsuarios = async () => {
    try {
        const respuesta = await fetch('../js/json/ejercicio17.json');
        
        if (!respuesta.ok) {
            throw new Error('No se pudo cargar el archivo JSON');
        }
        const datos = await respuesta.json();
        for (let i = 0; i < datos.length; i++) {
            console.log(`Nombre: ${datos[i].nombre}, Edad: ${datos[i].edad}, email: ${datos[i].email}`);
        }
    } catch (error) {
        console.error('Error al obtener o procesar los datos:', error);
    }
};

obtenerDatosUsuarios();
