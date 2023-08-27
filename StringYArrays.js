/**El usuario ingrese un string con varias palabras separadas por coma en un popup y se deben convertir en un array, (el usuario ingresa: "1,2,3,4,5" y se convierte en [1,2,3,4,5])
 */
var str = "1,2,3,4,5";
var miVector = str.split(",").map(function(item) {
    return parseInt(item);
})
console.log(`Simulando que el usuario ingreso por popup los valores ${str}`);
console.log(`convertirlos a un arreglo ${JSON.stringify(miVector)}`)

/**Convertir un array ingresado dentro del código en un string (existe un método en javascript para hacerlo) */
var vector = [1,2,3,4,5]
//var caracteres = vector.join(" ");  //convierte el arreglo a caracteres
var caracteres = String(vector);      //convierte el arreglo a caracteres
console.log(`pasar el arreglo ${JSON.stringify(vector)} a un string`);
console.log(`queda asi: ${caracteres}`);

//Unión, intersección y conteo

/** Existen dos arrays, cada uno con 5 palabras, generar un nuevo array con la intersección de ambos elementos. (Ejemplo: [1,2,3] unión [1,2,4] = [1,2]*/
let arreglo1 = [1,2,3];
let arreglo2 = [1,2,4];
var insterseccion = arreglo1.filter(function(elemento) {
    return arreglo2.includes(elemento);
})
console.log(`intersección de dos arreglos arrglo1 ${JSON.stringify(arreglo1)} y arreglo2 ${JSON.stringify(arreglo2)} la intersección es: ${JSON.stringify(insterseccion)}`)
/**Existen dos arrays, cada uno con 5 palabras, generar un nuevo array con la unión de ambos elementos, (Ejemplo: [1,2,3] unión [1,2,4] = [1,1,2,2,3,4] */
//let union = 
let union = [];
let longitud = Math.max(arreglo1.length, arreglo2.length);
for(let i=0; i<longitud; i++){
    (i < arreglo1.length) ? union.push(arreglo1[i]): null;
    (i < arreglo2.length) ? union.push(arreglo2[i]): null;
}
console.log(union);

/**El usuario ingresa dos conjuntos de números separados por coma, el programa debe determinar si ambos conjuntos tienen la misma cantidad de números. */
let conjunto1 = [1,2,3,4,5,6];
let conjunto2 = [1,2,3,4,5,6];
let compararConjunto = (conj1, conj2) => (conj1.length == conj2.length) ? true : false;
console.log(`simular que el usuario ingreso 2 conjuntos de numeros conjunto 1 ${conjunto1}, conjunto 2 ${conjunto2} comparar sin son iguales`); 
console.log(compararConjunto(conjunto1, conjunto2) ? "SI Son iguales" : "NO Son iguales");


/*El usuario ingresa dos conjuntos de números separados por coma, si ambos conjuntos tienen la misma cantidad de elementos mostrar un arreglo que contenga la suma de cada elemento. (Ejemplo: [1,2,3] + [2,3,4] = [3,5,7])*/
let sonIguales = compararConjunto(conjunto1, conjunto2);
 let repuesta = () => {
    if(sonIguales){
        var sumConjunto = [];
        for(let i=0; i<conjunto1.length; i++){
            sumConjunto.push(conjunto1[i] + conjunto2[i]);    
        }
        return `si son iguales la suma en el tercer conjunto es ${sumConjunto}`;
    } else {
        return "No son iguales no se suman";
    }  
 }
console.log(`si ambos conjuntos tiene la misma cantidad de elementos mostrar la suma conjunto1 ${conjunto1}, conjunto2 ${conjunto2}`);
console.log(repuesta());

/**Crear una función que reciba un arreglo con números y devuelva un nuevo arreglo con solo los números pares, hint: utilizar reduce() */
let arreglo4 = [1,2,3,4,5,6,7,8,9,10];
let arregloPares = [];
const pares = arreglo4.reduce( (acumulador, valorActual) => {
    if(valorActual % 2 == 0) {
       arregloPares.push(valorActual)
    }
    return arregloPares
}, 0 );
console.log(`obtener los numeros pares del arreglo4 ${arreglo4}, los pares son ${pares}`);