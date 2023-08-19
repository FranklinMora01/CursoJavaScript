//leer un numero entero positivo X y separarlos por unidades. 

const numero = 818;
let vecNumerosSeparados = [];

function separar(num){
    while(num > 10){
            let centena = num % 10
            vecNumerosSeparados.unshift(centena);
            num = Math.floor(num / 10);
    }
    vecNumerosSeparados.unshift(num);
}

console.log(`el valor numero ${numero} se va a separar en unidades`);
separar(numero);

vecNumerosSeparados.forEach((elemento) =>{
    console.log(elemento);
});

