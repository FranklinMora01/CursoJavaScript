/**Crear un objeto persona: Crea un objeto llamado persona con propiedades como nombre, edad y dirección. */
let persona = {
    nombre: "Franklin Mora",
    edad: 41,
    direccion: "Chile"
};
console.log(persona);

/*Acceder a propiedades: Accede a las propiedades del objeto persona y muestra el nombre y la edad en la consola. */
console.log(`Nombre: ${persona.nombre}`);
console.log(`Edad: ${persona.edad}`);

/**Modificar propiedades: Cambia la edad de la persona a 35 años. */
persona.edad = 35;
console.log(`Nueva Edad: ${persona.edad}`);

/**Agregar propiedades: Agrega una propiedad email a la persona. */
persona.mail = "franklin.mora01@gmail.com";
console.log(persona);
console.log(`correo: ${persona.mail}`);

/**Eliminar una propiedad: Elimina la propiedad dirección de la persona. */
delete persona.direccion;
console.log(persona);

/**Recorrer un objeto: Itera a través de las propiedades de la persona e imprime sus valores. */
for (let propiedad in persona){
    console.log(`${propiedad}: ${persona[propiedad]}`)
}

/**Método en un objeto: Crea un método dentro del objeto persona que imprima un saludo. */
persona.saludar = function() {
    console.log(`Hola soy ${persona.nombre}`);
};
persona.saludar();

/**Constructor de objetos: Define una función constructora para crear objetos de tipo "Coche" con propiedades como marca y modelo. */
function Coche(marca, modelo){
    this.marca = marca;
    this.modelo = modelo;
};
const miCoche = new Coche("BMW","X7 2023");

/**Prototipos: Agrega un método arrancar al prototipo de la función constructora "Coche */
Coche.prototype.arrancar = function() {
    console.log(`${this.marca} ${this.modelo} arranco`);
};
miCoche.arrancar();

/**Herencia: Crea un objeto "Camion" que herede de "Coche" y tenga una propiedad adicional llamada "cargaMaxima". */
function Camion(marca, modelo, cargaMaxima) {
    Coche.call(this, marca, modelo);
    this.cargaMaxima = cargaMaxima;
}
const miCamion = new Camion("Ford", "F150", 2000);

/**Encapsulación: Utiliza closures para encapsular propiedades y métodos de un objeto. */
function crearPersona(nombre){
    let edad = 0;

    function envejecer(){
        edad ++;
    }

    return {
        getNombre: function(){
            return nombre;
        },
        getEdad: function(){
            return edad;
        },
        cumpleAnios: function(){
            envejecer();
        }
    };
}
const personas = crearPersona("Franklin");
personas.cumpleAnios();
console.log(`${personas.getNombre()} tiene ${personas.getEdad()} años`);

/**Objetos anidados: Crea un objeto con propiedades anidadas */
const empresa = {
    nombre: "Mi Empresa",
    direccion : {
        calle: "calle principal",
        ciudad: "ciudad",
        codigoPostal: "12345"
    }
}

/**Acceder a propiedades anidadas: Accede a la propiedad "calle" del objeto empresa. */
console.log(empresa.direccion.calle);

/**Método en objetos anidados: Agrega un método mostrarDireccion que imprima la dirección completa de la empresa. */
empresa.mostrarDireccion = function(){
    const dir = this.direccion;
    console.log(`direccion de la empresa ${dir.calle} ${dir.ciudad} ${dir.codigoPostal}`);
}
empresa.mostrarDireccion();

/**Objetos como parámetros de funciones: Crea una función que tome un objeto como parámetro y lo modifique. */
function modificarPersona (persona){
    persona.edad += 1;
}
modificarPersona(persona);
console.log(`la persona ${persona.nombre} tiene ${persona.edad}`);

/**Comparar objetos: Compara dos objetos para verificar si son iguales. */
function compararObjetos(obj1, obi2){
    return (JSON.stringify(obj1) === JSON.stringify(obi2)) ? true : false;
}
const objA = {a: 1, b: 2};
const objB = {a: 1, b:2};
console.log(`Son iguales ${compararObjetos(objA, objB)}`);

/**Clonar objetos: Crea una función para clonar un objeto. */
function clonarObjeto(objClonar){
    return Object.assign({}, objClonar);
}
const copiaPersona = clonarObjeto(persona);
console.log(copiaPersona);

/**Propiedades calculadas: Crea una propiedad calculada en un objeto. */
let triangulo = {
    base: 5,
    altura: 8,
    get area(){
        return 0.5 * this.base * this.altura;
    }
}
console.log(`el area del trianfulo es: ${triangulo.area}`)

/**Objetos como estructuras de datos: Utiliza un objeto como una estructura de datos tipo diccionario. */
const dicionario = {
    palabra1: "significado1",
    palabra2: "significado2"
};
console.log(dicionario.palabra1);

/**Manejo de objetos con destructuración: Usa la destructuración para extraer propiedades de un objeto. */
const {nombre, edad} = persona;
console.log(nombre);
console.log(edad);

