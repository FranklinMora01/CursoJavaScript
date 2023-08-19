/**En este ejercicio vas a pedir al usuario que teclee tres números enteros y el script mostrará como resultado el valor medio de los tres.

Recuerda que la media de tres números se calcula sumando los tres y dividiendo entre 3. */

let vecNumeros = [];

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`Ingrese el numero 1: `, (num1) => {   
  vecNumeros.push(num1);
  rl.question(`Ingrese el numero 2: `, (num2) => {   
    vecNumeros.push(num2);
    rl.question(`Ingrese el numero 3: `, (num3) => {   
      vecNumeros.push(num3);
      //de la manera mas facil aplicando metodo
      //const mayor = Math.max(...vecNumeros);
      let mayor=0;
      for(i=0; i<vecNumeros.length; i++){
        vecNumeros[i] > mayor ? mayor=vecNumeros[i] : mayor=mayor;
      }    
      console.log('El número mayor es:', mayor);
      rl.close();
    });
  });
});







