const myArr = ['Kolade', 'Chelsea', 10, true];

console.log(myArr);
console.table(myArr);
/**------------------------------------------------------------------------------------ */
const myObj = {
    name: 'Kolade',
    luckyNum: 10,
    lovesFootball: true,
  };
  
  console.log(myObj);
  console.table(myObj);
/**------------------------------------------------------------------------------------ */

  const myNum = '5';

convertNum1 = +myNum;
convertNum2 = Number(myNum);

console.log(myNum, typeof myNum); // 5 'number'
console.log(convertNum1, typeof convertNum1); // 5 'number'
console.log(convertNum2, typeof convertNum2); // 5 'number'
/**------------------------------------------------------------------------------------ */
console.group('Bio:');

console.log('My name is Kolade');
console.warn("I don't like to be late");
console.error('You came late');

console.groupEnd();
/**------------------------------------------------------------------------------------ */
const styles = `padding: 15px;
                background-color: #2ecc71;
                color: black`;

console.log('%c Hello, Everyone!', styles);
/**------------------------------------------------------------------------------------ */
const str = 'john';
const capitalizedStr = (str) => str.charAt(0).toUpperCase() + str.slice(1);

console.log(capitalizedStr(str)); // John
console.log(capitalizedStr('doe')); // Doe
/**------------------------------------------------------------------------------------ */
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];

console.log(copiedArray); // [1, 2, 3]
/**------------------------------------------------------------------------------------ */
// merge two or more arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const mergedArray = [...arr1, ...arr2];
//console.table(mergedArray)

console.log(mergedArray); // [1, 2, 3, 4, 5, 6
/**------------------------------------------------------------------------------------ */
// Traditional Function Expression
function add1(a, b) {
    return a + b;
  }
  // Arrow Function
  const add2 = (a, b) => a + b;
console.log(add1(1, 2)); // 3
console.log(add2(5, 8)); // 13
// Using Traditional Function Expression
const numbers1 = [3, 4];
const numbers2 = [2, 8];

const squared1 = numbers1.map(function (num) {
  return num * num;
});

// Using Arrow Function
const squared2 = numbers2.map((num) => num * num);

console.log(squared1); // [ 9, 16 ]
console.log(squared2); // [ 4, 64 ]

/**------------------------------------------------------------------------------------ */
/**Sugerencia 14: use los métodos startsWith()y endsWith()de cadena para obtener el inicio y el final de una cadena
Los métodos startsWith()y endsWith()lo ayudan a determinar si una cadena comienza o termina con una subcadena específica. Dado que ambos devuelven trueo false, son útiles para diversas manipulaciones de cadenas y comprobaciones condicionales.

Aquí está su uso básico: */
const mensaje = 'Hola Mundo';
console.log(mensaje.startsWith('H'));
console.log(mensaje.startsWith('h'));
console.log(mensaje.endsWith('O'));
console.log(mensaje.endsWith('o'));
//Con los dos métodos, puede extraer mediante programación un determinado texto o nombre de archivo, como puede ver a continuación:
const files = ['text.txt', 'document.txt', 'image.jpg', 'script.js', 'docs.txt', ];
const textFile = files.filter((file) => file.endsWith(".txt"));
console.log(textFile);

//Tanto el método startsWith()como endsWith()también admiten posiciones iniciales y finales opcionales para limitar el rango de la cadena donde se realiza la verificación:
const text = 'Welcome to freeCodeCamp';

console.log(text.startsWith('W', 0)); // true
console.log(text.startsWith('freeCodeCamp', 11)); // true
console.log(text.endsWith('f', 11)); // false

/**------------------------------------------------------------------------------------ */
/*Sugerencia 15: use trim(), trimStart()y trimEnd()para manejar los espacios en blanco
El trim()método elimina los espacios en blanco en ambos extremos de la cadena. Elimina los trimStart()espacios en blanco al comienzo de la cadena. Y trimEnd()elimina los espacios en blanco al final de la cadena.

Estos tres métodos son útiles cuando necesita limpiar las entradas del usuario o eliminar los espacios en blanco iniciales o finales de las cadenas.*/
const greet = '   Hello world!   ';
console.log(greet.trim());
// Hello world!

const greet2 = '   Hello world!   ';
console.log(greet2.trimStart());
// Output: 'Hello, world!   '

const texto = '   Hello world!   ';
console.log(texto.trimEnd());
// Output: '   Hello world!'

const input = '   ';
if (input.trim() === '') {
  console.log('The input is empty but has whitespace characters.');
} else {
  console.log('The input contains non-whitespace characters.');
}

// Output: The input is empty but has whitespace characters.
/**------------------------------------------------------------------------------------ */
/**Sugerencia 16: use replace()con los métodos toUpperCase()y toLowerCase()para convertir entre casos
Los métodos toUpperCase ()y toLowerCase()convierten una cadena a mayúsculas y minúsculas, mientras que replace()toman una cadena y la reemplazan con una cadena especificada.

replace()también puede tomar expresiones regulares. Entonces puede adaptar esa expresión regular para una parte particular de la cadena y luego usar los métodos toLowerCase()y toUpperCase()para convertir entre casos.

En el fragmento de código a continuación, usé la expresión regular (^|\s)\w/para buscar la primera palabra y cualquier otra palabra después de un espacio, luego las convertí a letras mayúsculas: */

function toTitleCase(str) {
    return str.toLowerCase().replace(/(^|\s)\w/g, (match) => match.toUpperCase());
  }
  
  console.log(toTitleCase('welcome to twitter (now x)!'));
  // Welcome To Twitter (now X)!

  //También pude convertir a snake_case usando la expresión regular /\s+/gpara buscar cada espacio y reemplazarlos con un guión bajo ( _)
  function toSnakeCase(str) {
    return str.toLowerCase().replace(/\s+/g, '_');
  }
    console.log(toSnakeCase('Convert this to snake case'));
  // convert_this_to_snake_case

  function toSentenceCase(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }
  
  console.log(toSentenceCase('hELLo TwEePs! HOW ARE YOU TODAY?'));
  // Hello tweeps! how are you today?
/**------------------------------------------------------------------------------------ */
/**Sugerencia 17: use el Array.from()método para crear matrices a partir de objetos similares a matrices o iterables
Los objetos tipo matriz o iterables incluyen los múltiples argumentos que pasa a la función y los elementos DOM que selecciona con el querySelectorAll()método, por ejemplo, elementos de lista.

Así es como creé una matriz a partir de un argumento de función y usé el reduce()método de matriz en ellos: */

function sumArguments() {
    // The "arguments" object is array-like
    const argsArray = Array.from(arguments);
    return argsArray.reduce((acc, num) => acc + num, 0);
  }
  
  const result = sumArguments(1, 2, 3, 4, 5);
  console.log(result); // Output: 15

//Y así es como creé una matriz a partir de un conjunto de elementos de lista seleccionados con quersySelectorAll():



/**------------------------------------------------------------------------------------ */
/**Sugerencia 18: use el map()método para transformar todos los elementos de una matriz
El map()método es un método de matriz de orden superior. Te permite transformar elementos de un arreglo en nuevos valores, creando un nuevo arreglo con la misma longitud que el original pero con elementos modificados. */



/**------------------------------------------------------------------------------------ */