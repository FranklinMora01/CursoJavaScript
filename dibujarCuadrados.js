

let cuadradoLleno = (caracater, caracterRepetido) => {
    for (let i=0; i<caracterRepetido; i++){
        console.log(caracater.repeat(caracterRepetido));
    }
}

let cuadeadoHueco = (caracater, caracterRepetido) => {
    let cadena="";
    for (let i=0; i<caracterRepetido; i++){  
        for (let j=0; j<caracterRepetido; j++){  
            i == 0 
            ? cadena += caracater 
            : i == caracterRepetido-1
            ? cadena += caracater :
            j == 0
            ? cadena += caracater :
            j == caracterRepetido-1
            ? cadena += caracater :
            cadena += " ";
          
            /*if (i == 0) {
                cadena += caracater;
            } else if (i == caracterRepetido-1){
                cadena += caracater;
            } else if (j == 0){
                cadena += caracater;
            } else if (j == caracterRepetido-1){
                cadena += caracater;
            } else {
                cadena += " ";
            }*/
        }
        console.log(cadena);
        cadena="";    
    } 
}

let tableroAjedres = (caracater, caracterRepetido) => {
    for(i=0; i<caracterRepetido; i++){
        i % 2 == 0 ? console.log((caracater+" ").repeat(caracterRepetido)) : console.log((" " + caracater).repeat(caracterRepetido-1));    
    }
}

let piramideIzquierda = (caracater, caracterRepetido) => {
    for(i=0; i<=caracterRepetido; i++){
        console.log(caracater.repeat(i));
    }
}

let piramideCentrada = (caracater, caracterRepetido) => {
    let j =1;
    for(let i=0; i<caracterRepetido; i++){
        console.log(caracater.repeat(j));
        j+=2;
    }
}

let piramideInvertida = (caracater, caracterRepetido) => {
    let j = (caracterRepetido*2)-1;
    for(let i=0; i<caracterRepetido; i++){
        console.log(caracater.repeat(j));
        j=j-2;
    }
}

let diamante = (caracater, caracterRepetido) => {
    console.log(piramideCentrada(caracater, caracterRepetido) + piramideInvertida(caracater, caracterRepetido) );
}

let letraCaracter = "*"
let iteraciones = 10;

console.log(`dibujar un cuadrado lleno:`);
cuadradoLleno(letraCaracter, iteraciones);
console.log(`dibujar un cuadrado hueco:`);
cuadeadoHueco(letraCaracter, iteraciones);
console.log(`dibujar un tablero de ajedres:`);
tableroAjedres(letraCaracter, iteraciones);
console.log(`dibujar piramide izquierda:`);
piramideIzquierda(letraCaracter, iteraciones);
console.log(`dibujar piramide centrada:`);
piramideCentrada(letraCaracter, iteraciones);
console.log(`dibujar piramide invertida:`);
piramideInvertida(letraCaracter, iteraciones);
console.log(`dibujar un Diamante:`);
diamante(letraCaracter, iteraciones);