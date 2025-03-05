// ¿Cuál es el resultado del código a continuación ?
// let i = 0;
// setTimeout(() => alert(i), 100); // ?
//
// asumimos que el tiempo para ejecutar esta función es > 100ms
// for (let j = 0; j < 100000000; j++) {i++; }

let i = 0;
setTimeout(() => alert(i), 100); // ?

for (let j = 0; j < 100000000; j++) {
  i++;
}

alert("El resultado motrado por alert(i) sera de 100000000 ya que el for bloquea el hilo principal" +
  " y el setTimeout solo se ejecutara después de que el bucle termine");

// El resultado motrado por alert(i) sera de 100000000 ya que el for bloquea el hilo principal
//  y el setTimeout solo se ejecutara después de que el bucle termine