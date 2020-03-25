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

const MAYORIA_DE_EDAD = 18

const esMayorDeEdad = ({edad}) => edad >= MAYORIA_DE_EDAD

const esMenorDeEdad = ({edad}) => edad <= MAYORIA_DE_EDAD

function imprimirSiEsMayorDeEdad(persona) {
    (esMayorDeEdad(persona))
        ? console.log(`${persona.nombre} tiene ${persona.edad} años por lo cual es mayor de edad`)
        : console.log(`${persona.nombre} tiene ${persona.edad} años por lo cual es menor de edad`);      
}

// function permitirAcceso(persona) {
//     (!esMayorDeEdad(persona))
//         ? console.log(`ACCESO DENEGADO`) : console.log(`ACCESO PERMITIDO`);
// }

function permitirAcceso(persona) {
    (esMenorDeEdad(persona))
        ? console.log(`ACCESO DENEGADO`) : console.log(`ACCESO PERMITIDO`);
}