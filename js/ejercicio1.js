// Escriba una función imprimirNumeros(desde, hasta) que genere un número cada segundo,
// comenzando desde desde y terminando con hasta.
// Haz dos variantes de la solución describiendo el paso a paso de cada una de ellas:
// • Usando setInterval.
// • Usando setTimeout anidado.

// se solicita al usuario el ingreso desde hasta donde vaa ir la lista de numeros
let desde = parseInt(prompt("Ingrese desde donde empieza a imprimir los numeros"));
let hasta = parseInt(prompt("Ingrese has donde finaliza la impresion de los numeros"));


const imprimirNumerosInterval = function (desde, hasta) {
  let id = setInterval(() => {
    console.log(desde);
    desde++;
    if (desde > hasta) clearInterval(id);
  }, 1000);
}

imprimirNumerosInterval(desde, hasta);