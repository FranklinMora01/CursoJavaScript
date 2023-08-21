//ingresar un numero y ver si es capicua

const numeros =1000;
let numInvertido=0;

function separar(num){
    let vecNumerosInvertido = [];

    while(num > 10){
            let centena = num % 10
            vecNumerosInvertido.push(centena);
            num = Math.floor(num / 10);
    }
    vecNumerosInvertido.push(num);
    return  numInvertido = parseInt(vecNumerosInvertido.join(''));
  
}

function capicua(num, numInvert) {
    return num == numInvert ? true : false;
}

console.log(`se recorren los numeros desde el 1 hasta el ${numeros} y descterar los numeros capicua`);

for(i=1; i<=numeros; i++){
    separar(i);
    if (capicua(i, numInvertido) == true){
        console.log(`el numero ${i} es un numero capicua`); 
    }
    
}

