// Crear una función every que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva true si todas las llamadas al callback devolvieron true

let arreglo = [31, 95, 23, 15, 75];
const every = function (arreglo,callback) {
  for (let i = 0; i < arreglo.length; i++) {
    if (!callback(arreglo[i])) {
      return false;
    }
  }
  return true;
}
function multiplo5(num) {
  return num % 5 == 0;
}
console.log(every(arreglo, multiplo5));