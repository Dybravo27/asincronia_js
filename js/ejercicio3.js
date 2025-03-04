// Crear una función map que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • obtenga el resultado
// • lo pushee a un nuevo array
// • devuelva el array final con el resultado de cada una de las llamadas al callback.


function map(array,callback) {
    let nuevoArray=[];
    for (let i = 0; i < array.length; i++) {
        nuevoArray.push(callback(array[i]))
    }
    return nuevoArray;
}

let numeros = [1,2,3,4,5];
const numerosDoblados = map(numeros, function(numero) {
    return numero * 2;
});
console.log(numerosDoblados);