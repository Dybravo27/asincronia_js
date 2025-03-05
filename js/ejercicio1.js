// Escriba una función imprimirNumeros(desde, hasta) que genere un número cada segundo,
// comenzando desde desde y terminando con hasta.
// Haz dos variantes de la solución describiendo el paso a paso de cada una de ellas:
// • Usando setInterval.
// • Usando setTimeout anidado.

// declaro las variables donde se almacena los numeros 'desde' donde 'hasta' va ir el listado de numeros
let desde = parseInt(prompt("Ingrese desde donde empieza a imprimir los numeros"));
let hasta = parseInt(prompt("Ingrese has donde finaliza la impresion de los numeros"));

// Creo una funcion expresada que recibe como parametro desde y hasta 
const imprimirNumerosInterval = function (desde, hasta) {
  // mensaje que se muestra en la consola que dice cual funcion temporizadora se esta usando
  console.log("Usando setInterval");
  let id = setInterval(() => { // se usa el setInterval el cual se va a ejecutar cada 1000ms osea 1 segundo
    console.log(desde);//se imprime el numero actual desde en la consola
    desde++; // el cual se va a ir incrementado de a 1
    //si 'desde' supera el valor de 'hasta' se detiene el intervalo
    if (desde > hasta) clearInterval(id);// el clearInterval detiene la ejecucion repetitiva
  }, 1000);
}
// se llama a la funcion para que muestre la lista de numeros
imprimirNumerosInterval(desde, hasta);

// Creo otra funcion la cual va a recibir los parametros desde y hasta 
const imprimirNumerosTimeout = function (desde, hasta) {
  // se configura un retraso con el setTimeout el cual no tiene un tiempo establecido 
  // ya que demora la impresion de la lista de numero y por eso no se establecio
  setTimeout(() => {
    console.log(desde);// se imprime el numero actual desde en la consola
    // si el valor de 'desde' es menor que "hasta" incrementa desde y vuelve a llamar a la funcion pero con un retraso
    if (desde < hasta) {
      desde++; // se va a ir incrementado de a 1
      //luego llama a la funcion 'imprimirNumerosTimeout' con un retraso de 1000ms
      setTimeout(imprimirNumerosTimeout, 1000, desde, hasta);
    }
  });
}
setTimeout(() => {
  // mensaje que se muestra en la consola que dice cual funcion temporizadora se esta usando
  console.log("Usando setTimeout anidado");
  // se llama a la funcion imprimirNumerosTimeout con los valores 'desde' y 'hasta'
  imprimirNumerosTimeout(desde, hasta);
  // calcula el tiempo total en milisegundos para incluir todos los numeros "desde" hasta "hasta"
  // considerando un intervalo de 1 segundo entre cada número
}, (hasta - desde + 2) * 1000);