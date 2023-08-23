

let cuadradoLleno = (caracater, caracterRepetido) => {
    for (let i=0; i<caracterRepetido; i++){
        console.log(caracater.repeat(caracterRepetido));
    }
}

let cuadeadoHueco = (caracater, caracterRepetido) => {
    let cadena="";
    for (let i=0; i<caracterRepetido; i++){  
        for (let j=0; j<caracterRepetido; j++){  
            if (i == 0) {
                cadena += caracater;
            } else if (i == caracterRepetido-1){
                cadena += caracater;
            } else if (j == 0){
                cadena += caracater;
            } else if (j == caracterRepetido-1){
                cadena += caracater;
            } else {
                cadena += " ";
            }
        }
        console.log(cadena);
        cadena="";    
    } 
}

let tableroAjedres = (caracater, caracterRepetido) => {
    for(i=0; i<caracterRepetido; i++){
        if(i % 2 == 0){
            console.log((caracater+" ").repeat(caracterRepetido));
        }else {
            console.log((" " + caracater).repeat(caracterRepetido-1));
        }
        
        
    }
}

let piramideIzquierda = (caracater, caracterRepetido) => {
    for(i=0; i<=caracterRepetido; i++){
        console.log(caracater.repeat(i));
    }
}

let piramideCentrada = (caracater, caracterRepetido) => {
    let j =1;
    for(i=0; i<caracterRepetido; i++){
        console.log(caracater.repeat(j));
        j+=2;
    }
}

//console.log(`dibujar un cuadrado lleno:`);
//cuadradoLleno("*", 5);
//console.log(`dibujar un cuadrado hueco:`);
//cuadeadoHueco("*", 5);
//console.log(`dibujar un tablero de ajedres:`);
//tableroAjedres("*", 8);
//console.log(`dibujar piramide izquierda:`);
piramideIzquierda("*", 10);
//console.log(`dibujar piramide centrada:`);
piramideCentrada("*", 10);