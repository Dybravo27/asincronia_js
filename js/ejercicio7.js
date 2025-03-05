// Crear una función find que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva el elemento pasado como argumento del primer callback que devuelva true
// • sí ningún callback devuelve true, devuelva undefined

let arreglo = [85, 20, 84, 51, 6, 8];
const find = function (arreglo,callback) {
  for (let i = 0; i < arreglo.length; i++) {
    if (callback(arreglo[i])) {
      return true;
    }
  }
  return undefined;
}
function multiplo10(num) {
  return num % 10 === 0;
}

console.log(find(arreglo,multiplo10));
