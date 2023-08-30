/**1. Crear un objeto:
Crea un objeto llamado pelicula con propiedades como titulo, director, anio y genero.
*/

let pelicula = {
  titulo: "Hasta el Limite",
  director: "Mel Gibson", 
  anio: 2022,
  genero: ["acción", "Drama"]
}

/**2. Acceder a propiedades:
Dado el objeto persona con propiedades como nombre y edad, crea una función que imprima un mensaje como "Juan tiene 25 años". */
let persona = {
  nombre: "Juan",
  edad: 25,
  profesion: "ingeniero",
  calcularEdad: function(fecNac){
    var fechaActual = new Date();
    var fechaLegible = fechaActual.getFullYear();
    let edad = fechaLegible - fecNac;
    return edad; 
  }
};
console.log(`${persona.nombre} tiene ${persona.edad} años`);

/**3. Agregar método:
Agrega un método llamado calcularEdad al objeto persona que calcule y devuelva la edad actual en base a su año de nacimiento. */
console.log(`se ingresa como año de nacimiento 1981, por lo tanto la edad Acual es: ${persona.calcularEdad(1981)}`);

/**4. Lista de objetos:
Crea una lista de objetos que representen libros, cada uno con propiedades como titulo, autor y genero. */
let libros = [
  {
      titulo: "Cien años de soledad",
      autor: "Gabriel García Márquez",
      genero: "Realismo mágico"
  },
  {
      titulo: "El Señor de los Anillos",
      autor: "J.R.R. Tolkien",
      genero: "Fantasía"
  },
  {
      titulo: "1984",
      autor: "George Orwell",
      genero: "Clásico"
  },
  {
      titulo: "Orgullo y prejuicio",
      autor: "XXXXXXX",
      genero: "Clásico"
  }
];
/**5. Filtrar objetos:
Dada la lista de libros del ejercicio anterior, crea una función que filtre los libros por género y devuelva una lista de aquellos que coinciden. */

let genero = "Clásico";
let filtrarPorGenero = libros.filter(function(libros) {
  return libros.genero == genero;
});


function recorreVector(filtrar) {
  filtrar.forEach(function(libros){
    console.log(libros.titulo);
    console.log(libros.autor);
    console.log(libros.genero);
});
}

console.log(`buscar los libros que coincidan con el genero ${genero}`);
recorreVector(filtrarPorGenero);

/**6. Constructor de objetos:
Crea un constructor de objetos llamado Producto que tenga propiedades como nombre, precio y descuento. */

function Producto(nombre, producto, precio) {
  this.nombre = nombre;
  this.producto = producto;
  this.precio = precio;
  this.listarProductos = function() {
    console.log(`Listar Productos, Nombres: ${this.nombre} Producto: ${this.producto} Precio: ${this.precio}`);
  }
  
};

let producto = new Producto("Computador","DELL","1200000");
producto.listarProductos();

/**7. Encapsulamiento:
Utiliza el concepto de encapsulamiento para crear un objeto cuentaBancaria que tenga propiedades como saldo y métodos para depositar y retirar dinero. */

/**7. Encapsulamiento:
Utiliza el concepto de encapsulamiento para crear un objeto cuentaBancaria que tenga propiedades como saldo y métodos para depositar y retirar dinero. */
function CuentaBancaria (saldo) {
  //propiedades
  _saldo = saldo;

  //metodos
  this.depositar = (saldo) => {
    if(saldo > 0) {
      _saldo+=saldo;
      console.log(`se depositaron ${saldo} total en la cuenta ${_saldo}`);
      return _saldo;
    }else {
      console.log(`el saldo que estas depositando es negativo favor depositar un saldo mayor a 0`);
    }
    
  };

  this.retirar = function(saldo) {
    if(saldo > 0 && saldo <= _saldo){
      _saldo-=saldo;
      console.log(`se retiraron ${saldo} total en la cuenta ${_saldo}`);
      return _saldo;
    }else if(saldo < 0){
      console.log(`no puedes retirar saldos negativos, favor retirar un saldo mayor que 0`);
    } else {
      console.log(`el saldo que desea retirar es mayor al saldo de la cuenta, favor ingresar un monto valido`);
    }
  };

  this.saldo = function() {
    return _saldo;
  }

}

let miCuenta = new CuentaBancaria(2000);
console.log(`saldo inicial ${miCuenta.saldo()}`);
miCuenta.depositar(20000);
miCuenta.retirar(2000);
