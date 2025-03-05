// Crear una función some que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva true si al menos una de las llamadas al callback devolvió true
let arreglo = [2, 23, 45, 95, 87];
const some = function (arreglo,callback) {
  for (let i = 0; i < arreglo.length; i++) {
    if (callback(arreglo[i])) {
      return true;
    }
  }
  return false;
}
function multiplo2(num) {
  return num % 2 == 0;
}
console.log(some(arreglo, multiplo2));
