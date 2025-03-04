// En el siguiente código hay una llamada programada setTimeout, luego se ejecuta un cálculo
// pesado que demora más de 100 ms en finalizar.
// ¿Cuándo se ejecutará la función programada y por qué se ejecutará?
// a) Después del bucle. Seleccion opcion a ya que el bucle lo que hace
// es bloquear al setTimeout y no se ejecutara hasta que el bucle haya terminado
// b) Antes del bucle.
// c) Al comienzo del bucle.
// ¿Qué va a mostrar alert()?
// el alert lo que muestra es el valor de i el cual sera 100000000 
// ya que el bucle se habra incrementado 100000000 antes de que se ejecute
// el setTimeout, lo cual se mostrara 100000000

let i = 0;
setTimeout(() => alert(i), 100); // ?

for (let j = 0; j < 100000000; j++) {
    i++;
}