// Crear una función findIndex que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva el índice del elemento pasado como argumento del primer callback que
// devuelva true
// • sí ningún callback devuelve true, devuelva undefined

let arreglo = [29, 15, 12, 48, 99];

const findIndex = function (arreglo,callback) {
  for (let i = 0; i < arreglo.length; i++) {
    if (callback(arreglo[i])) {
      return i;
    }
  }
  return undefined;
}
function multi3(num) {
  return num % 3 == 0;
}
console.log(findIndex(arreglo,multi3));