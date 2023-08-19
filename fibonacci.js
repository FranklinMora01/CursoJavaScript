function serieFibonacci(num) {
    varActual = 1;
    varAnterior = 0;

    for(let i=1; i<num; i++){  
        varFibonacci = varActual + varAnterior;  
        console.log(varFibonacci);
        varAnterior = varActual;
        varActual = varFibonacci;
    }
   return varFibonacci;
}

secuencia = 10;
console.log(`el resultado de la suma fibonacci de ${secuencia} es ${serieFibonacci(secuencia)}`);

