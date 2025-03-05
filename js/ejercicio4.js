// 4. Crear una función filter que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • sí dicho callback devuelve true, pushea el elemento a un nuevo array
// • devuelva el array final con los elementos que pasaron el "filtro".

const filter = function (arreglo, callback) {
  const nuevoArreglo = [];
  for (let i = 0; i < arreglo.length; i++) {
    if (callback(arreglo[i]) > 20) {
      nuevoArreglo.push(arreglo[i]);
    }
  }
  return nuevoArreglo;
}
function multiplicar(numero) {
  numero *= 2;
  return numero;
}
let arreglo = [1, 2, 45, 30, 5];
console.log(filter(arreglo, multiplicar));