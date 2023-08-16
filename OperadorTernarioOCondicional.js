function retornarMinimo(x , y) {
    if(x < y )
        return x;
    else
        return y; 
}
var x = 15;
var y = 15;
console.log(`hallar el minimo entre ${x} y ${y} es: ${retornarMinimo(x, y)}`);
//tambien lo puedo hacer con operador ternario

function retornarMinimoDos(x , y) {
    return x < y ? x : y;
}
console.log(`hallar el minimo con operador ternario entre ${x} y ${y} es: ${retornarMinimoDos(x, y)}`);

//otro ejempl si x es mayor que y muestra x + 2 sino muestra y * 3
console.log(x > y ? x + 2 : y * 3);


//Ejemplo de condiciones ternarios anidados
var a = 20;
var b = 20;
function compararNumeros(a, b){
    return a == b ? "A es igual que B" 
        : a > b ? "A es mayor que B"
        : "B es mayor que A"
}
console.log(`probando operador ternario annidado: ${compararNumeros(a , b)}`);
//fin de operador ternario anidados.