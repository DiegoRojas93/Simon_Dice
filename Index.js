var diego = {
    nombre: `Diego`,
    apellido: `Rojas`,
    edad: 26
}

var sacha = {
    nombre: `Sacha`,
    apellido: `Lifszyc`,
    edad: 28
}

var dario = {
    nombre: `Dario`,
    apellido: `Susnisky`,
    edad: 27
}

function cumpleaños(persona) {
    return{
        ...persona,
        edad : persona.edad + 1,
        telefono : 3156180970 
    }
}