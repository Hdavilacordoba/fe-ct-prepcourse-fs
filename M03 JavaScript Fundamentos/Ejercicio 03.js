/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*3️⃣ EJERCICIO 03 3️⃣*/

function sonIguales(x, y) {
   // Retorna true si "x" e "y" son iguales.
   // De lo contrario, retorna false.
   // Tu código:
   if (x === y){
      return "La igualda es: " + true;
   } else {
      return "La igualdad es: " + false;
   }
   }
   var x = 78;
   var y = 4;
   var resultado = sonIguales(x,y);
console.log(resultado);
// La igualdad en cosola en este caso debe imprimirse como falsa, ya que 78 no es igual 4. 

function tienenMismaLongitud(str1, str2) {
   // Retorna true si los dos strings tienen la misma longitud.
   // De lo contrario, retorna false.
   // Tu código:
   return str1.length === str2.length; 
}
   var tex1 = 'Hola mundo';
   var tex2 = 'H mundo';
   var rsultado = tienenMismaLongitud(tex1,tex2);
console.log("La igualdad es: " + rsultado);
// La igualdad en cosola en este caso debe imprimirse como falsa, ya que los string no son de la misma longitud. 

function menosQueNoventa(num) {
   // Retorna true si el argumento "num" es menor que noventa.
   // De lo contrario, retorna false.
   // Tu código:
   if (num <= 90){
      return "Esto es: " + true;
   } else {
      return "Esto es: " + false;
   }
 }

function mayorQueCincuenta(num) {
   // Retorna true si el argumento "num" es mayor que cincuenta.
   // De lo contrario, retorna false.
   // Tu código:
   if (num >= 50){
      return "Esto es: " + true;
   } else {
      return "Esto es: " + false;
   }
}

function esPar(num) {
   // Retorna true si "num" es par.
   // De lo contrario, retorna false.
   // Tu código:
   if (num % 2 === 0){
      return "Esto es: " + true;
   } else {
      return "Esto es: " + false;
   }
}

function esImpar(num) {
   // Retorna true si "num" es impar.
   // De lo contrario, retorna false.
   // Tu código:
   if (num % 2 !== 0){
      return "Esto es: " + true;
   } else {
      return "Esto es: " + false;
   }
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   tienenMismaLongitud,
   sonIguales,
   menosQueNoventa,
   mayorQueCincuenta,
   esPar,
   esImpar,
};
