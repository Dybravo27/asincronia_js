// Usar un proxy para la validación de los valores de propiedades
// • Cuando declaremos que el atributo es numérico solo perimimos que ingresen
// números
// • Cuando declaremos que el atributo es alfanumérico solo permitimos que ingresen
// letras
// • Cuando declaremos que el atributo es un email, solo permitimos que ingresen
// correos
// • Cuando declaremos que el atributo es de tipo date, solo permitimos que ingresen
// fechas
// • Para todos los atributos no se puede ingresar espacios en blanco tanto al inicio como
// al final de estos y se debe mostrar el error personalizado por consola

function ValidacionProxy(obj) {
    return new Proxy(obj, {
        set(target, prop, value) {
            if (prop === 'numero') {
                if (isNaN(value)) {
                    console.error(`Error: El atributo '${prop}' debe ser un numero`);
                    return false;
                }
            } else if (prop === 'alfanumerico') {
                if (!/^[a-zA-Z]+$/.test(value)) {
                    console.error(`Error: El atributo '${prop}' debe ser alfanumerico osea solo letras`);
                    return false;
                }
            } else if (prop === 'email') {
                const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                if (!emailRegex.test(value)) {
                    console.error(`Error: El atributo '${prop}' debe ser un correo electronico valido`);
                    return false;
                }
            } else if (prop === 'fecha') {
                const fecha = new Date(value);
                if (isNaN(fecha.getTime())) {
                    console.error(`Error: El atributo '${prop}' debe ser una fecha valida`);
                    return false;
                }
            }
            if (typeof value === 'string' && (value.trim() !== value)) {
                console.error(`Error: El atributo '${prop}' no puede contener espacios en blanco al inicio o al final`);
                return false;
            }
            target[prop] = value;
            return true;
        }
    });
};
const obj = {
    numero: 123,
    alfanumerico: "abc",
    email: "josehernan@gmail.com",
    fecha: "2025-03-07"
};

const proxy = ValidacionProxy(obj);
proxy.numero = 456;
proxy.numero = "abc";

proxy.alfanumerico = "hola123";
proxy.alfanumerico = "hola";

proxy.email = "josehernan@";
proxy.email = "josehernan@dominio.com";

proxy.fecha = "2025-03-07";
proxy.fecha = "07-03-2025";
proxy.numero = " 123 ";