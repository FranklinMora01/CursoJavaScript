/**Cambio de unidades. en este ejercicio debes convertir a segundos una medida de tiempo dada en horas y minutos.

Recuerda una hora son 6o minutos y cada minuto son 60 segundos. */

let hora = 2;
let minutos = 30;
let segundos=0;

function convertirAMinutos(hora){
    for(let i=0; i<hora; i++){
        minutos += 1 * 60;
    }
}

function convertirASegundos(minutos){
    for(let i=0; i<minutos; i++){
        segundos += 1 * 60;
    }
}


console.log(`tenemos en tiempo ${hora} Horas y ${minutos} Minutos`);
convertirAMinutos(hora);
convertirASegundos(minutos);
console.log(`se convierten a segundos ${segundos}`)
