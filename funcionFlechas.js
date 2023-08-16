//retornar un  fecha de forma normal
const fecha = function(){
    return new Date();
}
console.log(fecha);

//con funcion flecha
const fechaDos = () => new Date();
console.log(fechaDos);
//fin del ejempl



//otro ejemplo sumar un numero 
const sumar = function(x){
    return x + 3;
}
console.log(sumar(5));
//con funcion flecha queda asi 
const sumarDos = (x) => x + 3;
console.log(sumarDos(10));
//fin del ejercicio


//concatenar 2 arreglos de forma normanl
const concatenarArreglo = function(arrg1, arrg2) {
    return arrg1.concat(arrg2);
}
console.log(`sin funcion flecha ${concatenarArreglo([1,2], [3,4,5])}`);
//con funcion flecha
const concatenarArregloDos = (arr1, arr2) => arr1.concat(arr2);
console.log(`con funcion flecha ${concatenarArregloDos([1,2], [3,4,5])}`);
//FIN concatenar 2 arreglos de forma normanl


//pasar un valor por defecto por parametro
const incrementar = (num, valor = 1) => num + valor;
console.log(`incrementar el valor pasando un solo parametro: ${incrementar(5)}`);
console.log(`incrementar el valor pasando dos parametros: ${incrementar(5, 3)}`);