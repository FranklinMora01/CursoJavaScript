/**Dado el array = [1,2,3,4,5,6]
Iterar por todos los elementos dentro de un array utilizando while y mostrarlos en pantalla.
Iterar por todos los elementos dentro de un array utilizando for y mostrarlos en pantalla.
Iterar por todos los elementos dentro de un array utilizando .forEach y mostrarlos en pantalla.
Mostrar todos los elementos dentro de un array sumándole uno a cada uno.
Generar una copia de un array pero con todos los elementos incrementado en 1.
Calcular el promedio
Crear un array vacío, luego generar 20 números al azar y guardarlos en un array.
Crear un array vacío, luego generar N números al azar y guardarlos en un array, N es introducido por el usuario a través de un prompt.
Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "café", "rosa"] determinar si un color introducido por el usuario a través de un prompt se encuentra dentro del array o no. */


let miArreglo = [1,2,3,4,5,6];
let i =0;
console.log("recorriendo el vector con while");
while(i<miArreglo.length){
    console.log(miArreglo[i]);
    i++;
}

console.log("recorriendo el vector con for");
for(i=0; i<miArreglo.length; i++)
    console.log(miArreglo[i]);

console.log("recorriendo el vector con forEach");
miArreglo.forEach((elemento) => console.log(elemento));

console.log("recoorer los elementos y sumarle 1 acada elemento");
miArreglo.forEach((elemento) => console.log(elemento+1));

console.log("Generar una copia de un array pero con todos los elementos incrementado en 1.");
const nuevoAreglo = miArreglo.map((elemento) => elemento +1);
console.log(`Arreglo antiguo: [ ${miArreglo} ]`);
console.log(`Arrelgo nuevo:   [ ${nuevoAreglo} ]`);


console.log("Calcular el promedio");
const suma = miArreglo.reduce((acumulador, elemento) => acumulador + elemento, 0);
console.log(`el promedio es: ${suma / miArreglo.length}`);

console.log("Crear un array vacío, luego generar 20 números al azar y guardarlos en un array.");
let numeroArreglo = [];
let numAleatorio = (max , min, iteraciones) => {
    for(let i=0; i<iteraciones; i++){
        numeroArreglo.push(Math.floor(Math.random() * (max - min)) + min);
    }
    return numeroArreglo; 
} 
console.log(numAleatorio(20, 1, 20));

console.log("Crear un array vacío, luego generar N números al azar y guardarlos en un array, N es introducido por el usuario a través de un prompt.");
const SimularValorIntroducido = 50;
console.log(numAleatorio(20, 1, SimularValorIntroducido));

console.log("Dado un array que contiene [\"azul\", \"amarillo\", \"rojo\", \"verde\", \"café\", \"rosa\"] determinar si un color introducido por el usuario a través de un prompt se encuentra dentro del array o no. */");
const SimularValorIntroducido2 = "verde";
const colores = ["azul", "amarillo", "rojo", "verde", "café", "rosa"];
var color = colores.find((elemento) => SimularValorIntroducido2 == elemento ? elemento : null)
if (color) 
    console.log(`se encontro el color ${color}`);
 else 
    console.log(`no se encontro el color`);
