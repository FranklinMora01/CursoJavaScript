console.log("Hola mundo");

var contactos = [
    {
        "nombre": "Nora",
        "apellido": "Nav",
        "numero": "123456789",
        "gustos": ["Pizza", "Programacion"]
    },
    {
        "nombre": "Harry",
        "apellido": "Potter",
        "numero": "123123123",
        "gustos": ["Hogwarts", "Magia"]
    },
    {
        "nombre": "Sherlock",
        "apellido": "Holmes",
        "numero": "5555888999",
        "gustos": ["Casos interesantes", "Violín"]
    }
]

function buscarPerfil(nombre, propiedad) {

    for(i=0; i<contactos.length;i++){
        if(contactos[i].nombre === nombre)
            return contactos[i][propiedad] || "la propiedad no existe";
    }
    return "El usuario no existe";
}

console.log(`buscando la propiedad gustos para el usuario Nora: ${buscarPerfil("Nora", "gustos")}`);
console.log(`buscando la propiedad direccion para el usuario Harry: ${buscarPerfil("Harry", "direccion")}`);
console.log(`buscando la propiedad apellido para el usuario Sherlock: ${buscarPerfil("Sherlock", "gustos")}`);
console.log(`buscando la propiedad gustos para el usuario Pepe Trueno: ${buscarPerfil("Pepe Trueno", "gustos")}`);
