// Crear un objeto proxy usando la clase Proxy

let persona = { nombre: "Dylan", edad: 20 };

let proxy = new Proxy(persona, {
  get: (obj, prop) => prop in obj ? obj[prop] : 'Propiedad no encontrada',
  set: (obj, prop, value) => {
    if (prop === 'edad' && value < 0) return false;
    obj[prop] = value;
    return true;
  }
});

proxy.edad = -10;
proxy.edad = 18;
console.log(proxy.nombre);
console.log(proxy.edad);