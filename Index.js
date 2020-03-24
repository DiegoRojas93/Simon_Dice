var diego = {
    nombre: `Diego`,
    apellido: `Rojas`,
    edad: 26,
    ingeniero: false,
    cocinero: false,
    cantante: false,
    dj : false,
    guitarrista: false,
    drone: true,
}

var sacha = {
    nombre: `Sacha`,
    apellido: `Lifszyc`,
    edad: 16,
    ingeniero: true,
    cocinero: false,
    cantante: false,
    dj : false,
    guitarrista: false,
    drone: true,
}

//Booleanos

function imprimirProfesiones (persona){
    console.log(`${persona.nombre}`);

    (persona.ingeniero===true)
        ? console.log('Si es ingeniero') : console.log('No es ingeniero')
}

function imprimirSiEsMayorDeEdad(persona) {

    (persona.edad>=18)
        ? console.log(`${persona.nombre} tiene ${persona.edad} años por lo cual es mayor de edad`)
        : console.log(`${persona.nombre} tiene ${persona.edad} años por lo cual es menor de edad`);
        
}