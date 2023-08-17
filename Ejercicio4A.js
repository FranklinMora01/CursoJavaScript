//A partir del siguiente array que se proporciona: var valores = [true, 5, false, "hola", "adios", 2];
//1) Determinar cual de los dos elementos de texto es mayor
//2) Utilizando exclusivamente los dos valores booleanos del array, determinar los operadores necesarios para obtener un resultado true y otro resultado false
//3) Determinar el resultado de las cinco operaciones matemáticas realizadas con los dos elementos numéricos


const valores = [true, 5, false, "hola", "adios", 2];
let vecTexto = [];
let vecBoolean = [];
let vecNumeros = [];

function recorrerVector(vector){
    vector.forEach(function(elemento){
    if(typeof elemento === "string"){
        //console.log(elemento);
        vecTexto.push(elemento);      
    } else if (typeof elemento === "boolean") {
        vecBoolean.push(elemento);
    } else {
        vecNumeros.push(elemento)
    }
})
    
}

function hallarMayorTexto(vector) {
    let j = 0;
    while (j < vector.length-1){
        vector[j] > vector[j+1] ? console.log(`el texto mayor es: ${vector[j]}`) : console.log(`el texto mayo es: ${vector[j+1]}`);
        j++;
    }
}

function evaluarVerdaderoFalso(vector){ 
    for (const indice in vector){
        vector[indice] === true ? console.log(`la variable es: ${vector[indice]}`) : console.log(`la variable es: ${vector[indice]}`);
    }
}

function operacionesMatematicas(vector){
    console.log(`la suma de los dos numeros es: ${vector[0] + vector[1]}`);
    console.log(`la resta de los dos numeros es: ${vector[0] - vector[1]}`);
    console.log(`la multiplicacion de los dos numeros es: ${vector[0] * vector[1]}`);
    console.log(`la division de los dos numeros es: ${vector[0] / vector[1]}`);
}



recorrerVector(valores);
//console.log(vecTexto);
//console.log(vecBoolean);
//console.log(vecNumeros);
hallarMayorTexto(vecTexto);
evaluarVerdaderoFalso(vecBoolean);
operacionesMatematicas(vecNumeros);