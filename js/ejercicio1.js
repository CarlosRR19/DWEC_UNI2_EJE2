var x = prompt("Introduce un número");
var y = prompt("Introduce otro número");

console.log("Número Y redondeado al alza al siguiente entero: " + Math.ceil(y));
console.log("Número X redondeado a la baja al anterior entero: " + Math.floor(x));
console.log("Entero más próximo de Y: " + Math.round(y));
console.log("Valor aleatorio entre 0 y 1: " + Math.random());
console.log("El valor de X elevado a Y: " + Math.pow(x, y));
console.log("La raíz cuadrada de Y: " + Math.sqrt(y));
console.log(
  "El máximo y el mínimo entre X e Y: " +
    Math.max(x, y) +
    " / " +
    Math.min(x, y)
);
